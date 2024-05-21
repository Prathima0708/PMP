import classNames from "classnames";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Col, Nav, NavLink, Row, TabContent, TabPane } from "reactstrap";

import testImg01 from "../../assets/images/abt5.jpg";
import testImg02 from "../../assets/images/elementsaboutus1.jpg";
import testImg03 from "../../assets/images/abt3.jpg";
import testImg04 from "../../assets/images/elementsaboutus2.jpg";
import React, { useState } from "react";

import { Container } from "reactstrap";

import classnames from "classnames";

const HomeAboutus = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <section className="section" style={{ marginTop: "5em" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="">
              <Row>
                <div className="col-md-9 bgimage">
                  <TabContent
                    className="about-tab-content h-100 "
                    activeTab={activeTab}
                  >
                    <TabPane
                      tabId="1"
                      className="fade rounded-3 show "
                      style={{
                        backgroundImage: `url(${testImg02})`,

                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "400px",
                        width: "500px",
                      }}
                    ></TabPane>
                  </TabContent>
                </div>
              </Row>
            </Col>
            <Col lg={6} className="mob">
              <div className="section-title  mb-lg-0">
                <h4 className="title mobtext" style={{ fontSize: "47px" }}>
                  Company <span style={{ color: "#FAD207" }}>Overview</span>{" "}
                </h4>
                <p className="text-muted" style={{ marginLeft: "0.7em" }}>
                  Pacific Manpower was formed in 2008 .Our Sister company TKI Group, was a major
service provider to OTML ( Handed over the
company to Mining Area Landowners in 2021)

                </p>
                <ul className="list-unstyled about-list text-muted ">
                  <li>100% PNG owned group, operating since 1989</li>

                  <li>Landowner Joint Ventures at resource sites.</li>
                  <li>Employs approx 1000 nationals and expatriates
from time to time.</li>
                  <li>Passionate and innovative.</li>
                </ul>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  <div>
                    <Link
                      to="/aboutus"
                      className="btn btn-gradient-primary btn-hover ms-sm-1 "
                    >
                      Read More <i className="uil uil-angle-right-b ms-1"></i>
                    </Link>
                    <style>
                      {`
                     @media only screen and (max-width: 991px) {
                      .mob{
                        margin-top:-590px;
                      }
                      
                        .bgimage{
                          display:none;
                        }
                      }
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
    
      @media only screen and (min-width: 428px) and (max-width: 926px) {
        .mob{
          margin-top:-590px;
        }
      }
      
      `}
                    </style>
                  </div>
                  <ul className="list-inline about-social-menu mb-0">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/groups/266168910449287/"
                        target="_blank"
                        className=""
                        rel="noreferrer"
                      >
                        <i className="uil uil-facebook-f"></i>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/pacific-manpower-85835b145/"
                        target="_blank"
                        className=""
                        rel="noreferrer"
                      >
                        <i className="uil uil-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <style>
          {`
            /* Animation properties for the left column */
            .fade-in-left {
              opacity: 0;
              transform: translateX(-20px);
              transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .fade-in-left.active {
              opacity: 1;
              transform: translateX(0);
            }
            
            /* Animation properties for the right column */
            .fade-in-right {
              opacity: 0;
              transform: translateX(20px);
              transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .fade-in-right.active {
              opacity: 1;
              transform: translateX(0);
            }
            
            
            `}
        </style>
      </section>
    </React.Fragment>
  );
};

export default HomeAboutus;
