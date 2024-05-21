import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";

const HeroSection = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Pacific Manpower</title>
      </MetaTags>
      <Section />
    </React.Fragment>
  );
};

export default HeroSection;
