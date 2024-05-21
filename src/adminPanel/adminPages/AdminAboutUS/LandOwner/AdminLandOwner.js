import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";

import Footer from "../../../Layout/CommonLayout/Footer";
import { Container, Row } from "reactstrap";
import AdminAbtLeftSideContent from "../AdminAbtLeftSideContent";
import LandOwnerPage from "../../../../pages/Company/AboutUs/LandOwner/LandOwnerPage";

const AdminLandOwner = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Landowner Joint Ventures</title>
      </MetaTags>
      <Section />

      <section className="section">
        <Container>
          <Row>
            {/* <AdminAbtLeftSideContent /> */}
            {/* <LandOwnerPage /> */}
            <LandOwnerPage/>
          </Row>
        </Container>
      </section>
      {/* <LandOwnerPage /> */}
      <Footer />
    </React.Fragment>
  );
};

export default AdminLandOwner;
