import React from "react";
import { Col, Container, Row } from "reactstrap";
import backgrounImage from "../../../assets/images/manpower.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ManpowerPage = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col
              lg={12}
              style={{ lineHeight: "2em", marginTop: "1em" }}
              className="text-center"
            >
              <h3 className="mb-3 title" style={{ fontSize: "43px" }}>
                Manpower - Contract Hire
              </h3>
              <p className="text-muted mt-4">
                We give you the best, to make you the best” Whenever the need
                for outsourcing is expressed, be it front-line staff or
                specialist roles, or even seasoned experts- across industries,
                Pacific Manpower delivers and outperforms the expectations of
                its clients. We outsource only the best quality professionals
                around the world with the objective of shining a different light
                on the term “manpower.“ Pacific Manpower gives Contract Hire
                (outsourcing services) like payroll management and contractual
                manpower to organizations.
              </p>

              <p className="text-muted">
                More than just “Labour Hire”. Professionals and management on
                our database software for all trades. Recruitment System “TRIS”
                – First and Only HR Provider in PNG using this system. Database
                includes PNG Nationals, Other Country Nationals(OCNs) and
                Expatriates Resumes, references and qualifications are all
                thoroughly checked. We supply Manpower for ongoing
                projects/assignments, Plant shutdowns, as well as specialist
                trades for emergency breakdowns. Manpower is not an expensive
                way to solve your staffing needs as we handle everything for the
                employee right down to their Uniforms.
              </p>

              <p className="text-muted">
                Many Clients use Manpower for Probation periods-Risk Free Trial
                periods Many Clients are using this arrangement to source
                Expatriate skills Manpower is the Solution to your Staffing
                requirements. All Trades, Professions and General staffing
                available.We have the latest Computerised Database software,
                which manages our people so we can quickly supply the people you
                need.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2"
                >
                  Contact Us <i className="uil uil-angle-right-b ms-1"></i>
                </Link>
                <style>
                  {`
      .btn-gradient-primary {
        background-image: linear-gradient(to left,  #0066CC,#38B0F9);
  color: white;
  border: none;
  transition: transform 0.3s ease;
      }
      
      .btn-gradient-primary:hover {
        transform: scale(1.1); 
        background-image: linear-gradient(to left,  #38B0F9,#0066CC);
        color: white;
      }
      
      `}
                </style>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ManpowerPage;
