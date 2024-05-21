import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import CandidateDetails from "./CandidateDetails";

import Section from "./Section";

import MetaTags from "react-meta-tags";

import Footer from "../../Layout/CommonLayout/Footer";

const CandidateList = () => {
  const setColor = (color) => {
    document.getElementById("app-style").href =
      "assets/css/app" + color + ".min.css";
    document.getElementById("bootstrap-style").href =
      "assets/css/bootstrap" + color + ".min.css";
  };
  useEffect(() => {
    document.body.setAttribute("data-layout-mode", "light");
    setColor("-blue"); 
  }, []);
  return (
    <React.Fragment>
      <MetaTags>
        <title>Candidate List</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <CandidateDetails />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default CandidateList;
