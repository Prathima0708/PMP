import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const TKIManpowerpage = () => {
  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="mb-5">
              <h6 className="fs-17 fw-semibold mb-4">TKI Manpower</h6>
              <p className="text-muted">
                TKI Manpower has been providing services to the OK Tedi Mine for
                the last 22 years and is recognized as a provider of highly
                skilled PNG national and Expatriates.
              </p>
              <p className="text-muted">
                The TKI Manpower team is very experienced in relation to our
                core services and has an experienced team to manage our large
                workforce located at many locations including the Mine, Mill,
                Workshops, Administration, Tunnels, Properties, Bige and Kiunga.
              </p>
              <p className="text-muted">
                If you require any Shutdown, Short Term or Long term staffing
                requirements please contact the Site Manager at TKI Manpower.
              </p>
              <h6 className="fs-17 fw-semibold mb-4">Contact</h6>
              <p className="text-muted" style={{ lineHeight: "1.9em" }}>
                TKI Manpower
                <br />
                Site Manager - John Thorne <br />
              </p>
              <p className="text-muted" style={{ lineHeight: "1.9em" }}>
                TKI Manpower
                <br />
                P.O. Box 292 <br />
                Tabubil , WP
                <br />
                Ph:6499623
                <br />
                Fax:6499628
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default TKIManpowerpage;
