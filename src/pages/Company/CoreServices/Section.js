import React from "react";
import { Col, Container, Row } from "reactstrap";
import backgrounImage from "../../../assets/newimages/CoreServices.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
            opacity: "0.9",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
         
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
                        Core Services{" "}
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
