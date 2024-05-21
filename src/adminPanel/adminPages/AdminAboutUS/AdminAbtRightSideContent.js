import React from "react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import blogImage1 from "../../../assets/images/about1.jpg";
import blogImage3 from "../../../assets/images/about3.jpg";
import blogImage12 from "../../../assets/images/about2.jpg";
import { Link } from "react-router-dom";
import AboutImage from "../../../assets/images/group-afro-americans-working-together_1303-8971.avif"
//Job Images
import jobImage1 from "../../../assets/images/about1.jpg";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const images = [blogImage1, blogImage3, blogImage12];
const AdminAbtRightSideContent = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  //Lightbox
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);
  return (
    <React.Fragment>
      {isGallery ? (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          enableZoom={true}
          onCloseRequest={() => {
            setisGallery(false);
          }}
          onMovePrevRequest={() => {
            setphotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setphotoIndex((photoIndex + 1) % images.length);
          }}
          imageCaption={"Project " + parseFloat(photoIndex + 1)}
        />
      ) : null}
         <section className="section overflow-hidden">
          <Container>
            <Row className="align-items-center g-0">
              <Col lg={6} style={{marginTop:'0em' ,marginBottom:'17em'}}>
                <div className="section-title me-lg-5">
                  <h6 className="sub-title">About Us</h6>
                  <h2 className="title mb-4" style={{ fontSize: "47px" }}>
                    Why Choose{" "}
                    <span className=" fw-bold" style={{ color: "#FAD207" }}>
                      Pacific Manpower
                    </span>
                    ?
                  </h2>
                

                  <Row mt={4} pt={2}>
                    <Col md={12}>
                      <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                        <li> Allocate the right person to the right job.</li>
                        <li> Improve hiring quality.</li>
                      </ul>
                    </Col>
                    <Col md={12}>
                      <ul className="list-unstyled about-list text-muted">
                        <li> Improve recruitment performance.</li>
                        <li>Minimize recruitment process costs.</li>
                        <li>
                          Leverage employee retention, thus achieving a higher
                          return on human capital investment.
                        </li>
                      </ul>
                    </Col>
                  </Row>
                
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-img  ">
                  <img
                    src={AboutImage}
                    alt=""
                    className="img-fluid rounded"
                    style={{ height: "30em", marginBottom: "10em" }}
                  />
                </div>
              </Col>
              <style>
                {
                  `
                  @media only screen and (max-width: 991px) {
                    .rounded{
                      display:none;
                    }
                  }
                  `
                }
              </style>
            </Row>
          </Container>
        </section>
    </React.Fragment>
  );
};

export default AdminAbtRightSideContent;
