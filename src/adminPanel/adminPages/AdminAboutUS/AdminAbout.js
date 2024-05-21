import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images
import AboutImage from "../../../assets/images/about/img-01.jpg";
import NavBar from "../../Layout/CommonLayout/NavBar";
import TopBar from "../../Layout/CommonLayout/TopBar";

const AdminAbout = () => {
  return (
    <React.Fragment>
       <TopBar/>
      <section className="section overflow-hidden">
        <Container>
         
          <NavBar />
          <Row className="align-items-center g-0">
            <p
              className="title mb-4"
              style={{
                fontFamily: "Poppins",
                letterSpacing: "1px",
                fontSize: "22px",
                fontWeight: "bold",
                textDecoration: "underline",
                color: "black",
                borderRadius: "5px",
              }}
            >
              About Us
            </p>
            <Col lg={6} style={{ lineHeight: "2em" }}>
              <div className="section-title me-lg-5">
                <p>
                  Pacific Manpower was formed in 2008 out of the growth in
                  resource projects and the economic conditions with in Papua
                  New Guinea, wishing to build a nationwide HR company offering
                  the best skills from PNG Nationals, Other Country Nationals
                  (OCNs) and Expatriates. We are proud to be 100% PNG Owned.
                </p>
                <p>
                  Our sister company, TawapKamen Investments was formed in 1989
                  and some 22 years later continues to be a major supplier of
                  Skills to OTML and operates a large scale Security,
                  construction and Engineering Business at Ok Tedi and also
                  operates TKI Manpower which is one of the largest suppliers of
                  skilled manpower to the mine.
                </p>

                <Row mt={4} pt={2}>
                  <Col md={12}>
                    <p
                      className="title mb-4  "
                      style={{
                        fontFamily: "Poppins",
                        letterSpacing: "1px",
                        fontSize: "22px",
                        fontWeight: "bold",
                        backgroundColor: "#E5E7E9",
                        padding: "1em",
                        color: "black",
                        borderRadius: "5px",
                      }}
                    >
                      OUR COMPANY MISSION IS:
                    </p>
                    <ul className="  mb-0 mb-md-3">
                      <li>
                        {" "}
                        To provide Quality and Efficient Labour Hire Services to
                        meet the needs and demands of the Mining, the Petroleum
                        and other industries in Papua New Guinea.
                      </li>
                      <li>
                        {" "}
                        To foster relationships with resource area landowners
                        under formal partnership arrangements for long term
                        harmonious business relations.
                      </li>
                      <li>
                        {" "}
                        To provide efficient recruitment, work permit, visa and
                        immigration services to all the industries.
                      </li>
                      <li>
                        {" "}
                        We operate a state of art specialist HR database program
                        to manage over 65000 plus applicants from our centrally
                        located Head office in Port Moresby. We have branches in
                        Lae, Lihir and Tabubil.
                      </li>
                    </ul>
                  </Col>
                  <Col md={12}>
                    <ul>
                      <li>
                        {" "}
                        Our database includes highly skilled Tradesman,
                        professionals and Managers from Papua New Guinea,
                        Australia, New Zealand, Fiji, Philippines, India and
                        other nations.
                      </li>
                      <li>
                        {" "}
                        We offer a total HR solution to our clients offering
                        Manpower, Recruitment, Immigration and Payroll services.
                      </li>
                      <li>
                        {" "}
                        We operate successful Joint venture arrangements at
                        various resource locations throughout PNG.
                      </li>
                      <li>
                        {" "}
                        Our Teamare client focused and we tailor our services to
                        suit you.
                      </li>
                      <li>
                        For our applicants we endeavour to act professionally in
                        all our dealings
                      </li>
                    </ul>
                  </Col>
                </Row>
                {/* <div className="mt-3">
                  <Link to="#" className="btn btn-primary btn-hover">
                    Learn More{" "}
                    <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                </div> */}
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-img  mt-lg-0">
                <img src={AboutImage} alt="" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AdminAbout;
