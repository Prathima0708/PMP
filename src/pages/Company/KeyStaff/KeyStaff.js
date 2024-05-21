import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import KeyStaffcontent from "./KeyStaffcontent";
import Team from "../Team/Team";

const KeyStaff = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Key Staff</title>
      </MetaTags>
      <Section />
      {/* <KeyStaffcontent /> */}
      <Team/>
    </React.Fragment>
  );
};

export default KeyStaff;
