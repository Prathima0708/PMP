import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const WinimaPage = () => {
  return (
    <React.Fragment>
  <Col lg={8}>
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="mb-5">
              <h6 className="fs-17 fw-semibold mb-4">Winima PacificManpower</h6>
              <p className="text-muted">
                This is another exciting Joint Venture between the Hidden Valley
                mine landowners, Winima Investments which represents directly
                one grouping of the Hidden Valley landowners, has entered into a
                JV with Pacific Manpower to provide our core services to the
                mine and the wider Lae community.
              </p>
              <p className="text-muted">
                Winima is represented in the JV by the Chairman Mr Samson Kawa
                and Mr Kiwi Mauri. The JV is located at the MMJV Hidden Valley
                Mine site. The team will provide our core services of Manpower,
                Recruitment and Immigration services.
              </p>
              <h6 className="fs-17 fw-semibold mb-4">Contact</h6>
              <p className="text-muted">
                Lee Robertson <br />
                Business Development Manager <br /> Email:
                bdmpom@pacificmanpower.com.pg <br />
                Mobile - 7327 9301
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default WinimaPage;
