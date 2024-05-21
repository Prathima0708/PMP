import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import TkiHistoryPage from "./TkiHistoryPage";
import { Container, Row } from "reactstrap";
import LeftSideContent from "../LeftSideContent";

const TKIHistory = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>TKI History</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <TkiHistoryPage />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TKIHistory;
