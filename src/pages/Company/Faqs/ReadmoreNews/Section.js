import React from "react";
import backgrounImage from "../../../../assets/images/elementsnews.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Col, Container, Row } from "reactstrap";

const Section = () => {
  return (
    <React.Fragment>
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
                <h3 className="mb-4">Read more News</h3>
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
                        News{" "}
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Read more News{" "}
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
