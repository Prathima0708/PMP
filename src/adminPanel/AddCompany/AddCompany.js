import React, { useEffect } from "react";
import Section from "./Section";
import AddForm from "./AddForm";
import Footer from "../Layout/CommonLayout/Footer";
import { MetaTags } from "react-meta-tags";

const AddCompany = () => {
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
        <title>Add Company</title>
      </MetaTags>
      <Section />
      <AddForm />
      <Footer />
    </React.Fragment>
  );
};

export default AddCompany;
