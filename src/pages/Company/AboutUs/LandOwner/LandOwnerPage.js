import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import blogImage from "../../../../assets/images/pmp_07.jpg";
import blogImage1 from "../../../../assets/images/About.jpeg";

import AboutImage from "../../../../assets/images/three-factory-workers-safety-hats-discussing-manufacture-plan_1303-30642.avif";
import AboutImage1 from "../../../../assets/images/building-construction-worker-site-with-architect_23-2149124270.avif";
import AboutImage2 from "../../../../assets/images/elementsaboutus2.jpg";

const LandOwnerPage = () => {
  return (
    <React.Fragment>
      {/* <Row>
        <Col lg={8}>
          <Card className="ms-lg-4 mt-4 mt-lg-0 ">
            <CardBody className="p-4">
              <div className="mb-4">
                <h6
                  className=" fw-semibold mb-4 heading"
                  style={{ fontSize: "30px", lineHeight: "1.5em" }}
                >
                  TOLU Construction and Pacific Manpower PNG Ltd JV
                </h6>

                <p className="text-muted">
                  It is part of our company mission statement to develop
                  successful Landowner Joint Ventures and partnerships.This
                  provides us with Harmonious business relationships in resource
                  areas, while allowing us to build a national brand and
                  operation.The JVs have full access to all the Pacific Manpower
                  resources and database.
                </p>

                <ul className="text-muted list-unstyled about-list">
                  <li>
                    Expatriate contractors for short-term and long-term
                    contracts.
                  </li>
                  <li>
                    PNG Nationals for Trade, Skilled Administrative,
                    professional, or Other Contract Positions ( Labour Hire).
                  </li>
                  <li>Provision of Casual Labour at project sites.</li>
                  <li>
                    Provision of Building Construction, Engineering,
                    Maintenance, and Technical Services.
                  </li>
                  <li>Work Permit, Passport, and Immigration Services.</li>
                  <li>Building strong ongoing JV to benefit Landowners.</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <div className="about-img mt-4 mt-lg-0">
            <img src={AboutImage} alt="" className="img-fluid rounded" />
          </div>
        </Col>
      </Row> */}

      <Row className="" style={{ margin: "1em", marginTop: "1em" }}>
        <Col lg={6}>
          <div className="about-img mt-4 mt-lg-0">
            <img
              src={AboutImage2}
              alt=""
              className="img-fluid rounded"
              style={{ width: "35em", height: "30em" }}
            />
          </div>
        </Col>

        <Col lg={6}  className="secondrow">
          <Card className="ms-lg-4 mt-4 mt-lg-0 " >
            <CardBody className="p-4">
              <div className="">
                <h6
                  className=" fw-semibold mb-4 heading"
                  style={{ fontSize: "25px", lineHeight: "1.3em" }}
                >
                  Kandupi Investment Limited and Pacific Manpower PNG Ltd JV
                </h6>
                <p className="text-muted">
                  To Provide Services to Clients ad Projects and /or its
                  contractors based in the Porgera Gold Mine site and in PNG in
                  the following categories
                </p>

                <ul className="text-muted list-unstyled about-list">
                  <li>Labour Hire ( Expatriate & Nationals).</li>
                  <li>
                    Recruitment (Short-term & Long Term Expatriate & Nationals
                    ).
                  </li>
                  <li>Provision of Casual Labour at project sites.</li>
                  <li>Work Permit, Passport, and Immigration Services.</li>
                  <li>Payroll Services.</li>
                  <li>
                    Fly in Fly Out ( Travel Service, Transit and Transfer).
                  </li>
                  <li>Building strong ongoing JV to benefit Landowners</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* <Row className="thirdrow" style={{ marginTop: "7em" }}>
        <Col lg={8}>
          <Card className="ms-lg-4 mt-4 mt-lg-0">
            <CardBody className="p-4">
              <div className="mb-5">
                <h6
                  className=" fw-semibold mb-4 heading"
                  style={{ fontSize: "30px", lineHeight: "1.5em" }}
                >
                  UNAPUAL Investment Limitedand Pacific Manpower PNG Ltd JV
                </h6>
                <p className="text-muted">
                  To Provide Services to Clients ad Projects and /or its
                  contractors based in the Newcrest Gold Mine site and PNG in
                  the following categories.
                </p>

                <ul className="text-muted list-unstyled about-list">
                  <li>Labour Hire ( Expatriate & Nationals)</li>
                  <li>
                    Recruitment (Short-term & Long Term Expatriate & Nationals )
                  </li>
                  <li>Work Permit, Passport, and Immigration Services</li>
                  <li>Payroll Services</li>
                  <li>Work Permit, Passport, and Immigration Services.</li>
                  <li>
                    Fly in, Fly Out ( Travel Service, Transit, and Transfer)
                  </li>

                  <li>Building strong ongoing JV to benefit Landowners</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          <div className="about-img mt-4 mt-lg-0">
            <img src={AboutImage1} alt="" className="img-fluid rounded" />
          </div>
        </Col>
        <style>
          {`
            @media only screen and (max-width: 991px){
              .about-img{
                display:none;
              }
              .secondrow{
                margin-left:0px !important;
                
                margin-top:-5em !important;
              }
              .thirdrow{
                margin-top:1em !important;
              }
              .heading{
                font-size:20px !important;
              }
             
            }
            `}
        </style>
      </Row> */}

      
    </React.Fragment>
  );
};

export default LandOwnerPage;
