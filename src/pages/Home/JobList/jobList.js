import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

import Freelancer from "../JobList/Freelancer.js";
import Fulltime from "../JobList/Fulltime.js";
import Parttime from "../JobList/Parttime.js";

const JobList = () => {
  const [activeTab, setActiveTab] = useState("3");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <div className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} style={{ fontFamily: "Poppins" }}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title text-black">Latest Job Listings</h4>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8} style={{ fontFamily: "Poppins" }}>
              <Nav
                tabs
                className="job-list-menu  nav-pills nav-justified flex-column flex-sm-row mb-4"
                id="pills-tab"
                role="tablist"
              >
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      tabChange("3");
                    }}
                    id="freelancer-tab"
                    type="button"
                    role="tab"
                  >
                    Freelancer
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      tabChange("4");
                    }}
                    id="part-time-tab"
                    type="button"
                    role="tab"
                  >
                    Part Time
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "5" })}
                    onClick={() => {
                      tabChange("5");
                    }}
                    id="full-time-tab"
                    type="button"
                    role="tab"
                  >
                    Full Time
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="3">
                  <Freelancer />
                </TabPane>

                <TabPane tabId="4">
                  <Parttime />
                </TabPane>

                <TabPane tabId="5">
                  <Fulltime />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default JobList;
