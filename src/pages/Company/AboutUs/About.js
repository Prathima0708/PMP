import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import AboutImage from "../../../assets/newimages/abt.jpg";
//Import Images


const About = () => {
  return (
    <React.Fragment>
      <section className="section overflow-hidden">
        <Container>
          {/* <Row className="align-items-center g-0">
            <Col lg={6} style={{ lineHeight: "2em" }}>
              <h3 className="title"> About Us</h3>
              <div className="section-title me-lg-5 mt-2">
                <p>
                  Pacific Manpower was formed in 2008 out of the growth in
                  resource projects and the economic conditions with in Papua
                  New Guinea, wishing to build a nationwide HR company offering
                  the best skills from PNG Nationals and Expatriates.
                </p>
                <p>
                  Our sister company,<b>Tawap Kamen Investments</b> was formed
                  in 1989 and some 22 years later continues to be a major
                  supplier of Skills to OTML and operates a large scale
                  Security, construction and Engineering Business at Ok Tedi and
                  also operates TKI Manpower which is one of the largest
                  suppliers of skilled manpower to the mine.
                </p>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="about-img mt-lg-0">
                <img
                  src={AboutImage}
                  alt=""
                  className="img-fluid rounded"
                  style={{ height: "25em", width: "40em" }}
                />
              </div>
            </Col>
          </Row> */}
          <Row>
          <Col lg={6} className="d-none d-lg-block">
              <div className="about-img mt-lg-0">
                <img
                 src={AboutImage}
                  alt=""
                  className="img-fluid rounded"
                  style={{ height: "30em", width: "40em" }}
                />
              </div>
            </Col>
            <Col lg={6}>
              <Card className="mt-4 mt-lg-0">
                <CardBody className="p-4">
                  <div className="mb-5">
                    <h6 className="fs-17 fw-semibold mb-4">About Company</h6>
                    <p className="text-muted">
                    Pacific Manpower was formed in 2008 out of the growth in resource projects and the economic conditions within Papua New Guinea, wishing to build a nationwide HR company offering the best skills from PNG Nationals and Expatriates. We are proud to be 100% PNG owned.
                    </p>

                    <p className="text-muted">
                    Our sister Company, TawapKamen Investments, was formed in 1989, and Some 22 years later, it continues to be a major supplier of skills to OTML and operated a large-scale security, construction, and engineering business at Ok Tedi. We also operated TKI Manpower, which was one of the largest suppliers of skilled manpower to the mine. (Handed over the company to Mining Area Landowners in 2021)
                    </p>
                    <p className="text-muted">
                    Our parent Company, GavipumakuLimited, was formed in 1994. GavipumakuLimited is an investment company that also provides real estate/rental services for high-quality and affordable houses in Kiunga Town and Port Moresby. They also provide Equipment Hires, Transport and logistics services, and a Poultry farm in Kiunga.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
         
          </Row>

          {/* <Col lg={12} style={{ lineHeight: "2em" }}>
            <Row mt={4} pt={2}>
              <Col md={12}>
                <h6 className="fs-17 fw-semibold mb-4 mt-5">
                  Our Company Mission
                </h6>
                <ul className="mb-0 mb-md-3 mt-3 text-muted">
                  <li>
                    {" "}
                    To provide Quality and Efficient Labour Hire Services to
                    meet the needs and demands of the Mining, the Petroleum and
                    other industries.
                  </li>
                  <li>
                    {" "}
                    To foster relationships with resource area landowners under
                    formal partnership arrangements for long term harmonious
                    business relations.
                  </li>
                  <li>
                    {" "}
                    To provide efficient recruitment, work permit, visa and
                    immigration services to all the industries.
                  </li>
                  <li>
                    {" "}
                    We operate a state of art specialist HR database program to
                    manage over 20000 plus applicants from our centrally located
                    office in Port Moresby.
                  </li>
                </ul>
              </Col>
              <Col md={12}>
                <ul className="text-muted">
                  <li>
                    {" "}
                    Our database includes highly skilled Tradesman,
                    professionals and Managers from Papua New Guinea, Australia,
                    New Zealand, Fiji, Philippines, India and other nations.
                  </li>
                  <li>
                    {" "}
                    We offer a total HR solution to our clients offering
                    Manpower, Recruitment, Immigration and Payroll services.
                  </li>
                  <li>
                    {" "}
                    We operate successful Joint venture arrangements at various
                    resource locations throughout PNG.
                  </li>
                  <li>
                    {" "}
                    We operate successful Joint venture arrangements at various
                    resource locations throughout PNG.
                  </li>
                  <li>
                    Our staff is client focused and we tailor our services to
                    suit you.
                  </li>
                  <li>
                    For our applicants we endeavour to act professionally in all
                    our dealings
                  </li>
                  <li>
                    You can read more about the TKI Group and our project
                    services in the section about TKI and more our Pacific
                    Manpower in the Core services section.
                  </li>
                </ul>
              </Col>
            </Row>
          </Col> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
