import React from "react";
import { MetaTags } from "react-meta-tags";
import WinimaPage from "./WinimaPage";
import Section from "./Section";
import Footer from "../../../Layout/CommonLayout/Footer";
import { Container, Row } from "reactstrap";

import AdminAbtLeftSideContent from "../AdminAbtLeftSideContent";

const AdminWinima = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Winima Pacific Manpower</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <AdminAbtLeftSideContent />
            <WinimaPage />
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AdminWinima;
