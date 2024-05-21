import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { subURL } from "../../../utils/URLs";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ListmoreNews from "../../../adminPanel/News/NewsList/ListmoreNews";

const BlogText = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${subURL}/gallery/`);
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      } else {
        console.error("Failed to fetch images from the backend.");
      }
    } catch (error) {
      console.error("Error while fetching images:", error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 10; // Change this to the number of items to display per page
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = images && images.slice(startIndex, endIndex);

  const openGallery = (index) => {
    setPhotoIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const goToPrevious = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const goToNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <div className="mb-5">
      <Row className="g-0">
        {images.map((image, index) => (
          <Col
            sm={4}
            key={index}
            className={index % 4 === 0 ? "first-col" : ""}
          >
            <Link to="#" className="image-popup">
              <div className="image-container">
                <img
                  src={image.image}
                  alt=""
                  className="img-fluid"
                  onClick={() => openGallery(index)}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>

      {isGalleryOpen && (
        <Lightbox
          mainSrc={images[photoIndex].image}
          nextSrc={images[(photoIndex + 1) % images.length].image}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].image
          }
          enableZoom={true}
          onCloseRequest={closeGallery}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
          
        />
      )}
      {images.length === 0 && (
        <h3 className="fs-15 mt-3 mb-5 text-center">No events found.</h3>
      )}
      {filteredData.length > 0 && (
        <ListmoreNews
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          padding-top: 80%;
          margin-bottom: 0px;
          /* Set the height relative to the width to create a square aspect ratio */
        }

        .image-container img {
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 70%;
          object-fit: contain; /* Ensures the image fills the container while preserving its aspect ratio */
        }
      `}</style>
    </div>
  );
};

export default BlogText;
