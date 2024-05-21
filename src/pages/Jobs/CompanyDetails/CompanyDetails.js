import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import MetaTags from "react-meta-tags";

const CompanyDetails = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Company Details</title>
      </MetaTags>
      <Section />
      <section className="section" style={{ padding: "5em" }}>
        <Container>
          <Row>
            <LeftSideContent />

            <RightSideContent />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompanyDetails;
