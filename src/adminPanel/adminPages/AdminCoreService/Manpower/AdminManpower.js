import React from "react";
import MetaTags from "react-meta-tags";
import ManpowerPage from "./ManpowerPage";
import Section from "./Section";
import Footer from "../../../Layout/CommonLayout/Footer";

const AdminManpower = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Manpower</title>
      </MetaTags>
      <Section />
      <ManpowerPage />
      <Footer />
    </React.Fragment>
  );
};

export default AdminManpower;
