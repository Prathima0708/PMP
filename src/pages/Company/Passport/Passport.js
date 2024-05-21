import React from "react";
import MetaTags from "react-meta-tags";

import PassportPage from "./PassportPage";
import Section from "./Section";

const Passport = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Passport / Work Permits</title>
      </MetaTags>
      <Section />
      <PassportPage />
    </React.Fragment>
  );
};

export default Passport;
