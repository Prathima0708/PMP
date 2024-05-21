import React from "react";
import MetaTags from "react-meta-tags";

import PassportPage from "./PassportPage";
import Section from "./Section";
import Footer from "../../../Layout/CommonLayout/Footer";

const AdminPassport = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Passport / Work Permits</title>
      </MetaTags>
      <Section />
      <PassportPage />
      <Footer />
    </React.Fragment>
  );
};

export default AdminPassport;
