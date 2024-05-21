import React from "react";
import MetaTags from "react-meta-tags";
import Section from "./Section";
import { Container, Row } from "reactstrap";
import ReadmoreContent from "./ReadmoreContent";
import Footer from "../../../Layout/CommonLayout/Footer";

const ReadmoreAdmin = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Readmore News</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <ReadmoreContent />
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ReadmoreAdmin;
