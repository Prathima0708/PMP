import React from "react";
import PayrollPage from "./PayrollPage";
import Section from "./Section";
import MetaTags from "react-meta-tags";

const Payroll = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Payroll Services</title>
      </MetaTags>
      <Section />
      <PayrollPage />
    </React.Fragment>
  );
};

export default Payroll;
