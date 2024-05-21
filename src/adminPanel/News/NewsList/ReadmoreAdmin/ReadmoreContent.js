import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { mainURL, subURL } from "../../../../utils/URLs";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

const ReadmoreContent = () => {
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
          <CardBody className="p-4 candidate-personal-detail">
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
                {newsData.news_title}
              </h6>
              <img
                src={`${mainURL}${newsData.news_image}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  width: "auto",
                  height: "auto",
                }}
                alt="newsimage"
              />

              <p
                className="text-muted mb-2"
                style={{
                  lineHeight: "2.3em",
                  fontFamily: "Noto Sans",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                {newsData.news_description}
              </p>
              <br />
              <div className="learn-more">
                <Link to="/mynews" className="form-text text-danger">
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

export default ReadmoreContent;
