import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Collapse, Row } from "reactstrap";
import { subURL } from "../../../../utils/URLs";

const TrendingList = () => {
  const [newsData, setNewsData] = useState([]);
  const [isOpen, setIsOpen] = useState(new Array(newsData.length).fill(false));

  const toggleAccordion = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  useEffect(() => {
    axios
      .get(`${subURL}/trendingnews/`)
      .then((response) => {
        const latestNews = response.data.slice(0, 3);
        setNewsData(latestNews);
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
        newsData.map((item, index) => (
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
      {newsData.length > 0 && (
        <Row>
          <Col lg={12}>
            <div className="text-center">
              <Link to="/news" className="btn btn-primary btn-hover">
                Browse All News <i className="uil uil-arrow-right"></i>
              </Link>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TrendingList;
