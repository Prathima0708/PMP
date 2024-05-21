import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import { subURL } from "../../../utils/URLs";
import ListmoreNews from "../../../adminPanel/News/NewsList/ListmoreNews";

const AccordianContentLeft = () => {
  const [newsData, setNewsData] = useState([]);
  const [isOpen, setIsOpen] = useState(new Array(newsData.length).fill(false));

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 5;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = newsData && newsData.slice(startIndex, endIndex);

  const toggleAccordion = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  useEffect(() => {
    axios
      .get(`${subURL}/trendingnews/`)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {newsData.length === 0 ? (
        <h3 className="fs-15 mt-3 mb-5 text-center">No News found.</h3>
      ) : (
        filteredData.map((item, index) => (
          <div className="accordion-item mt-4 border-0" key={item.id}>
            <h2 className="accordion-header" id={item.id}>
              <button
                className="accordion-button"
                onClick={() => toggleAccordion(index)}
              >
                {item.news_title}
              </button>
            </h2>
            <Collapse isOpen={isOpen[index]}>
              <div className="accordion-body" style={{ lineHeight: "2em" }}>
                {item.news_description}
                <div className="learn-more">
                  <Link
                    to={`/readmore/${item.id}`}
                    className="form-text text-primary"
                  >
                    Read More <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </div>
            </Collapse>
          </div>
        ))
      )}
      {filteredData.length > 0 && (
        <ListmoreNews
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default AccordianContentLeft;
