import React from "react";
import Section from "../../Company/Faqs/Section";
import FaqContent from "../../Company/Faqs/FaqContent";
import MetaTags from "react-meta-tags";

const Faqs = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>News</title>
      </MetaTags>
      <Section />
      <FaqContent />
    </React.Fragment>
  );
};

export default Faqs;
