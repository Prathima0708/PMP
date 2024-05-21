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

//Components Imports
import FeaturedJobs from "../JobList/FeaturedJobs";
import Freelancer from "../JobList/Freelancer.js";
import Fulltime from "../JobList/Fulltime.js";
import Parttime from "../JobList/Parttime.js";
import RecentJobs from "./RecentJobs";

const JobList = () => {
  const [activeTab, setActiveTab] = useState("3");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <div className="section bg-light">
        <Container
          style={
            {
              //  boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }
          }
        >
          <Row className="justify-content-center ">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h3 className="title " style={{fontSize:'47px',}}><span style={{color:'#FAD207'}}>Latest</span> Job Listings</h3>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8} >
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
                    Permanent
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
                    Contract
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

              
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default JobList;
