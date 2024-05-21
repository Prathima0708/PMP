import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import backgrounImage from "../../../../assets/images/elementsrecruitment.jpg";
import { Icon } from "@iconify/react";

const ManpowerPage = () => {
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
          pricingInnerText: "Professionals and management on our database software for all trades.Many Clients use Manpower for Probation periods-Risk Free Trial periods.",
        },
       
        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Database includes National, OCNs, and Expats.Resumes, references, and qualifications checked.",
        },
        
        {
          id: 5,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Ability to supply manpower for ongoing projects and shutdowns, as well as specialist trades for emergency breakdowns",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Manpower is not an expensive way to solve your staffing needs as we handle everything for the employee right down to their Uniforms.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "We currently have in excess of 65000 Skilled Tradesman, Professionals and Managers on our database.",
        },
        {
            id: 6,
            pricingInnerClassName: "pricing-item",
            pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
            pricingInnerText: "We have the latest Computerised Database software, which manages our people so we can quickly supply the people you need.",
          },
          {
            id: 6,
            pricingInnerClassName: "pricing-item",
            pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
            pricingInnerText: "We supply Manpower for ongoing projects/assignments, Plant shutdowns, as well as specialist trades for emergency breakdowns.",
          },
          {
            id: 6,
            pricingInnerClassName: "pricing-item",
            pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
            pricingInnerText: "Many Clients are using this arrangement to source Expatriate skills.All Trades, Professions and General staffing available.Manpower is the Solution to your Staffing requirements.",
          },
         
         
      ],
    },
  ];
  return (
    <React.Fragment>
      {/* <section
        className="section"
        style={{
          backgroundImage: `url(${backgrounImage})`,
          margin: "110px",
          padding: "20px",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          paddingBottom: "0",
        }}
      >
        <Container>
          <Row
            style={{ margin: "11em" }}
            className="justify-content-center mobile-row"
          >
            <Col
              lg={12}
              className="bg-white text-center fs-14 text-muted"
              style={{
                padding: "4em",
                paddingTop: "3em",
                "@media (max-width: 767px)": {
                  padding: "2em",
                  margin: "0", // Remove the margin on mobile devices
                },
              }}
            >
              <h3 className="mb-3 title mobile-title">Manpower</h3>

              <p className="text-muted mobile-text">
                Manpower is the next step from the traditional “Labour Hire”
                business. Manpower moves on from the supply of unskilled and
                semi- skilled workers, to providing quality and experienced men
                and woman, these range from Trade people like Boilermakers and
                Plant Fitters, to accountants, doctors and senior management. We
                currently have in excess of 65000 Skilled Tradesman,
                Professionals and Managers on our database. We have the latest
                Computerised Database software, which manages our people so we
                can quickly supply the people you need. Database includes PNG
                Nationals, Other Country Nationals(OCNs) and Expatriates
              </p>
              <p className="text-muted">
                Resumes, references and qualifications are all thoroughly
                checked. We supply Manpower for ongoing projects/assignments,
                Plant shutdowns, as well as specialist trades for emergency
                breakdowns. Manpower is not an expensive way to solve your
                staffing needs as we handle everything for the employee right
                down to their Uniforms. Many Clients use Manpower for Probation
                periods-Risk Free Trial periods
              </p>
              <p className="text-muted">
                Many Clients are using this arrangement to source Expatriate
                skills Manpower is the Solution to your Staffing requirements
                All Trades, Professions and General staffing available Call
                Pacific Manpower today to discuss our competitive rates and
                skills available.
              </p>
              
            </Col>
          </Row>
        </Container>
        <style>
          {`
    @media (max-width: 767px) {
      .section {
        margin: 50px !important;
        padding: 10px !important;
        padding-bottom:0px !important;
      }

      .section .text-center {
        margin: 0;
      }

      .section .fs-14 {
        font-size: 12px;
      }

      .mobile-row {
        margin: 0px !important;
      }

      .align-items-center {
        align-items: center;
      }

      .mt-4 {
        margin-top: 1rem;
      }

      .mobile-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .mobile-text {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }

      .mobile-btn {
        margin-top: 1.5rem;
        
      }
    }
    `}
        </style>
      </section> */}

<section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center">
               
                <h3 style={{fontSize:'35px'}}> Manpower - Contract Hire</h3>
                <p className="text-muted">
                Manpower is the next step from the traditional “Labour Hire” business."We give you the best, to make you the best”
                
                </p>
              </div>
            </Col>
          </Row>
          <Row>
          {pricingpage.map((pricingpageDetails, key) => (
        <Col lg={12} md={6} className="mt-5 pt-2" key={key}>
          <Card className="pricing-box" style={{ backgroundColor: '#f0f0f0',  }}>
            <CardBody className="p-4 px-lg-5">
              <div className="pricing-icon  rounded-circle icons-md" style={{ backgroundColor: '#f0f0f0',  }}>
                <Icon
                  icon={pricingpageDetails.pricingIcon}
                  className="text-primary"
                />
              </div>

              <ul className="list-unstyled pricing-details text-black mt-4">
                <div className="row">
                  <div className="col-md-6">
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
              </ul>

             
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

export default ManpowerPage;
