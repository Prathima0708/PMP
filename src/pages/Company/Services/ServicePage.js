import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Services from "../../../assets/images/services.png";

const ServicePage = () => {
  const servicePage = [
    {
      id: 1,
      serviceIcon: "bi:people-fill",
      serviceName: "Contract Hire",
      serviceText:
        "  We give you the best, to make you the best” Whenever the need for outsourcing is expressed,across industries.",
      link: "/contractHire",
    },
    {
      id: 2,
      serviceIcon: "bi:person-check-fill",
      serviceName: "Recruitment",
      serviceText:
        "We offer a full recruitment service including advertising, interviews, vetting, reference check and testing.",
      link: "/recruitment",
    },
    {
      id: 3,
      serviceIcon: "bi:journal-bookmark-fill",
      serviceName: "Passports/Work Permits",
      serviceText:
        "Use our in-house team to complete and manage the lodgement of all Visa’s and Work permits for Expat employees.",
      link: "/passport",
    },
    {
      id: 3,
      serviceIcon: "bi:wallet2",
      serviceName: "Payroll Services",
      serviceText:
        "Due to the experience we have gained in our own company payrolls, we offer a service to improve your payroll system.",
      link: "/payroll",
    },
    {
      id: 3,
      serviceIcon: "bi:gear-wide-connected",
      serviceName: "Technical Services",
      serviceText:
        "Pacific Manpower has a wide experience in engineering and construction projects.We offers the total solution",
      link: "/technical",
    },
    // {
    //   id: 3,
    //   serviceIcon: "bi:code-slash",
    //   serviceName: "IT Services",
    //   serviceText:
    //     "Our Expartriate IT consultant is highly qualified and has worked for many major organisation. ",
    //   link: "/ITservices",
    // },
  ];
  return (
   

    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title mb-3" style={{ fontSize: "47px" }}>
                  Explore Our{" "}
                  <span style={{ color: "#FAD207" }}> Services</span>
                </h3>
                <p className="text-muted">
                  Embark on a journey of professional growth by discovering a
                  diverse array of job opportunities meticulously curated to
                  match your unique skills, talents, and expertise.
                </p>
                
              </div>
            </Col>
          </Row>

          <Row>
            {servicePage.map((servicePageDetails, key) => (
              <Col lg={4} md={6} key={key}>
                <Card className="service-box mt-4 border-0">
                  <CardBody className="p-4">
                    <div className="service-icon icons-md">
                      <Icon
                        icon={servicePageDetails.serviceIcon}
                        color="#1f86ef"
                      />
                    </div>
                    <div className="mt-4">
                      <h4>{servicePageDetails.serviceName}</h4>
                      <p className="text-muted fs-15">
                        {servicePageDetails.serviceText}
                      </p>
                    </div>
                    <div className="learn-more">
                      <Link
                        to={servicePageDetails.link}
                        className="form-text text-primary"
                      >
                        Learn More <i className="uil uil-angle-right-b"></i>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <style>
          {
            `
            @media only screen and (max-width: 991px) {
              .section{
                padding-bottom:0px !important;
              }
            }
            `
          }
        </style>
      </section>
    </React.Fragment>
  );
};

export default ServicePage;
