import React from "react";
import { MetaTags } from "react-meta-tags";
import WinimaPage from "./WinimaPage";
import Section from "./Section";
import { Container, Row } from "reactstrap";
import LeftSideContent from "../LeftSideContent";

const Winima = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Winima PacificManpower</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <WinimaPage />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Winima;
