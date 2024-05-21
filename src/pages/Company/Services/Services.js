import React from "react";
import Section from "../Services/Section";
import ServicePage from "../Services/ServicePage";
import MetaTags from "react-meta-tags";

const Services = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Pacific Manpower </title>
      </MetaTags>
      {/* <Section /> */}
      <ServicePage />
    </React.Fragment>
  );
};

export default Services;
