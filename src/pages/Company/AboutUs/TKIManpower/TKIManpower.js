import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import TKIManpowerpage from "./TKIManpowerpage";
import { Container, Row } from "reactstrap";
import LeftSideContent from "../LeftSideContent";

const TKIManpower = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>TKI Manpower</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <TKIManpowerpage />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TKIManpower;
