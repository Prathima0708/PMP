import React from "react";
import TechnicalPage from "./TechnicalPage";
import Section from "./Section";
import MetaTags from "react-meta-tags";
const Technical = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Technical Services</title>
      </MetaTags>
      <Section />
      <TechnicalPage />
    </React.Fragment>
  );
};

export default Technical;
