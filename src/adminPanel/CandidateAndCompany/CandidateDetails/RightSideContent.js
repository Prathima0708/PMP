import React, { useEffect, useState } from "react";
import { Col, Card, CardBody, Row, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "react-image-lightbox/style.css";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";

const RightSideContent = () => {
  const [educationData, setEducationData] = useState(null);
  const [userCV, setUserCV] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${subURL}/applyjob/${id}/`)
      .then((response) => {
        setEducationData(response.data[0]);
        setUserCV(response.data[0].uploaded_cv);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const fetchContentType = (url) => {
    return axios
      .head(url)
      .then((response) => {
        return response.headers["content-type"];
      })
      .catch((error) => console.log(error));
  };

  const forceDownload = (response, title, contentType) => {
    if (!response || !response.data) {
      console.error("Response or response data is undefined");
      return;
    }
    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: contentType })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title);
    document.body.appendChild(link);
    link.click();
  };

  const downloadWithAxios = (url, title, contentType) => {
    axios({
      method: "get",
      url,
      responseType: "blob",
      headers: {
        Accept: contentType,
      },
    })
      .then((response) => {
        forceDownload(response, title, contentType);
      })
      .catch((error) => console.log(error));
  };
  return (
    <React.Fragment>
      <Col lg={12}>
        <Card className="candidate-details ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4 candidate-personal-detail">
            <Row>
              <Col lg={6}>
                {" "}
                <h6 className="fs-17 fw-semibold mb-3">Contact Details</h6>
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex align-items-center mt-4">
                      <div className="icon bg-soft-primary flex-shrink-0">
                        <i className="uil uil-user username-icon"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-1">Name</h6>
                        <p className="text-muted mb-0">
                          {educationData?.applicant_name}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center mt-4">
                      <div className="icon bg-soft-primary flex-shrink-0">
                        <i className="uil uil-envelope-alt"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-1">Email</h6>
                        <p className="text-muted mb-0">
                          {educationData?.applicant_email}
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex align-items-center mt-4">
                      <div className="icon bg-soft-primary flex-shrink-0">
                        <i className="uil uil-phone"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-1">Phone</h6>
                        <p className="text-muted mb-0">
                          {educationData?.phone_num}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col lg={6}>
                {" "}
                <h6 className="fs-17 fw-semibold mb-3">Other Details</h6>
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex align-items-center mt-4">
                      <div className="icon bg-soft-primary flex-shrink-0">
                        <i className="uil uil-briefcase-alt experience-icon"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-1">Experience Type </h6>
                        <p className="text-muted mb-0">
                          {educationData?.experience?.experince_type}
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <div className="d-flex align-items-center mt-4">
                      <div className="icon bg-soft-primary flex-shrink-0">
                        <i className="uil uil-rupee-sign rupees-icon"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-1">Expected Pay</h6>
                        <p className="text-muted mb-0">
                          {educationData?.expected_pay}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center mt-4">
                      <div className="icon bg-soft-primary flex-shrink-0">
                        <i className="uil uil-calendar-alt notice-period-icon"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-1">Notice Period</h6>
                        <p className="text-muted mb-0">
                          {educationData?.notice_period}
                        </p>
                      </div>
                    </div>
                  </li> */}

                  <li>
                    <div className="d-flex align-items-center mt-4">
                      <div className="icon bg-soft-primary flex-shrink-0">
                        <i className="uil uil-map-marker notice-period-icon"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fs-14 mb-1">Location</h6>
                        <p className="text-muted mb-0">
                          {educationData?.country}
                          {","} {educationData?.city}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>

            <div className="mt-3">
              <Button
                onClick={() => {
                  const fileUrl = `${mainURL}${userCV}`;
                  fetchContentType(fileUrl)
                    .then((contentType) => {
                      downloadWithAxios(
                        fileUrl,
                        userCV.split("/").pop(),
                        contentType
                      );
                    })
                    .catch((error) => {
                      console.error("Error fetching content type:", error);
                    });
                }}
                className="btn btn-blue btn-hover w-20 mt-2"
              >
                <i className="uil uil-import"></i> Download CV
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={12}>
        <div className="d-flex flex-wrap align-items-start gap-1 mt-3 " style={{marginLeft:25}}>
          <Link to="/candidateList" className="btn btn-blue">
            Back
          </Link>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
