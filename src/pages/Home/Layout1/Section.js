import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import homeImage2 from "../../../assets/images/pmwebslide2.jpg";
import homeImage3 from "../../../assets/images/pmwebslide4.jpg";
import homeImage4 from "../../../assets/images/pmwebslide3.jpg";

import { useEffect } from "react";
import { useState } from "react";

const Section = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobile1 = window.innerWidth <= 991;
  const slidesPerView = isMobile1 ? 1 : 1.68;
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  SwiperCore.use([Autoplay]);
  return (
    <React.Fragment>
      <div style={{ overflow: "hidden"}}>
        <Swiper
          className="homeslider"
          loop={true}
          slidesPerView={slidesPerView}
          // slidesPerView={1.68}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="home-slide-box text-center ">
                <div
                  className="image-container"
                  style={{ maxWidth: "100%", overflow: "hidden" }}
                >
                  <img
                    style={{ maxWidth: "100%" }}
                    src={homeImage2}
                    alt=""
                    className="img-fluid rounded-3 swiper-image"
                  />
                </div>

                <div className="bg-overlay"></div>
                <div className="home-slide-content ">
                  <h3
                    className="text-white title"
                    style={{
                      textAlign: "left",
                      marginLeft: "3em",
                      paddingLeft: "0.5em",

                      fontSize: "30px",
                      paddingBottom: "2em",
                    }}
                  >
                    <h1
                      className="display-5 mb-3"
                      style={{
                        color: "white",
                        fontSize: "53px",
                        fontWeight: "bolder",
                      }}
                    >
                      THE RIGHT SOLUTION FOR ALL YOUR <br />{" "}
                      <span
                        className="fw-bold"
                        style={{
                          //  marginLeft: "7em",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          fontSize: "53px",
                          fontWeight: "bolder",
                          backgroundImage: "linear-gradient(yellow, #FAD207)",
                        }}
                      >
                        STAFFING NEEDS
                      </span>
                    </h1>
                    <p style={{ fontSize: "20px" }}>
                      "Winner of BID Century International Quality ERA Award in
                      Geneva"
                    </p>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-slide-box text-center">
                <div
                  className="image-container"
                  style={{ maxWidth: "100%", overflow: "hidden" }}
                >
                  <img
                    style={{ maxWidth: "100%" }}
                    src={homeImage4}
                    alt=""
                    className="img-fluid rounded-3 swiper-image"
                  />
                </div>

                <div className="bg-overlay"></div>
                <div className="home-slide-content p-4">
                  <h3
                    className="text-white title"
                    style={{
                      textAlign: "left",
                      marginLeft: "3em",
                      paddingLeft: "0.5em",

                      paddingBottom: "2em",
                      fontSize: "30px",
                    }}
                  >
                    <h1
                      className="display-5 fw-bold mb-3 content"
                      style={{ color: "white", fontSize: "50px" }}
                    >
                      CONNECTING TALENT WITH <br />
                      <span
                        className=" fw-bold"
                        style={{
                          // marginLeft: "4.5em",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          fontSize: "53px",
                          fontWeight: "bolder",
                          backgroundImage: "linear-gradient(yellow, #FAD207)",
                        }}
                      >
                        OPPORTUNITY
                      </span>
                    </h1>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-slide-box text-center">
                <div
                  className="image-container"
                  style={{ maxWidth: "100%", overflow: "hidden" }}
                >
                  <img
                    style={{ maxWidth: "100%" }}
                    src={homeImage3}
                    alt=""
                    className="img-fluid rounded-3 swiper-image"
                  />
                </div>

                <div className="bg-overlay"></div>
                <div className="home-slide-content p-4">
                  <h3
                    className="text-white title"
                    style={{
                      textAlign: "left",

                      marginLeft: "3em",
                      paddingLeft: "0.5em",
                      //    fontFamily:'Acme',
                      paddingBottom: "2em",
                      fontSize: "30px",
                    }}
                  >
                    <h1
                      className="display-5 fw-bold mb-3"
                      style={{ color: "white", fontSize: "50px" }}
                    >
                      NAVIGATE YOUR WAY TO A <br />
                      <span
                        className=" fw-bold"
                        style={{
                          // marginLeft: "3.2em",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          fontSize: "53px",
                          fontWeight: "bolder",
                          backgroundImage: "linear-gradient(yellow, #FAD207)",
                        }}
                      >
                        FULFILLING CAREER
                      </span>
                    </h1>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </div>


          <style>
  {`
    @media only screen and (max-width: 991px) {
      .swiper-slide {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        top: 15%;
      }
      .homeslider {
        width: 100%;
      }
      .home-slide-box {
        width: 100%;
        max-width: none;
      }
      .swiper-image {
        width: 100%;
        max-width: 100%;
      }
      .swiper-wrapper {
        padding-bottom: 0; /* Adjust as needed */
      }
      .home-slide-content {
        position: absolute; /* Position the content absolutely */
        bottom: 0; /* Align it to the bottom */
        left: 0; /* Align it to the left */
        top: 50px; /* Adjust as needed for smooth scrolling */
        padding: 1em;
        width: 100%;
        text-align: left; /* Align text to the left */
      }
      .home-slide-content h1,
      .home-slide-content h3,
      .home-slide-content span {
        font-size: 15px !important;
      }
      .home-slide-content p {
        display: none;
      }
    }
  `}
</style>






        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Section;
