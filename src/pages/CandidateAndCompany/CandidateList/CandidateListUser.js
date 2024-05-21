import React from "react";
import { Col, Container, Row } from "reactstrap";
import CandidateDetails from "./CandidateDetails";
import JobFilters from "./JobFilters";
import Section from "./Section";
import Pagination from "../../Jobs/JobList2/Pagination";
import MetaTags from "react-meta-tags";

const CandidateListUser = () => {
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
          {/* <Pagination/> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateListUser;
