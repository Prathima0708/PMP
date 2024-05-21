import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import axios from "axios";
import { mainURL, subURL } from "../../../../utils/URLs";

const Parttime = () => {
  const [partTimeJobs, setPartTimeJobs] = useState([]);
  const [compImage, setCompanyImage] = useState("");

  useEffect(() => {
    axios
      .get(`${subURL}/filteredjobbycontract/contract/`)
      .then((response) => {
        setPartTimeJobs(response.data.slice(0, 3));
        setCompanyImage(response.data[0].company_id?.companyimage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      {partTimeJobs?.map((partTimeJobdetails, key) => (
        <div
          key={key}
          className={
            partTimeJobdetails.addclassNameBookmark === true
              ? "job-box bookmark-post card mt-4"
              : "job-box card mt-4"
          }
        >
          <div className="bookmark-label text-center">
            <Link to="#" className="text-white align-middle">
              <i className="mdi mdi-star"></i>
            </Link>
          </div>
          <div className="p-4">
            <Row className="align-items-center">
              {/* <Col md={2}>
                <div className="text-center mb-4 mb-md-0">
                  <Link to="#">
                    <img
                      src={`${mainURL}${partTimeJobdetails.company_id.companyimage}`}
                      alt="img"
                      className="img-fluid rounded-3"
                    />
                  </Link>
                </div>
              </Col> */}

              <Col md={4}>
                <div className="mb-2 mb-md-0">
                  <h5 className="fs-18 mb-1">
                    <Link
                      to={`/jobdetails/${partTimeJobdetails.id}`}
                      className="text-dark"
                    >
                      {partTimeJobdetails.job_title}
                    </Link>
                  </h5>
                  <p className="text-muted fs-14 mb-0">
                    {partTimeJobdetails.company_id?.company_name}
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="d-flex mb-2">
                  <div className="flex-shrink-0">
                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                  </div>
                  <p className="text-muted mb-0">
                    {partTimeJobdetails.job_location_id.country}
                  </p>
                </div>
              </Col>

              {/* <Col md={2}>
                <div>
                  <p className="text-muted mb-2">
                    Salary : {partTimeJobdetails.salary}
                  </p>
                </div>
              </Col> */}

              <Col md={2}>
                <div>
                  <span className={"badge bg-soft-purple fs-13 mt-1 mx-1"}>
                    {partTimeJobdetails.job_type_id.job_type
                      .charAt(0)
                      .toUpperCase() +
                      partTimeJobdetails.job_type_id.job_type.slice(1)}
                  </span>
                </div>
              </Col>
            </Row>
          </div>
          <div className="p-3 bg-light">
            <Row>
              <Col md={4}>
                <div>
                  <p className="text-muted mb-0">
                    <span className="text-dark">Experience :</span>{" "}
                    {partTimeJobdetails.experince_type_id?.experince_type}
                  </p>
                </div>
              </Col>

              <Col lg={6} md={5}>
                <div>
                  <p className="text-muted mb-0">
                    <span className="text-dark">
                      {partTimeJobdetails.job_description === null
                        ? ""
                        : "Job Description :"}
                    </span>
                    {partTimeJobdetails.job_description?.length > 20
                      ? partTimeJobdetails.job_description.slice(0, 10) + "..."
                      : partTimeJobdetails.job_description}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ))}

      {partTimeJobs.length === 0 ? (
        <h3 className="fs-15 mt-3 mb-5 text-center">No jobs found.</h3>
      ) : (
        <div className="text-center mt-4 pt-2">
          <Link to="/joblist"   className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2">
            View More <i className="uil uil-arrow-right"></i>
          </Link>
          <style>
                  {`
      .btn-gradient-primary {
        background-image: linear-gradient(to left,  #0066CC,#38B0F9);
  color: white;
  border: none;
  transition: transform 0.3s ease;
      }
      
      .btn-gradient-primary:hover {
        transform: scale(1.1); 
        background-image: linear-gradient(to left,  #38B0F9,#0066CC);
        color: white;
      }
      
      `}
                </style>
        </div>
      )}
    </React.Fragment>
  );
};

export default Parttime;
