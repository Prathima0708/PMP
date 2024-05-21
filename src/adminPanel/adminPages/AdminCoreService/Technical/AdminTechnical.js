import React from "react";
import TechnicalPage from "./TechnicalPage";
import Section from "./Section";
import MetaTags from "react-meta-tags";
import Footer from "../../../Layout/CommonLayout/Footer";
const AdminTechnical = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Technical Services</title>
      </MetaTags>
      <Section />
      <TechnicalPage />
      <Footer />
    </React.Fragment>
  );
};

export default AdminTechnical;
