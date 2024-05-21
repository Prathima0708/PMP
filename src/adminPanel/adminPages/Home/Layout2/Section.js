import React from "react";
import { Col, Container, Row, Form } from "reactstrap";
// import {Link} from "react-router-dom";
import processImage2 from "../../../../assets/images/about1.jpg";
import CountryOptions from "../SubSection/CountryOptions";
import JobSearch from "../SubSection/JobSearch";
import TopBar from "../../../Layout/CommonLayout/TopBar";
import NavBar from "../../../Layout/CommonLayout/NavBar";

const section = () => {
  return (
    <React.Fragment>
      <TopBar />
      <NavBar />
      <section className="bg-home2" id="home">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="mb-4 pb-3 ">
                <h6 className="sub-title">We have 150,000+ live jobs</h6>
                <h1 className="display-5 fw-semibold mb-3">
                  Welcome to our job portal website!
                </h1>
                <p className="lead text-muted mb-0">
                  As an admin, you'll have access to powerful tools and features
                  to manage job postings, track applications, and connect with
                  top talent. Let's work together to build a better workforce
                  for the future!
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <div className="mt-md-0">
                <img src={processImage2} alt="" className="home-img" style={{width:'130%'}}/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default section;
