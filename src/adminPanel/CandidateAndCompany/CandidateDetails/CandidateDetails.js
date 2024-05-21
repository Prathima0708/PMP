import React from "react";
import { Container, Row } from "reactstrap";

import RightSideContent from "./RightSideContent";
import Section from "./Section";
import MetaTags from "react-meta-tags";
import Footer from "../../Layout/CommonLayout/Footer";
import NavBar from "../../Layout/CommonLayout/NavBar";
import TopBar from "../../Layout/CommonLayout/TopBar";

const CandidateDetails = () => {
  
  return (
    <React.Fragment>
      <MetaTags>
        <title>Candidate Details</title>
      </MetaTags>
      <TopBar/>
      
      <Section />
      
      <section className="section">
        <Container>
         
          {/* <NavBar /> */}
          <Row>
            <RightSideContent />
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default CandidateDetails;
