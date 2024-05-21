import React, { useEffect } from "react";
import Section from "./Section";
import AddBusinessStreamForm from "./AddBusinessStreamForm";
import Footer from "../Layout/CommonLayout/Footer";
import { MetaTags } from "react-meta-tags";

const AddBusinessStream = () => {
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
        <title>Add Business Stream</title>
      </MetaTags>
      <Section />
      <AddBusinessStreamForm />
      <Footer />
    </React.Fragment>
  );
};

export default AddBusinessStream;
