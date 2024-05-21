import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";

const LeftSideContent = () => {
  const { id } = useParams();
  const [compDetails, setCompDetails] = useState(null);

  useEffect(() => {
    const fetchAppliedStatus = async () => {
      const res = await axios.get(`${subURL}/company_save_details/${id}/`);

      setCompDetails(res.data);
    };

    fetchAppliedStatus();
  }, [id]);
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="side-bar">
          <CardBody className="p-4">
            <div className="candidate-profile text-center">
              <img
                src={`${mainURL}${compDetails?.companyimage}`}
                alt=""
                className="img-fluid"
                style={{ height: "50%", width: "50%", objectFit: "contain" }}
              />
              <h6 className="fs-18 mb-1 mt-4">{compDetails?.company_name}</h6>
              <p className="text-muted mb-4">
                Since {compDetails?.establishment_date}
              </p>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-twitter-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-phone-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>

          <CardBody className="candidate-profile-overview border-top p-4">
            <h6 className="fs-17 fw-semibold mb-3">Profile Overview</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex">
                  <label className="text-dark">Employees</label>
                  <div>
                    <p className="text-muted mb-0">
                      {" "}
                      {compDetails?.company_size}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Location</label>
                  <div>
                    <p className="text-muted mb-0">
                      {" "}
                      {compDetails?.company_location}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Website</label>
                  <div>
                    <a
                      href={compDetails?.company_website_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-muted text-break mb-0">
                        {compDetails?.company_website_url}
                      </p>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <Link to="#" className="btn btn-danger btn-hover w-100">
                <i className="uil uil-phone"></i> Contact
              </Link>
            </div>
          </CardBody>

          {/* 
          <CardBody className="p-4 border-top">
            <h6 className="fs-17 fw-semibold mb-4">Company Location</h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin"
              title="title"
              style={{ width: `100%`, height: `250` }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </CardBody> */}
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
