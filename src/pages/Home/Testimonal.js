import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

//swiper css

import "swiper/swiper-bundle.min.css";

import "swiper/swiper.min.css";

//Images import
import MailChimp from "../../assets/images/logo/mailchimp.svg";
import WordPress from "../../assets/images/logo/wordpress.svg";
import Instagram from "../../assets/images/logo/Instagram.svg";

import Puma from "../../assets/images/1.png";
import SteamShips from "../../assets/images/2.png";
import StartumGroup from "../../assets/images/3.jpg";
import paradisefoods from "../../assets/images/9.jpg";
import startmountain from "../../assets/images/smp-logo.png";
import rounarepais from "../../assets/images/14.jpg";
import coralseahotels from "../../assets/images/4.jpg";
import spbrewery from "../../assets/images/15.jpg";
import harmoney from "../../assets/images/8.jpg";
import speedcast from "../../assets/images/13.jpg";
import newcrest from "../../assets/images/11.png";
import borokomotors from "../../assets/images/19.jpg";
import ipigroup from "../../assets/images/7.png";
import australian from "../../assets/images/12.jpg";
import odg from "../../assets/images/10.jpg";
import spac from "../../assets/images/6.png";
import keynote from "../../assets/images/18.jpg";
import turkai from "../../assets/images/17.jpg";
import goodman from "../../assets/images/16.jpg";
import national from "../../assets/images/20.jpg";

const Testimonal = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const isMobile1 = window.innerWidth <= 991;
  useEffect(() => {
    function handleResize() {
      // Adjust the number of slides per view based on the viewport width
      if (window.innerWidth < 576) {
        setSlidesPerView(1); // Mobile view, show 1 slide per view
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2); // Tablet view, show 2 slides per view
      } else {
        setSlidesPerView(3); // Desktop view, show 3 slides per view
      }
    }

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial setup based on current viewport width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const testimonal = [
    {
      id: 1,
      image: Puma,

      name: "Puma Energy",
    },
    {
      id: 2,
      image: SteamShips,

      name: "Steamships Trading",
    },
    {
      id: 3,
      image: StartumGroup,

      name: "Stratum group",
    },
    {
      id: 4,
      image: paradisefoods,

      name: "Paradise Foods",
    },

    {
      id: 7,
      image: startmountain,

      name: "Star Mountain Plaza",
    },
    {
      id: 8,
      image: rounarepais,

      name: "Rouna Repairs",
    },
    {
      id: 9,
      image: coralseahotels,

      name: "Coral Sea Hotels",
    },
    {
      id: 10,
      image: spbrewery,

      name: "SP Brewery",
    },
    {
      id: 11,
      image: harmoney,

      name: "Harmony Gold",
    },
    {
      id: 12,
      image: speedcast,

      name: "Speedcast",
    },
    {
      id: 13,
      image: newcrest,

      name: "Newcrest Mining	",
    },
    {
      id: 14,
      image: borokomotors,

      name: "Boroko Motors",
    },
    {
      id: 15,
      image: ipigroup,

      name: "IPI Group",
    },
    {
      id: 15,
      image: australian,

      name: "Australian Federal Police",
    },
    {
      id: 15,
      image: odg,

      name: "ODG PNG Limited",
    },
 
    {
      id: 15,
      image: keynote,

      name: "Keynote Music",
    },
    {
      id: 15,
      image: spac,

      name: "South Pacific Air Conditioning",
    },
    {
      id: 15,
      image: turkai,

      name: "Trukai Industries",
    },
    {
      id: 15,
      image: goodman,

      name: "Goodman Fielder",
    },
    {
      id: 15,
      image: national,

      name: "National Department of Health",
    },
  ];
  // const slidesPerView = {
  //   base: 1, // default number of slides per view
  //   sm: 2, // for small screens (e.g., mobile devices)
  //   md: 3, // for medium screens (e.g., tablets)
  //   lg: 3, // for large screens (e.g., desktop)
  // };
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h3
                  className="title"
                  style={{  marginTop: "0em",fontSize:'43px' }}
                >
                  Our <span style={{color:'#FAD207'}}>Clients</span>
                </h3>
                <p className="text-muted">Our commitment to connecting top talent with exceptional opportunities has led us to collaborate with some of the most respected names in the business world.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Swiper
                className="pb-5"
                loop={true}
                slidesPerView={slidesPerView}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                spaceBetween={10}
                // breakpoints={{
                //   576: { slidesPerView: 1 }, // Show 1 slide per view on screens with width >= 576px (mobile view)
                //   768: { slidesPerView: 2 }, // Show 2 slides per view on screens with width >= 768px (tablet view)
                //   992: { slidesPerView: 3 }, // Show 3 slides per view on screens with width >= 992px (desktop view)
                // }}
                // breakpoints={{
                //   // Set custom breakpoints for different screen sizes
                //   576: { slidesPerView: slidesPerView.sm },
                //   768: { slidesPerView: slidesPerView.md },
                //   992: { slidesPerView: slidesPerView.lg },
                // }}
              >
                <div className="swiper-wrapper">
                  {(testimonal || []).map((testimonalDetails, key) => (
                    <SwiperSlide key={key}>
                      <Card className="testi-box">
                        <CardBody>
                          <div className="mb-4">
                            <CardImg
                              src={testimonalDetails.image}
                              alt=""
                              //  style={{ width: "15em" }}
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                          </div>

                          {/* <h5 className="mb-0">{testimonalDetails.name}</h5> */}
                          <h5 className="mb-0">
                            <span className="d-inline d-sm-block text-truncate">
                              {testimonalDetails.name}
                            </span>
                          </h5>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
                </div>
               <div className="swiper-pagination"></div>
              </Swiper>
            </Col>
          </Row>
        </Container>
        <style>
          {
            `
            .swiper-pagination {
              display: block;
            }
            @media only screen and (max-width: 991px) {
              .swiper-pagination {
                display: none;
              }
            }
            `
          }
        </style>
      </section>
    </React.Fragment>
  );
};

export default Testimonal;
