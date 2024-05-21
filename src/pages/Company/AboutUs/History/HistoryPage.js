import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";


import AboutImage from "../../../../assets/images/pmwebslide6.jpg";

const HistoryPage = () => {
  return (
    <>
      <React.Fragment>
        <section className="section overflow-hidden">
          <Container>
            <Row className="align-items-center g-0">
              <Col lg={12}>
                <div className="section-title me-lg-5">
                  <h6 className="sub-title">About Us</h6>
                  <h2 className="title mb-4" style={{ fontSize: "41px" }}>
                    Pacific Manpower{" "}
                    <span className=" fw-bold" style={{ color: "#FAD207" }}>
                      History
                    </span>
                  </h2>
                  <p className="text-muted">
                    Pacific Manpower PNG Ltd was formed in 2008 by Managing
                    Director Stanley Ipu. Stanley who hails from Enga Province
                    started Tawap Kamen Investments in 1989 servicing the Ok
                    Tedi Mine with the provision of Engineering, Construction,
                    Security Services and Labour Hire. TKI has grown to be one
                    of the largest service providers to OTML after 26 years in
                    operation.He saw the need to establish a 100% PNG Owned
                    Recruitment agency as the market was dominated by overseas
                    companies, who were focusing on expatriates and not
                    representing Papua New Guinean workers and so Pacific
                    Manpower was established.
                  </p>
                  <p className=" text-muted ">
                    Pacific Manpower has successfully established Joint Ventures
                    at mine sites in PNG, these include the Winima Pacific
                    Manpower JV at MMJV’s Hidden Valley, Kndupi Investment
                    Pacific Manpower JV for Porgera , Unapual Investment Pacific
                    Manpower JV for Lihir , Etc.
                  </p>
                 
                </div>
              </Col>
              {/* <Col lg={6}>
                <div className="about-img  mt-lg-0">
                  <img src={AboutImage} alt="" className="img-fluid rounded" style={{marginTop:'',height:'30em'}} />
                </div>
              </Col> */}
            </Row>
          </Container>
        </section>

        <Container >
          <Row className="align-items-center g-0">
            <Col lg={12} style={{ marginTop: "-3em" }}>
              <div className="section-title " style={{ marginBottom: "7em" }}>
              <p className="text-muted">
                    Pacific Manpower PNG Ltd was formed in 2008 by Managing
                    Director Stanley Ipu. Stanley who hails from Enga Province
                    started Tawap Kamen Investments in 1989 servicing the Ok
                    Tedi Mine with the provision of Engineering, Construction,
                    Security Services and Labour Hire. 
                    
                    TKI has grown to be one of the largest service providers to
                    OTML after 26 years in operation.He saw the need to
                    establish a 100% PNG Owned Recruitment agency as the market
                    was dominated by overseas companies, who were focusing on
                    expatriates and not representing Papua New Guinean workers
                    and so Pacific Manpower was established.
                  </p>
                <p className="text-muted">
                  The real advantage is the clients really get charged for
                  advertising as we always search our recruitment system first.
                  The company has a solid and loyal team of recruitment
                  consultants and Immigration Agents. Pacific Manpower not only
                  specializes in PNG Nationals but also has recruited many
                  expats from Australia, New Zealand, Fiji, Philippines, India,
                  China, South Africa, UK and many other countries. Pacific
                  Manpower provides services to many of PNG’s top companies as
                  well as providing services to companies trying to establish
                  operations in the country for the first time.
                </p>

                <p className="text-muted">
                  Many clients see Contract hire as a real benefit as their
                  requirement for employees changes, whether it’s a replacement
                  for a receptionist on maternity leave or for a large plant
                  shut-down for maintenance, they can provide skilled and
                  experienced staff for the period you require. They have
                  handled numbers from 1 to 250 workers for clients and
                  everything in between.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </>
  );
};

export default HistoryPage;