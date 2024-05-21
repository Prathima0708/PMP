import React from "react";
import RecruitmentPage from "./RecruitmentPage";
import Section from "./Section";
import MetaTags from "react-meta-tags";

const Recruitment = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Recruitment</title>
      </MetaTags>
      <Section />
      <RecruitmentPage />
    </React.Fragment>
  );
};

export default Recruitment;
