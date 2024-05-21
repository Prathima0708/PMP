import React from "react";
import Section from "./Section";
import MetaTags from "react-meta-tags";

import Footer from "../../../Layout/CommonLayout/Footer";
import PrivacyAndPolicyPage from "./PrivacyAndPolicyPage";


const AdminPrivacyAndPolicy = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>IT services</title>
      </MetaTags>
      <Section />
      <PrivacyAndPolicyPage />
      <Footer />
    </React.Fragment>
  );
};
export default AdminPrivacyAndPolicy;
