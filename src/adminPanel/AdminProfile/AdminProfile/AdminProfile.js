import React from "react";
import { MetaTags } from "react-meta-tags";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useEffect } from "react";

const AdminProfile = () => {
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
        <title>Admin Profile</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <RightSideContent />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AdminProfile;
