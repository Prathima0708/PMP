import React, { useEffect } from "react";
import Section from "./Section";
import AddSkillsForm from "./AddSkillsForm";
import Footer from "../Layout/CommonLayout/Footer";
import { MetaTags } from "react-meta-tags";

const AddSkills = () => {
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
        <title>Add Skills</title>
      </MetaTags>
      <Section />
      <AddSkillsForm />
      <Footer />
    </React.Fragment>
  );
};

export default AddSkills;
