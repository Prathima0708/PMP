import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "../NewsList/Section";
import Selected from "../NewsList/Selected";
import { Container } from "reactstrap";
import Listing from "./Listing";
import Footer from "../../Layout/CommonLayout/Footer";
import { useEffect } from "react";

const NewsList = () => {
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
        <title>News List</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <Listing />
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default NewsList;
