import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "@iconify/react";

const Features = () => {
  const features = [
    {
      id: 1,
      featureIcon: "uim-object-ungroup",
      featureName:
        "To provide Quality and Efficient Labour and contract Hire Services to meet the needs and demands of the Mining, Petroleum, and other industries.",
    },
    {
      id: 2,
      featureIcon: "uim-telegram-alt",
      featureName:
        "To foster relationships with resource area landowners under formal partnership arrangements for long-term harmonious business relations. ",
    },
    {
      id: 3,
      featureIcon: "uim-lock-access",
      featureName:
        "To provide efficient recruitment, work permits, visas, and immigration services to all industries.",
    },
  
  ];
  return (
    <React.Fragment>
      <section className="section" style={{marginTop:'-11em'}}>
        <Container>
        
          <div
            className="section-container"
            style={{ padding: "5em", marginBottom: "4em", paddingTop: "3em" }}
          >
            <Row>
              <h3
                className="title text-center main mb-3"
                style={{ fontSize: "43px" }}
              >
                Our Company<span style={{ color: "#FAD207" }}> Mission</span>
              </h3>
              <p
                className=" text-center"
          
              >
                We are driven by the belief that a well-matched job can ignite
                extraordinary success stories, and we're committed to making
                those stories a reality for every member of our community.
              </p>
              {features.map((featuresDetails, key) => (
                <Col xs={12} key={key} className="mt-3" >
                  <div className="about-feature p-2 d-flex align-items-center rounded-3">
                    <div className="featrue-icon flex-shrink-0" style={{marginLeft:'0.5em'}} >
                      <Icon
                        icon={featuresDetails.featureIcon}
                        className="text-primary" 
                      />
                    </div>
                    <div className="flex-grow-1 ms-2" style={{padding:'1em'}}>
                      <p className="fs-16 mb-0 ">
                        {featuresDetails.featureName}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <style>
              {`
      .section-container {
        background-color: #F2F3F4; /* Grey background color */
      }
      
      /* Set the background color of the boxes */
      .about-feature {
        background-color: #ffffff; /* White background color */
        padding: 1em;
       
      }

      @media only screen and (max-width: 991px) {
        .main{
          font-size: 14px;
        }
      }
      
      @media (max-width: 768px) {
        .section-container {
          padding: 3em 1em;
          margin-top:-100px; /* Adjust padding for smaller screens */
        }
       
        
        .title {
          font-size: 24px; /* Adjust title font size for smaller screens */
        }
        
        .text-muted {
          font-size: 12px; /* Adjust text font size for smaller screens */
        }
        
        .about-feature {
          margin-bottom: 1em; 
          flex-direction:column;/* Add margin between features on smaller screens */
        }
        @media only screen and (max-width: 991px) {
          .main{
            font-size:25px !important;
          }
        
       
        }
      }

    
    `}
            </style>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
