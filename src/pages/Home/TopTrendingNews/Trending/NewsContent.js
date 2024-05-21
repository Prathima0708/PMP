import React, { useState } from "react";

import { Col, Container, Row, TabContent, TabPane } from "reactstrap";

import TrendingList from "./TrendingList";

const NewsContent = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <React.Fragment>
      <section className="section pt-1">
        <Container>
          <Row className="align-items-center ">
            <Col lg={12}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row style={{ justifyContent: "center" }}>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="buying"
                      >
                        <TrendingList />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default NewsContent;
