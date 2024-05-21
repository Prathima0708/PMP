import React, { useEffect, useState } from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import { Link } from "react-router-dom";

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import BlogImage
import blogImage1 from "../../../assets/images/compoverview.jpeg";
import blogImage3 from "../../../assets/images/compmission.jpeg";
import blogImage12 from "../../../assets/images/elementsslider1.jpg";

//Job Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";
import axios from "axios";
import { subURL } from "../../../utils/URLs";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const images = [blogImage1, blogImage3, blogImage12];

const RightSideContent = () => {
  const { id } = useParams();
  const [compDetails, setCompDetails] = useState(null);

  useEffect(() => {
    const fetchAppliedStatus = async () => {
      const res = await axios.get(`${subURL}/company_save_details/${id}/`);

      setCompDetails(res.data);
    };

    fetchAppliedStatus();
  }, [id]);

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
      <Col lg={8}>
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="mb-5">
              <h6 className="fs-17 fw-semibold mb-4">About Company</h6>
              <p className="text-muted">{compDetails?.profile_description}</p>
            </div>
            <div className="candidate-portfolio mb-5">
              <h6 className="fs-17 fw-semibold mb-4">Gallery</h6>
              <Row className="g-3">
                <Col lg={6}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage1}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(0);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col lg={6}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage3}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(1);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col lg={12}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage12}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(2);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
