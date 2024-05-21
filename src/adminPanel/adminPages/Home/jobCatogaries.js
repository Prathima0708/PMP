import React from "react";
import { Col, Row, Container, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Jobcatogaries = () => {
  const categories = [
    {
      id: 1,
      icon: "uim-layers-alt",
      name: "IT & Software",
      job: 2024,
    },
    {
      id: 2,
      icon: "uim-airplay",
      name: "Technology",
      job: 1250,
    },
    {
      id: 3,
      icon: "uim-bag",
      name: "Government",
      job: 802,
    },
    {
      id: 4,
      icon: "uim-user-md",
      name: "Accounting / Finance",
      job: 577,
    },
    {
      id: 5,
      icon: "uim-hospital",
      name: "Construction / Facilities",
      job: 285,
    },
    {
      id: 6,
      icon: "uim-telegram-alt",
      name: "Tele-communications",
      job: 495,
    },
    {
      id: 7,
      icon: "uim-scenery",
      name: "Design & Multimedia",
      job: 1045,
    },
    {
      id: 8,
      icon: "uim-android-alt",
      name: "Human Resource",
      job: 1516,
    },
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={11}>
              <Card className="mt-lg-0">
                <CardBody>
                  <div>
                    <h6
                      className="fs-17 fw-semibold mb-3 "
                      style={{
                        fontStyle: "Poppins",
                        fontSize: "2em",
                        color: "black",
                        fontWeight: "bold",
                        //marginTop: "2em",
                      }}
                    >
                      About us
                    </h6>
                    <p
                      className="text-muted mb-2"
                      style={{
                        lineHeight: "2.3em",
                        fontFamily: "Noto Sans",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      Pacific Manpower was formed in 2008 out of the growth in
                      resource projects and the economic conditions with in
                      Papua New Guinea, wishing to build a nationwide HR company
                      offering the best skills from PNG Nationals, Other Country
                      Nationals (OCNs) and Expatriates. We are proud to be 100%
                      PNG Owned.
                    </p>
                    <br />
                    <div className="learn-more">
                      <Link to="/aboutus" className="form-text text-primary">
                        <i className="uil uil-angle-right-b"></i>Read more{" "}
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3
                  className="title"
                  style={{
                    fontStyle: "Poppins",
                    fontSize: "2em",
                    color: "black",
                    fontWeight: "bold",
                    marginTop: "2em",
                  }}
                >
                  Browse Job Categories{" "}
                </h3>
              </div>
            </Col>
          </Row>

          <Row>
            {(categories || []).map((item, key) => (
              <Col
                lg={3}
                md={6}
                mt={4}
                pt={2}
                key={key}
                style={{ fontFamily: "Poppins" }}
              >
                <div className="popu-category-box rounded text-center">
                  <div className="popu-category-icon icons-md">
                    <Icon icon={item.icon} className="text-primary" />
                  </div>
                  <div className="popu-category-content mt-4">
                    <Link to="#" className="text-dark stretched-link">
                      <h5 className="fs-18">{item.name}</h5>
                    </Link>
                    <p className="text-muted mb-0">{item.job} Jobs</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mt-5 text-center">
                <Link
                  to="/jobscategories"
                  className="btn btn-primary btn-hover"
                >
                  Browse All Categories <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Jobcatogaries;
