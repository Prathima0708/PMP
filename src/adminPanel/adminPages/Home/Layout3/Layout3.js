import React, { useEffect } from "react";
import Home from "../Home";
import Section from "../Layout3/Section";
import MetaTags from "react-meta-tags";
import NavBar from "../../../Layout/CommonLayout/NavBar";
import Footer from "../../../Layout/CommonLayout/Footer";
import StyleSwitcher from "../../../Layout/CommonLayout/StyleSwitcher";

const Layout3 = () => {
  const setColor = (color) => {
    document.getElementById("app-style").href =
      "assets/css/app" + color + ".min.css";
    document.getElementById("bootstrap-style").href =
      "assets/css/bootstrap" + color + ".min.css";
  };
  useEffect(() => {
    document.body.setAttribute("data-layout-mode", "light");
    setColor("-blue");
  }, []);
  return (
    <>
      <MetaTags>
        <title>Pacific Manpower</title>
      </MetaTags>
      <Section />
      <Home />
      <Footer />
    </>
  );
};
export default Layout3;
