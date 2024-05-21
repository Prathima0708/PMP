import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Nav, Row } from "reactstrap";
import backgrounImage from "../../../../assets/images/allpage2.jpg";

const Section = () => {
  return (
    <React.Fragment>
      {/* <section className="page-title-box" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 35,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgrounImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section> */}

      {/* <section className="page-title-box">
        <Container>
          <Row className="justify-content-center mt-4">
            <Col md={6}>
              <div className="text-center text-white">
                <h3 className="mb-4">About Us</h3>
                <div className="page-next">
                  <nav
                    className="d-inline-block"
                    aria-label="breadcrumb text-center"
                  >
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>

                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        About Us{" "}
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Landowner{" "}
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        TKI History{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
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
        <style>
          {`
           .page-title-box {
           

            padding-top:160px 
          
          
          }
          
            
            `}
        </style>
      </div> */}

      <section
        className="box"
        style={{ position: "relative", overflowX: "hidden" }}
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
         
          }}
        ></div>

        <Container style={{ maxWidth: "100%" }}>
          <Row className="justify-content-center mt-4">
            <Col md={6} className="mt-4">
              <div className="text-center text-white">
                <h3 className="mb-4">About Us</h3>
                <div className="page-next">
                  <nav
                    className="d-inline-block"
                    aria-label="breadcrumb text-center"
                  >
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>

                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        About Us{" "}
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Landowner{" "}
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        TKI History{" "}
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
      padding-top: 130px;
      padding-bottom: 60px;
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
    </React.Fragment>
  );
};

export default Section;
