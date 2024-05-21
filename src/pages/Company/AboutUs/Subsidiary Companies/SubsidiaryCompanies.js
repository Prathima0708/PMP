import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";

import { Container, Row } from "reactstrap";
import LeftSideContent from "../LeftSideContent";
import SubsidiaryCompaniesPage from "./SubsidiaryCompaniesPage";

const SubsidiaryCompanies = () => {
  return (
    <React.Fragment>
    

      <MetaTags>
        <title>Subsidiary Companies</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
  
            <SubsidiaryCompaniesPage />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default SubsidiaryCompanies;
