import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import backgrounImage from "../../../assets/images/isometric-cubes-seamless-pattern-3d-render-cubes-background_161844-380.jpg";

//Import Images
import teamMemberImage1 from "../../../assets/images/Photo1.jpg";
import teamMemberImage2 from "../../../assets/newimages/william.jpg";
import teamMemberImage3 from "../../../assets/images/user/img-03.jpg";
import teamMemberImage8 from "../../../assets/images/user/img-08.jpg";
import teamMemberImage7 from "../../../assets/images/user/img-07.jpg";
import teamMemberImage4 from "../../../assets/images/user/img-04.jpg";
import teamMemberImage6 from "../../../assets/images/user/img-06.jpg";
import teamMemberImage10 from "../../../assets/images/user/img-10.jpg";
import teamMemberImage11 from "../../../assets/images/user/img-11.jpg";

const TeamPage = () => {
  const teamPage = [
    {
      id: 1,
      teamMemberImage: teamMemberImage1,
      teamMemberName: "Stanley Ipu- Managing Director",
      teamMemberPosition:
        "Stanley formed the Group of companies in 1989 and was General Manager until 2006 when he assumed the role of Managing Director. ForPacific Manpower, he is actively involved in the day-to-day operations of the Business. He drives our continued growth through the formation of beneficial Landowner Joint ventures and oversees many of the diverse Business Units within the Group.",
    },
    {
      id: 2,
      teamMemberImage: teamMemberImage2,
      teamMemberName: "William Lamur, OBE - Executive Director",
      teamMemberPosition:
        " Mr. William Lamur was appointed as Executive Director in June 2023. Mr. Lamur has over 40 years of commercial experience across many industries, 32 of which are at senior executive management level. He has worked in senior positions with Shell Oil Company, Origin Energy, and East New Britain Development Corporation Limited.He also held director roles, including Chairmanship at PTC, National Development Bank, NASFUND, Mainland Holdings, PNG Air, and ENBDC. Other Director roles include ENB Port Services, TrukaiIndustries, Andersons Foodland Supermarket, Pacific Energy, Pacific Assurance Group, KumulHotel Group, Grand Pacific(Fiji) and LoloataIsland Resort. He currently still sits on a number of Boards.",
    },
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <div className="section-title text-center mb-4 pb-2"></div>
            {teamPage.map((teamPageDetails, key) => (
              <Col lg={6} md={6} key={key}>
                <div className="team-box card border-0 ">
                  <div className="team-img position-relative mx-auto">
                    <img
                      src={teamPageDetails.teamMemberImage}
                      alt=""
                      className="img-thumbnail"
                      style={{ border: "3px solid black" }}
                    />
                  </div>
                  <div className="team-content card-body text-center">
                    <h6 className="fs-17 mb-3">
                      {teamPageDetails.teamMemberName}
                    </h6>
                    <p
                      className="mb-0 indented-paragraph text-muted"
                      style={{ lineHeight: "2em", textAlign: "justify" }}
                    >
                      {teamPageDetails.teamMemberPosition}
                    </p>
                    <style>
                      {`
  .indented-paragraph::first-letter {
    margin-left: 30px; /* Adjust the value as needed for the desired indentation */
  }
  
  `}
                    </style>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TeamPage;
