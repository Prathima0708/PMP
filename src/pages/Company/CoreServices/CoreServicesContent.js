import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import blogImage from "../../../assets/images/elementsaboutus1.jpg";
import blogImage2 from "../../../assets/images/pmp_07.jpg";

const CoreServicesContent = () => {
  return (
    <React.Fragment>
      {/* <section className="section overflow-hidden">
        <Container>
          <Row className="align-items-center g-0">
            <Row mt={4} pt={2}>
              <Col md={12}>
                <h6
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontSize: "15px",
                  }}
                >
                  MANPOWER
                </h6>

                <p>
                  More than just “Labour Hire”, we provide skilled Tradesman,
                  professionals and managers from the PNG Workforce as well as
                  expatriates from around the world.
                </p>
              </Col>
              <Col md={12}>
                <h6
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontSize: "15px",
                    marginTop: "1em",
                  }}
                >
                  RECRUITMENT
                </h6>

                <p className="">
                  We offer a full search to locate your key staffing
                  requirements whether from within PNG or overseas. Advertising,
                  Reference checking, interviews we handle the whole process.
                  Access to our extensive Database and free website Job seeker
                  listings can save you money and time.
                </p>
              </Col>
              <Col md={12}>
                <h6
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontSize: "15px",
                    marginTop: "1em",
                  }}
                >
                  PASSPORTS AND WORK PERMITS
                </h6>

                <p className="">
                  We offer a full service of all Immigration and Visa services
                  for companies employing expatriates as well as PNG Nationals
                  who require overseas travel.
                </p>
              </Col>
              <Col md={12}>
                <h6
                  style={{
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    fontSize: "15px",
                    marginTop: "1em",
                  }}
                >
                  PAYROLL SERVICES
                </h6>

                <p className="">
                  let us take the hassles from payroll, we will manage and
                  process your payroll. We provide all the required reports for
                  Taxation, Superannuation and management reporting. This
                  service is available for all small to medium PNG registered
                  companies.
                </p>
              </Col>
            </Row>
          </Row>
        </Container>
      </section> */}
      <Col lg={8}>
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="mb-5">
              <h6 className="fs-17 fw-semibold mb-4">Core Services</h6>
              <h6 className="fs-17 fw-semibold mb-3">MANPOWER</h6>
              <p className="text-muted">
                More than just “Labour Hire”, we provide skilled Tradesman,
                professionals and managers from the PNG Workforce as well as
                expatriates from around the world.
              </p>
              <h6 className="fs-17 mt-4 fw-semibold mb-3">RECRUITMENT</h6>
              <p className="text-muted">
                We offer a full search to locate your key staffing requirements
                whether from within PNG or overseas. Advertising, Reference
                checking, interviews we handle the whole process. Access to our
                extensive Database and free website Job seeker listings can save
                you money and time.
              </p>
              <h6 className="fs-17 mt-4 fw-semibold mb-3">
                PASSPORTS AND WORK PERMITS
              </h6>
              <p className="text-muted">
                We offer a full service of all Immigration and Visa services for
                companies employing expatriates as well as PNG Nationals who
                require overseas travel.
              </p>
              <h6 className="fs-17 mt-4 fw-semibold mb-3">PAYROLL SERVICES</h6>
              <p className="text-muted">
                Let us take the hassles from payroll, we will manage and process
                your payroll. We provide all the required reports for Taxation,
                Superannuation and management reporting. This service is
                available for all small to medium PNG registered companies.
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="">
              <img
                src={blogImage}
                alt=""
                className="img-fluid"
                style={{ height: "15em" }}
              />
            </div>
          </CardBody>
        </Card>
        <Card className="ms-lg-4 mt-4 mt-lg-4">
          <CardBody className="p-4">
            <div className="">
              <img
                src={blogImage2}
                alt=""
                className="img-fluid"
                style={{ height: "15em" }}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CoreServicesContent;
