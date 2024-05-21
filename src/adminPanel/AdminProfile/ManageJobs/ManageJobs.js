import React, { useEffect } from "react";
import { MetaTags } from "react-meta-tags";
import { Container } from "reactstrap";
import JobListing from "./JobListing";
import Section from "./Section";
import Selected from "./Selected";
import Footer from "../../Layout/CommonLayout/Footer";

const ManageJobs = () => {
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
        <title>Manage Jobs</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <JobListing />
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ManageJobs;
