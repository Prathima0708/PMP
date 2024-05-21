import React, { useState } from "react";

import {
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";
import AccordianContentLeft from "./AccordianContentLeft";

const FaqContent = () => {
  const [activeTab, setActiveTab] = useState("1");
  const TabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Nav
                className="faq-menu nav-fill nav-pills justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      TabChange("1");
                    }}
                    type="button"
                  >
                    Latest News
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col lg={12}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row style={{ justifyContent: "center" }}>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="buying"
                      >
                        <AccordianContentLeft />
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

export default FaqContent;
