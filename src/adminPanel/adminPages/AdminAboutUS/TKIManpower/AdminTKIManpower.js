import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import TKIManpowerpage from "./TKIManpowerpage";
import Footer from "../../../Layout/CommonLayout/Footer";
import { Container, Row } from "reactstrap";
import AdminAbtLeftSideContent from "../AdminAbtLeftSideContent";

const AdminTKIManpower = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Landowner Joint Ventures</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <AdminAbtLeftSideContent />
            <TKIManpowerpage />
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AdminTKIManpower;
