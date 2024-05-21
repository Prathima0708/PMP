import React from "react";
import { MetaTags } from "react-meta-tags";
import Section from "./Section";
import { Container, Row } from "reactstrap";
import HistoryPage from "./HistoryPage";

const History = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>About Us</title>
      </MetaTags>
      <Section />
     
            <HistoryPage />
      
    </React.Fragment>
  );
};

export default History;
