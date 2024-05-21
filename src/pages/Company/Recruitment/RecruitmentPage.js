import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const RecruitmentPage = () => {
  const pricingpage = [
    {
      id: 1,

      pricingIcon: "bi:person-check-fill",
      pricingName: "Starter",
      pricingPrice: "$35.99",
      pricingsuccessclass: "btn-soft-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "We offer a full recruitment service including advertising, interviews, vetting reference checking, and testing.",
        },

        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Prompt, Efficient, and cost-effective services.Our recruitment services aim to take the hassle out of finding new staff.",
        },

        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Our database offers considerable cost savings and efficiencies, in our aim to supply quality staff for your business.",
        },
        {
          id: 5,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Our team will work with you to set the requirements, job descriptions and your other needs.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "We offer a full recruitment service including advertising, interviews, reference checking.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Recruitment service available for PNG Nationals and Expatriates.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "Positions can be advertised on all media including a free listing on our Job Seeker section on this website.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText:
            "A very cost effective service with a fixed upfront fee structure.Many Clients are using this arrangement to source Expatriate skills.",
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
                <h3 style={{ fontSize: "35px" }}> Recruitment</h3>
                <p className="text-muted">
                  We offer a full search to locate your key staffing
                  requirements whether from within PNG or overseas.
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

      <section className="section">
  <Container>
    <Row className="justify-content-center">
      <Col lg={6}>
        <div className="text-center">
          <h3 style={{ fontSize: "35px" }}> Our Recruitment Process</h3>
          <p className="text-muted">
            Pacific Manpower has refined the recruitment process to 7 successful steps, these steps are shown below
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      {pricingpage.map((pricingpageDetails, key) => (
        <Col lg={6} md={6} sm={12} className="mt-5 pt-2 recr" key={key} style={{marginLeft:'17em'}}>
          <Card className="pricing-box" style={{ backgroundColor: "#f0f0f0" }}>
            <CardBody className="p-4 px-lg-5">
              <div className="pricing-icon rounded-circle icons-md" style={{ backgroundColor: "#f0f0f0" }}>
                <Icon icon={pricingpageDetails.pricingIcon} className="text-primary" />
              </div>

              <ul className="list-unstyled pricing-details text-black mt-4">
                <li className="pricing-item">
                  <i className="mdi mdi-check-bold bg-soft-success me-2"></i>{" "}
                  Step 1: Profile & Position Brief.
                </li>

                <li className="pricing-item">
                  <i className="mdi mdi-check-bold bg-soft-success me-2"></i>{" "}
                  Step 2: Candidate Attraction & Selection.
                </li>

                <li className="pricing-item">
                  <i className="mdi mdi-check-bold bg-soft-success me-2"></i>{" "}
                  Step 3: Screen & Reference Candidates.
                </li>

                <li className="pricing-item">
                  <i className="mdi mdi-check-bold bg-soft-success me-2"></i>{" "}
                  Step 4: Interview and evaluation.
                </li>

                <li className="pricing-item">
                  <i className="mdi mdi-check-bold bg-soft-success me-2"></i>{" "}
                  Step 5: Shortlist and Present Candidates.
                </li>

                <li className="pricing-item">
                  <i className="mdi mdi-check-bold bg-soft-success me-2"></i>{" "}
                  Step 6: Place Candidate.
                </li>

                <li className="pricing-item">
                  <i className="mdi mdi-check-bold bg-soft-success me-2"></i>{" "}
                  Step 7: Follow up and Review of Candidates’ Performance.
                </li>
              </ul>
            </CardBody>
          </Card>
          <style>
            {
              `
              @media only screen and (max-width: 991px) {
                .recr{
                  margin-left:0px !important;
                }
              }

              `
            }
          </style>
        </Col>
      ))}
    </Row>
  </Container>
</section>

    </React.Fragment>
  );
};

export default RecruitmentPage;
