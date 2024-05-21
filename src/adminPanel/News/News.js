import React from "react";
import Section from "./Section";
import AddNews from "./AddNews";
import Footer from "../Layout/CommonLayout/Footer";
import { MetaTags } from "react-meta-tags";
import { useEffect } from "react";

const News = () => {
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
    <React.Fragment>
      <MetaTags>
        <title>Add News</title>
      </MetaTags>
      <Section />
      <AddNews />
      <Footer />
    </React.Fragment>
  );
};

export default News;
