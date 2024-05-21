import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

//swiper css
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Import Blog images
import Businessunit from "../../../assets/images/Businessunit.jpeg"
import { Col, Row } from 'reactstrap';

const BlogSwiper = () => {
    const blogSwiper = [
        {
            id: 1,
            blogImage: Businessunit
        },
      
    ];

    SwiperCore.use([Autoplay, Pagination]);
    return (
        <React.Fragment>
            <Row>
          <Col lg={12}>
               
                    {(blogSwiper || []).map((blogSwiperDetails, key) => (
                        
                            <img src={blogSwiperDetails.blogImage} alt="" className="img-fluid rounded-3" />
                       
                    ))}
               
               </Col>
               </Row>

        </React.Fragment>
    );
};

export default BlogSwiper;
