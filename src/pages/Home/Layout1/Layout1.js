import React from "react";
import Section from "../Layout1/Section";
import Home from "../Home";
import { MetaTags } from "react-meta-tags";


const Layout1 = () => {
  return (
    <div>
      <MetaTags>
        <title>Pacific Manpower</title>
        <script src="https://unicons.iconscout.com/release/v3.0.2/script/monochrome/bundle.js"></script>
      </MetaTags>
      <Section />

      <Home />
    </div>
  );
};

export default Layout1;
