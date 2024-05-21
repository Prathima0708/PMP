import React from "react";
import RecruitmentPage from "./RecruitmentPage";
import Section from "./Section";
import MetaTags from "react-meta-tags";
import Footer from "../../../Layout/CommonLayout/Footer";

const AdminRecruitment = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Recruitment</title>
      </MetaTags>
      <Section />
      <RecruitmentPage />
      <Footer />
    </React.Fragment>
  );
};

export default AdminRecruitment;
