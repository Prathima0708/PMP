import { Icon } from "@iconify/react";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const RecruitmentPage = () => {
  const pricingpage = [
    {
      id: 1,
   
      pricingIcon: "bi:person-check-fill",
      pricingName: "Starter",
      pricingPrice: "$35.99",
      pricingsuccessclass: "btn-soft-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "We offer a full search to locate your key staffing requirements whether from within PNG or overseas.Recruitment service available for PNG nationals, OCNs and expats.",
        },
       
        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Prompt, Efficient, and cost-effective services.Our recruitment services aim to take the hassle out of finding new staff.",
        },
      
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Our database offers considerable cost savings and efficiencies, in our aim to supply quality staff for your business.",
        },
        {
          id: 5,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Our team will work with you to set the requirements, job descriptions and your other needs.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "We offer a full recruitment service including advertising, interviews, reference checking.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Recruitment service available for PNG Nationals, Other Country Nationals(OCNs) and Expatriates.",
        },
        {
            id: 6,
            pricingInnerClassName: "pricing-item",
            pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
            pricingInnerText: "Positions can be advertised on all media including a free listing on our Job Seeker section on this website.",
          },
          {
            id: 6,
            pricingInnerClassName: "pricing-item",
            pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
            pricingInnerText: "A very cost effective service with a fixed upfront fee structure.Many Clients are using this arrangement to source Expatriate skills.",
          },
         
         
      ],
    },
  ];
  return (
    <React.Fragment>
     <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center">
               
                <h3 style={{fontSize:'35px'}}> Recruitment</h3>
                <p className="text-muted">
                We offer a full search to locate your key staffing requirements whether from within PNG or overseas.
                
                </p>
              </div>
            </Col>
          </Row>
          <Row>
          {pricingpage.map((pricingpageDetails, key) => (
        <Col lg={12} md={6} className="mt-5 pt-2" key={key}>
          <Card className="pricing-box" style={{ backgroundColor: '#f0f0f0', }}>
            <CardBody className="p-4 px-lg-5">
              <div className="pricing-icon  rounded-circle icons-md" style={{ backgroundColor: '#f0f0f0', }}>
                <Icon
                  icon={pricingpageDetails.pricingIcon}
                  className="text-primary"
                />
              </div>

              <ul className="list-unstyled pricing-details text-black mt-4">
                <div className="row">
                  <div className="col-md-6">
                    {pricingpageDetails.pricingDetails.slice(0, Math.ceil(pricingpageDetails.pricingDetails.length / 2)).map((pricingpageInnerDetails, key) => (
                      <li
                        key={key}
                        className={pricingpageInnerDetails.pricingInnerClassName}
                      >
                        <i
                          className={pricingpageInnerDetails.pricingInnerIcon}
                        ></i>{" "}
                        {pricingpageInnerDetails.pricingInnerText}
                      </li>
                    ))}
                  </div>
                  <div className="col-md-6">
                    {pricingpageDetails.pricingDetails.slice(Math.ceil(pricingpageDetails.pricingDetails.length / 2)).map((pricingpageInnerDetails, key) => (
                      <li
                        key={key}
                        className={pricingpageInnerDetails.pricingInnerClassName}
                      >
                        <i
                          className={pricingpageInnerDetails.pricingInnerIcon}
                        ></i>{" "}
                        {pricingpageInnerDetails.pricingInnerText}
                      </li>
                    ))}
                  </div>
                </div>
              </ul>

             
            </CardBody>
          </Card>
        </Col>
      ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default RecruitmentPage;
