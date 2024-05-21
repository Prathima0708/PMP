import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody, Col, Input, Row } from "reactstrap";
import { mainURL, subURL } from "../../../../utils/URLs";

const RightSideContent = () => {
  const [newsData, setNewsData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${subURL}/trendingnews/${id}`)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="candidate-details ms-lg-4 mt-4 mt-lg-0">
          <CardBody className=" candidate-personal-detail">
            <div>
              <h6
                className="fs-17 fw-semibold mb-3 "
                style={{
                  backgroundColor: "#F7F9F9",
                  padding: "1em",
                  fontFamily: "Ubuntu",
                  letterSpacing: "2px",
                  fontSize: "20px",
                }}
              >
                {/* Newcrest Employees awarded Australian Scholarships */}
                {newsData.news_title}
              </h6>
              {/* <img
                className="newsimg"
                src={`${mainURL}${newsData.news_image}`}
                height="200px"
                width="500px"
                alt="newsimage"
              /> */}
              <div>
                <div
                  className="image-wrapper"
                  style={{ maxWidth: "20em", maxHeight: "15em" }}
                >
                  <img
                    src={`${mainURL}${newsData.news_image}`}
                    alt="img"
                    className="newsimg"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <p
                className="text-muted mt-5"
                style={{
                  lineHeight: "2.3em",

                  fontSize: "16px",
                  color: "black",
                }}
              >
                {newsData.news_description}
              </p>
              <br />
              <style>
                {`
                    @media only screen and (max-width: 991px){
                      .newsimg{
                        max-width: 100%;
                        max-height: 200px;
                        width: auto;
                        height: auto;
                      }
                    }
                    `}
              </style>
              <div className="learn-more">
                <Link to="/news" className="form-text text-danger">
                  <i className="uil uil-angle-left-b"></i>Back to news{" "}
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
