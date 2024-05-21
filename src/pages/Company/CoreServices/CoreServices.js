import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import CoreServicesContent from "./CoreServicesContent";
import { Container, Row } from "reactstrap";
import LeftSideContent from "../AboutUs/LeftSideContent";

const CoreServices = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>About Us</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            {/* <LeftSideContent /> */}
            <CoreServicesContent />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CoreServices;
