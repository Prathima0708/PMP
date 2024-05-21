import React from "react";
import { Col, Container, Row } from "reactstrap";
import Services from "../../assets/images/services.png";

const OurServicesTitle = () => {
  return (
    <React.Fragment>
      <Container
        style={{
          backgroundColor: "white",
          marginTop: "7em",
          paddingBottom: "3em",
          borderRadius: "0.7em",
        }}
      >
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="text-center ">
              <h3
                className="title"
                style={{ fontStyle: "Ubuntu", marginTop: "3em" }}
              >
                Our Services
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <img
              src={Services}
              alt=""
              className="img-fluid rounded-3 mx-auto d-block"
              //  className="img-fluid rounded-3"
              style={{ height: "30em", marginLeft: "25em" }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default OurServicesTitle;
