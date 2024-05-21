import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import blogImage from "../../../../assets/images/pmp_07.jpg";
import blogImage1 from "../../../../assets/images/About.jpeg";

import AboutImage from "../../../../assets/images/three-factory-workers-safety-hats-discussing-manufacture-plan_1303-30642.avif";
import AboutImage1 from "../../../../assets/images/building-construction-worker-site-with-architect_23-2149124270.avif";
import AboutImage2 from "../../../../assets/newimages/sc3.jpg";

const SubsidiaryCompaniesPage = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={8}>
          <Card className="ms-lg-4 mt-4 mt-lg-0 ">
            <CardBody className="p-4">
              <div className="mb-4">
                <h6
                  className=" fw-semibold mb-4 heading"
                  style={{ fontSize: "30px", lineHeight: "1.5em" }}
                >
               Pacific Manpower (Lihir) Limited
                </h6>

                <p className="text-muted">
                Pacific Manpower Lihir Limited is 50% owned by Pacific Manpower PNG
Limited and 50% by local landowner entities. The company will have its
board of directors representing our shareholders and is managed by
Pacific Manpower PNG Limited to provide services to clients and
projects and /or its contractors at Newmont Mine site in Lihir Island in
the following categories.
                </p>

                <ul className="text-muted list-unstyled about-list">
                  <li>
                  Labour Hire and Contract Hire( Expatriate & Nationals).
                  </li>
                  <li>
                  Recruitment (Short-term & Long-Term Expatriate & Nationals ).

                  </li>
                  <li>Work Permit, Passport, and Immigration Services.
</li>
                  <li>
                  Vehicle and Equipment Hire.
                  </li>
                  <li>Payroll Services.</li>
                  <li>Fly in, Fly Out services( Travel Service, Transit, and Transfer).</li>
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
      </Row>

      <Row className="" style={{ margin: "1em", marginTop: "1em" }}>
        <Col lg={6}>
          <div className="about-img mt-4 mt-lg-0">
            <img
              src={AboutImage2}
              alt=""
              className="img-fluid rounded"
              style={{ width: "35em", height: "33em" }}
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
                 Pacific Manpower (Porgera) Limited
                </h6>
                <p className="text-muted">
                Pacific Manpower Porgera Limited is 50% owned by Pacific Manpower
PNG Limited and 50% by local Porgera landowner entities. The company
will have its board of directors representing our shareholders. Pacific
Manpower PNG Limited manages PMPL to provide services to clients
and projects and /or its contractors at New Porgera Gold Mine site in
Porgera in the following categories.

                </p>

                <ul className="text-muted list-unstyled about-list">
                  <li> Labour Hire and Contract Hire ( Expatriate & Nationals).</li>
                  <li>
                  Recruitment (Short-term & Long-Term Expatriate & Nationals).
                  </li>
                  <li>Work Permit, Passport, and Immigration Services.</li>
                  <li>Vehicle and Equipment Hire.</li>
                  <li>Payroll Services.</li>
                  <li>
                  Fly in, Fly Out services( Travel Service, Transit, and Transfer).
                  </li>
              
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>


      
    </React.Fragment>
  );
};

export default SubsidiaryCompaniesPage;
