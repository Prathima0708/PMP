import React from "react";
import TopBar from "../Layout/CommonLayout/TopBar";
import NavBar from "../Layout/CommonLayout/NavBar";
import { Col, Container, Nav, Row } from "reactstrap";
import { Link } from "react-router-dom";
import backgrounImage from "../../assets/images/galleryadmin.jpg";

const Section = () => {
  return (
    <React.Fragment>
      <TopBar />
      <NavBar />

      <section
        className="box"
        style={{
          position: "relative",
          overflowX: "hidden",
          background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"
          // background:
          //   "linear-gradient(rgba(170, 210, 226, 0.8), rgba(255, 255, 166, 0.8))",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgrounImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            maxWidth: "100%",
            opacity: "0.4",
          }}
        ></div>

        <Container style={{ maxWidth: "100%" }}>
          <Row className="justify-content-center mt-4">
            <Col md={6} className="mt-4">
              <div className="text-center text-white">
                <h3 className="mb-4" style={{ fontSize: "45px" }}>
                  Add Skills
                </h3>
                <div className="page-next">
                  <nav
                    className="d-inline-block"
                    aria-label="breadcrumb text-center"
                  >
                    <ol className="breadcrumb justify-content-center">
                      <li
                        className="breadcrumb-item"
                        style={{ fontSize: "15px", marginBottom: "1em" }}
                      >
                        <Link to="/admin">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                        style={{ fontSize: "15px", marginBottom: "1em" }}
                      >
                        {" "}
                        Add data{" "}
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                        style={{ fontSize: "15px", marginBottom: "1em" }}
                      >
                        {" "}
                        Add Skills{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <style>
          {`
.box {
  padding-top: 150px;
      padding-bottom: 100px;
  position: relative;
}

@media only screen and (max-width: 767px) {
  .box {
    padding-top: 80px;
    padding-bottom: 40px;

  }
  .text-center.text-white h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
    .background-image {
    display: none;
  }
}
`}
        </style>
      </section>
      <div className="position-relative">
        <div className="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section;
