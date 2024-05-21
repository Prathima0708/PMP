import React from "react";

import { Container, Row } from "reactstrap";
import backgrounImage from "../../../assets/images/navbg.jpeg";

const Section = () => {
  return (
    <React.Fragment>
      <section className="page-title-box" style={{ position: "relative" }}>
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
        <Container>
          <Row className="justify-content-center">{/* Content */}</Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Section;
