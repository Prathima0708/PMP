import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import { subURL } from "../../../utils/URLs";

const AccordianContentRight = () => {
  //Collapse Tab

  const [isCollapseFourth, setIsCollapseFourth] = useState(false);
  const toggleFourth = () => setIsCollapseFourth(!isCollapseFourth);

 
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${subURL}/trendingnews`)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
  
    <div>
      {newsData.map((item) => (
        <div className="accordion-item mt-4 border-0">
          <h2 className="accordion-header" id={item.id}>
            <button className="accordion-button" onClick={toggleFourth}>
              {item.news_title}
            </button>
          </h2>
          <Collapse isOpen={isCollapseFourth}>
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
      ))}
    </div>
  );
};

export default AccordianContentRight;
