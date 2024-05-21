import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import LandOwnerPage from "./LandOwnerPage";
import { Container, Row } from "reactstrap";
import LeftSideContent from "../LeftSideContent";

const LandOwner = () => {
  return (
    <React.Fragment>
      {/* <MetaTags>
        <title>Landowner Joint Ventures</title>
      </MetaTags>
      <Section />
      <LandOwnerPage /> */}

      <MetaTags>
        <title>LandOwner Joint Ventures</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            {/* <LeftSideContent /> */}
            <LandOwnerPage />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LandOwner;
