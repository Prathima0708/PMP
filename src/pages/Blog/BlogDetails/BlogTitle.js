import React from "react";
import { Col, Row } from "reactstrap";

const BlogTitle = () => {
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col lg={12}>
          <div className="text-center mb-5">
            <h3
              className="title"
              style={{ fontStyle: "Ubuntu", marginTop: "1em" }}
            >
              Our Business Units
            </h3>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BlogTitle;
