import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import TkiHistoryPage from "./TkiHistoryPage";
import Footer from "../../../Layout/CommonLayout/Footer";
import { Container, Row } from "reactstrap";
import AdminAbtLeftSideContent from "../AdminAbtLeftSideContent";

const AdminTKIHistory = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>TKI History</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <AdminAbtLeftSideContent />
            <TkiHistoryPage />
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AdminTKIHistory;
