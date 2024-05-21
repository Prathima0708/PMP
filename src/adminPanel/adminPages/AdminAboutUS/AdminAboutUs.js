import React from "react";
import About from "../../../pages/Company/AboutUs/About";

import Counter from "../../../pages/Company/AboutUs/Counter";
import Features from "../../../pages/Company/AboutUs/Features";
import Cta from "../../../pages/Company/AboutUs/Cta";
import CompanyTestimonal from "../../../pages/Company/AboutUs/CompanyTestimonal";
import MetaTags from "react-meta-tags";
import Footer from "../../Layout/CommonLayout/Footer";
import AdminAbout from "./AdminAbout";
import { Container, Row } from "reactstrap";
import AdminAbtLeftSideContent from "./AdminAbtLeftSideContent";
import AdminAbtRightSideContent from "./AdminAbtRightSideContent";
import NavBar from "../../Layout/CommonLayout/NavBar";
import Section from "./Section";


const AdminAboutUs = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>About Us</title>
      </MetaTags>
      < Section/>
      {/* <AdminAbout /> */}
     
            {/* <AdminAbtLeftSideContent /> */}
            <AdminAbtRightSideContent />
            <Features />
      <Footer />
    </React.Fragment>
  );
};

export default AdminAboutUs;
