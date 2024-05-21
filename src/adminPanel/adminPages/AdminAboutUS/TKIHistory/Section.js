import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Nav, Row } from "reactstrap";
import NavBar from "../../../Layout/CommonLayout/NavBar";
import TopBar from "../../../Layout/CommonLayout/TopBar";
import backgrounImage from "../../../../assets/images/allpage2.jpg";

const Section = () => {
  return (
    <React.Fragment>
      <TopBar />
      <NavBar />
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
                        <Link to="/admin">Home</Link>
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
  padding-bottom: 70px;
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
