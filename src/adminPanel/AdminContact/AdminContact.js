import React from "react";

import MetaTags from "react-meta-tags";
import Footer from "../Layout/CommonLayout/Footer";
import ContactContent from "./ContactContent";
import Section from "./Section";

const AdminContact = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Contact Us</title>
      </MetaTags>
      <Section />
      <ContactContent />
      <Footer />
    </React.Fragment>
  );
};

export default AdminContact;
