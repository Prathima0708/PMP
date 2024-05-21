import React from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const PrivacyAndPolicyPage = () => {
  const pricingpage = [
    {
      id: 1,
   
      pricingIcon: "bi:code-slash",
      pricingName: "Starter",
      pricingPrice: "$35.99",
      pricingsuccessclass: "btn-soft-primary",
      pricingDetails: [
        {
          id: 1,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "LAN and WAN Network design & deployment services.",
        },
        {
          id: 2,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Microsoft Domain & Active Directory Solutions.",
        },
        {
          id: 3,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "File servers and Storage Solutions.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Data Backup and Recovery solutions.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Managed  domain ,websites & email services.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Tier 1-3 desktop & server support.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Onsite & remote services.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Hardware & software procurement.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Asset management services.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Cabling services.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Firewall Solution.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "All Windows Server Operating Systems Support.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "All Windows Desktop Operating Systems support.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Anti Virus Solutions.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Microsoft Office System 2003 | 2007 | 2010 | 2013.",
        },
        {
          id: 4,
          pricingInnerClassName: "pricing-item",
          pricingInnerIcon: "mdi mdi-check-bold bg-soft-success me-2",
          pricingInnerText: "Attendance system solution .",
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
               
                <h3 style={{fontSize:'35px'}}> IT Services</h3>
                <p className="text-muted">
                Our Expartriate IT consultant is highly qualified and has worked for many major organisation. Talk to us to provide our highly skilled IT consultant support for your Network, Hardware, Software, secuirity issues.
                
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

export default PrivacyAndPolicyPage;
