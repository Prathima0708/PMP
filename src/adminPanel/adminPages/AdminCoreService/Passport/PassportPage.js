import { Icon } from "@iconify/react";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const PassportPage = () => {
  const pricingpage = [
    {
      id: 1,
   
      pricingIcon: "bi:journal-bookmark-fill",
      pricingName: "Starter",
      pricingPrice: "$35.99",
      pricingsuccessclass: "btn-soft-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Use our in house team to complete and manage the lodgement of all Visa’s and work permits for Expat employees.",
        },
        {
          id: 2,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Lodge PNG visa applications for overseas visitors.",
        },
        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Lodgement of PNG passport and overseas visa applications for your PNG Staff travelling overseas for training courses etc.",
        },
      
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Our team has in excess of 10 years experience with the Labour and Immigration Departments.",
        },
        {
          id: 5,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "PNG Birth certificates arranged.",
        },
        {
          id: 5,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Prompt, Efficient and Cost effective service.",
        },
        {
          id: 6,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Avoid the complexities of your Immigration needs, with the experienced team at Pacific Manpower..",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "We handle everything from Birth Certificates to Permanent residency applications.",
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
          <h3 style={{fontSize:'35px'}}> Passport and Work Permits</h3>
          <p className="text-muted">
            We offer a full service of all Immigration and Visa services for companies employing expatriates as well as PNG Nationals who require overseas travel.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      {pricingpage.map((pricingpageDetails, key) => (
        <Col lg={12} md={6} className="mt-5 pt-2" key={key}>
          <Card className="pricing-box" style={{ backgroundColor: '#f0f0f0',  }}>
            <CardBody className="p-4 px-lg-5">
              <div className="pricing-icon  rounded-circle icons-md" style={{ backgroundColor: '#f0f0f0',  }}>
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

export default PassportPage;
