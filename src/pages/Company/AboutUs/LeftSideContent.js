import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

//Import images
import featureImage from "../../../assets/images/featured-job/img-01.png";
import logo from "../../../assets/images/logo-light.png";

const LeftSideContent = () => {
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="side-bar">
          <CardBody className="p-4">
            <div className="candidate-profile text-center">
              <img
                src={logo}
                alt=""
                className="avatar-lg rounded-circle"
                style={{ height: "5em", width: "15em" }}
              />
              <h6 className="fs-18 mb-1 mt-4">Pacific Manpower</h6>
              <p className="text-muted mb-4">Since 2008</p>
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
                  <label className="text-dark">Owner Name</label>
                  <div>
                    <p className="text-muted mb-0">-</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Employees</label>
                  <div>
                    <p className="text-muted mb-0"> - </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Location</label>
                  <div>
                    <p className="text-muted mb-0">Papua New Guinea</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Website</label>
                  <div>
                    <a
                      href=" http://pacificmanpower.com.pg/"
                      target="_blank"
                      className="text-muted text-break mb-0"
                    >
                      http://pacificmanpower.com.pg/
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Established</label>
                  <div>
                    <p className="text-muted mb-0"> 2008</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <Link to="/contact" className="btn btn-danger btn-hover w-100">
                <i className="uil uil-phone"></i> Contact
              </Link>
            </div>
          </CardBody>

          <CardBody className="p-4 border-top">
            <h6 className="fs-17 fw-semibold mb-4">Company Location</h6>
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.2563522627113!2d147.198667!3d-9.444000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sH54X%2B9FW%2C%20Port%20Moresby%2C%20Papua%20New%20Guinea!5e0!3m2!1sen!2sus!4v1628684675253!5m2!1sen!2sus"
              height="350"
              style={{ border: `0`, width: `100%` }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
