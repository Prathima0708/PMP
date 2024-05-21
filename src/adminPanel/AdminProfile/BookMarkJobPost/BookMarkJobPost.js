import React, { useEffect } from "react";
import JobPostEdit from "./JobPostEdit";
import Section from "./Section";
import Footer from "../../Layout/CommonLayout/Footer";
import { MetaTags } from "react-meta-tags";

const BookMarkJobPost = () => {
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
        <title>Post Job</title>
      </MetaTags>
      <Section />
      <JobPostEdit />
      <Footer />
    </React.Fragment>
  );
};

export default BookMarkJobPost;
