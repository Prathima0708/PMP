import React from "react";
import PayrollPage from "./PayrollPage";
import Section from "./Section";
import MetaTags from "react-meta-tags";
import Footer from "../../../Layout/CommonLayout/Footer";

const AdminPayroll = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Payroll Services</title>
      </MetaTags>
      <Section />
      <PayrollPage />
      <Footer />
    </React.Fragment>
  );
};

export default AdminPayroll;
