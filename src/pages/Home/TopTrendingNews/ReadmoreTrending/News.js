import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "../Section";
import { Container, Row } from "reactstrap";
import NewsList from "../NewsList";

const News = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Trending News</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <NewsList />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default News;
