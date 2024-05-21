import React from "react";
import MetaTags from "react-meta-tags";
import Section from "./Section";
import RecruitmentContent from "./RecruitmentContent";

const RecruitmentService = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Recruitment Service</title>
      </MetaTags>
      <Section />
      <RecruitmentContent />
    </React.Fragment>
  );
};

export default RecruitmentService;
