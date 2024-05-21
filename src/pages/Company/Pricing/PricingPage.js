import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const PricingPage = () => {
  const pricingpage = [
    {
      id: 1,
    
      pricingIcon: "bi:people-fill",
      pricingName: "Starter",
      pricingPrice: "$35.99",
      pricingsuccessclass: "btn-soft-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Professionals and management on our database software for all     trades.Many Clients use Manpower for Probation periods-Risk Free Trial periods.",
        },

        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Database includes National and Expats.Resumes, references, and qualifications checked.",
        },

        {
          id: 5,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Ability to supply manpower for ongoing projects and shutdowns, as well as specialist trades for emergency breakdowns",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Manpower is not an expensive way to solve your staffing needs as we handle everything for the employee right down to their Uniforms.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "We currently have in excess of 65000 Skilled Tradesman, Professionals and Managers on our database.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "We have the latest Computerised Database software, which manages our people so we can quickly supply the people you need.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "We supply Manpower for ongoing projects/assignments, Plant shutdowns, as well as specialist trades for emergency breakdowns.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Many Clients are using this arrangement to source Expatriate skills.All Trades, Professions and General staffing available.Manpower is the Solution to your Staffing requirements.",
        },
      ],
    },
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="text-center">
                <h3 style={{ fontSize: "35px" }}> Manpower - Contract Hire</h3>
                <p className="text-muted">
                  Contract Hire is the next step from the traditional “Labour
                  Hire” business."We give you the best, to make you the best”.
                  Whenever the need for outsourcing is expressed, be it
                  front-line staff or specialist roles, or even seasoned
                  experts- across industries, Pacific Manpower delivers and
                  outperforms the expectations of its clients. We outsource only
                  the best quality professionals around the world with the
                  objective of shining a different light on the term “manpower.“
                  Pacific Manpower gives Contract Hire (outsourcing services)
                  like payroll management and contractual manpower to
                  organizations
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

                    {/* <ul className="list-unstyled pricing-details text-black mt-4">
                <div className="row">
                  <div className="col-md-6 ">
                    {pricingpageDetails.pricingDetails.slice(0, Math.ceil(pricingpageDetails.pricingDetails.length / 2)).map((pricingpageInnerDetails, key) => (
                      <li
                        key={key}
                        className={pricingpageInnerDetails.pricingInnerClassName}
                      >
                        <i
                          className={pricingpageInnerDetails.pricingInnerIcon}
                        ></i>{" "}
                        {pricingpageInnerDetails.pricingInnerText}
                      </li>
                    ))}
                  </div>
                  <div className="col-md-6">
                    {pricingpageDetails.pricingDetails.slice(Math.ceil(pricingpageDetails.pricingDetails.length / 2)).map((pricingpageInnerDetails, key) => (
                      <li
                        key={key}
                        className={pricingpageInnerDetails.pricingInnerClassName}
                      >
                        <i
                          className={pricingpageInnerDetails.pricingInnerIcon}
                        ></i>{" "}
                        {pricingpageInnerDetails.pricingInnerText}
                      </li>
                    ))}
                  </div>
                </div>
              </ul> */}

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
                                  <span className="pricing-text" style={{marginLeft:'0.5em'}}>
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
                                  <span className="pricing-text" style={{marginLeft:'0.5em'}}>
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

export default PricingPage;
