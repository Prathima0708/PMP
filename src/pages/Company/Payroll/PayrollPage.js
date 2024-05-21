import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import backgrounImage from "../../../assets/images/allpagesbg3.jpg";
import { Icon } from "@iconify/react";

const PayrollPage = () => {
  const pricingpage = [
    {
      id: 1,

      pricingIcon: "bi:wallet2",
      pricingName: "Starter",
      pricingPrice: "$35.99",
      pricingsuccessclass: "btn-soft-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "We offer a payroll service for small and medium companies.",
        },
        {
          id: 2,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Fully computerized payroll system to calculate your payroll.",
        },
        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Hard and soft copies of reports provided.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Due to the experience we have gained in our own company payrolls, we offer a service to improve your payroll system.",
        },
      ],
    },
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center">
                <h3 style={{ fontSize: "35px" }}> Payroll Services</h3>
                <p className="text-muted">
                  We provide all the required reports for Taxation,
                  Superannuation and management reporting.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {pricingpage.map((pricingpageDetails, key) => (
              <Col lg={12} md={6} className="mt-5 pt-2" key={key}>
                <Card
                  className="pricing-box"
                  style={{ backgroundColor: "#f0f0f0" }}
                >
                  <CardBody className="p-4 px-lg-5">
                    <div
                      className="pricing-icon  rounded-circle icons-md"
                      style={{ backgroundColor: "#f0f0f0" }}
                    >
                      <Icon
                        icon={pricingpageDetails.pricingIcon}
                        className="text-primary"
                      />
                    </div>

                    <ul className="list-unstyled pricing-details text-black mt-4">
                      <div className="row">
                        <div className="col-md-6">
                          {pricingpageDetails.pricingDetails
                            .slice(
                              0,
                              Math.ceil(
                                pricingpageDetails.pricingDetails.length / 2
                              )
                            )
                            .map((pricingpageInnerDetails, key) => (
                              <li
                                key={key}
                                className={
                                  pricingpageInnerDetails.pricingInnerClassName
                                }
                              >
                                <div className="pricing-item">
                                  <i
                                    className={`${pricingpageInnerDetails.pricingInnerIcon} icon-large`}
                                  ></i>{" "}
                                  <span
                                    className="pricing-text"
                                    style={{ marginLeft: "0.5em" }}
                                  >
                                    {pricingpageInnerDetails.pricingInnerText}
                                  </span>
                                </div>
                              </li>
                            ))}
                        </div>
                        <div className="col-md-6">
                          {pricingpageDetails.pricingDetails
                            .slice(
                              Math.ceil(
                                pricingpageDetails.pricingDetails.length / 2
                              )
                            )
                            .map((pricingpageInnerDetails, key) => (
                              <li
                                key={key}
                                className={
                                  pricingpageInnerDetails.pricingInnerClassName
                                }
                              >
                                <div className="pricing-item">
                                  <i
                                    className={`${pricingpageInnerDetails.pricingInnerIcon} icon-large`}
                                  ></i>{" "}
                                  <span
                                    className="pricing-text"
                                    style={{ marginLeft: "0.5em" }}
                                  >
                                    {pricingpageInnerDetails.pricingInnerText}
                                  </span>
                                </div>
                              </li>
                            ))}
                        </div>
                      </div>
                      <style>
                        {`
      .pricing-item {
        display: flex;
        align-items: center; /* Align items vertically in the middle */
      }
      .icon-large {
        font-size: 20px; /* Adjust the icon size as needed */
        margin-right: 10px;
      }
      .pricing-text {
        display: inline-block;
      }
      `}
                      </style>
                    </ul>

                    <div className="text-center mt-4 mb-2">
                      <Link
                        to="/contact"
                        className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2"
                      >
                        Contact us <i className="uil uil-arrow-right"></i>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PayrollPage;
