import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import homeImage2 from "../../../../assets/images/bg.png";
import homeImage3 from "../../../../assets/images/abt5.jpg";
import homeImage4 from "../../../../assets/images/abt1.jpg";

import NavBar from "../../../Layout/CommonLayout/NavBar";
import TopBar from "../../../Layout/CommonLayout/TopBar";

import { useState } from "react";

import { subURL } from "../../../../utils/URLs";

import { Link } from "react-router-dom";
import backgrounImage from "../../../../assets/images/empowerbg.jpg"
const Section = () => {
  SwiperCore.use([Autoplay]);
  const [jobTypeOptions, setJobTypeOptions] = useState([]);

  const [jobs, setJobs] = useState([]);

  const [countries, setCountries] = useState([]);

  const [showViewMoreBtn, setShowViewMore] = useState(false);

  useEffect(() => {
    const fetchJobTypeOptions = async () => {
      const response = await fetch(`${subURL}/job_type/`);
      const data = await response.json();

      setJobTypeOptions(data);
    };

    fetchJobTypeOptions();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const options = data.map((country) => ({
        label: country.name,
        value: country.alpha2Code,
      }));

      setCountries(options);
    };
    fetchCountries();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

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
  return (
    <>
      <TopBar />
      <NavBar />
      {/* <section className="bg-home3" id="home">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="mb-4 pb-3 me-lg-5">
                <h1 className="display-5 fw-semibold mb-3">
                  Welcome to our job portal website!
                </h1>
                <p className="fs-18 text-muted mb-0">
                  As an admin, you'll have access to powerful tools and features
                  to manage job postings, track applications, and connect with
                  top talent. Let's work together to build a better workforce
                  for the future!
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <div className="mt-5 mt-lg-0 ms-xl-5">
                <div className="quote-icon">
                  <i className="mdi mdi-format-quote-open icon"></i>
                  <i className="mdi mdi-format-quote-open icon-2 text-primary"></i>
                </div>
                <Swiper
                  className="homeslider"
                  loop={true}
                  slidesPerView={1.68}
                  spaceBetween={20}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="home-slide-box text-center">
                        <img
                          src={homeImage2}
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="bg-overlay"></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="home-slide-box text-center">
                        <img
                          src={homeImage3}
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="bg-overlay"></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="home-slide-box text-center">
                        <img
                          src={homeImage4}
                          alt=""
                          className="img-fluid rounded-3"
                        />
                        <div className="bg-overlay"></div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="bg-home3" id="home" style={{ position: "relative",
          overflow: "hidden",
         backgroundImage: `url(${backgrounImage})`,}}>
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="mb-4 pb-3 me-lg-5">
                <h6 className="sub-title">
                  Connecting talent with opportunity
                </h6>
                <h1 className="display-5 fw-bold mb-3" style={{color:'#100158'}}>
                  Welcome to Admin Dashboard!
                </h1>
                <p
                  className="lead  mb-0"
                  style={{ textAlign: "justify",color:'black',fontWeight:'400' }}
                >
                  As an admin, you'll have access to powerful tools and features
                  to manage job postings, track applications, and connect with
                  top talent. Let's work together to build a better workforce
                  for the future!
                </p>
              </div>

              <div className="box-container text-black ">
                <div className="box">Manpower</div>
                <div className="box">Recruitment</div>
                <div className="box">Work Permits</div>
                <div className="box">Passports</div>
              </div>

              <style>
                {`
    .box-container {
      display: flex;
      flex-wrap: wrap; /* Enable wrapping of boxes */
      justify-content: space-between; /* Distribute boxes evenly across the container */
      margin-left: -5px; /* Add negative margin to compensate for box spacing */
      margin-right: 45px;
      
    }
    
    .box {
      flex: 0 0 calc(25% - 10px); /* Each box occupies 25% of the container width with 10px spacing */
      height: 35px;
      border: 1px solid black;
      margin-bottom: 10px; /* Add spacing between boxes */
      text-align: center;
      padding-top: 5px;
      transition: background-color 0.1s ease, transform 0.3s ease; 
     
    }
    .box:hover {
      background-color: white; 
     cursor:pointer;
     font-weight:bold;
      transform: translateY(-5px);
    }

    @media (max-width: 600px) {
      /* Media query for screens with a maximum width of 600px (typical mobile devices) */
      .box {
        flex-basis: 100%; 
        margin-left: 0; /* Reset the left margin for mobile devices */
    margin-right: 0;/* Each box occupies 100% of the container width */
      }
    }
    `}
              </style>
            </Col>

            {!isMobile && (
              <Col lg={5}>
                <div className="mt-5 mt-lg-0 ms-xl-5">
                  <Swiper
                    className="homeslider"
                    loop={true}
                    slidesPerView={1.68}
                    spaceBetween={20}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide>
                        <div className="home-slide-box text-center ">
                          <div className="image-container">
                            <img
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
                                marginLeft: "1em",
                                paddingLeft: "0.5em",
                                borderLeft: "3px solid white",
                              }}
                            >
                              "Winner of BID Century International Quality ERA
                              Award in Geneva"
                            </h3>
                            {/* <h6 className="text-white">- MichaeL Drake</h6> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="home-slide-box text-center">
                          <div className="image-container">
                            <img
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
                                marginRight: "2em",
                                paddingLeft: "0.5em",
                                borderLeft: "3px solid white",
                              }}
                            >
                              "Connecting talent with opportunity."
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="home-slide-box text-center">
                          <div className="image-container">
                            <img
                              src={homeImage4}
                              alt=""
                              className="img-fluid rounded-3 swiper-image"
                            />
                          </div>
                          {/* <img
                            src={homeImage4}
                            alt=""
                            className="img-fluid rounded-3 swiper-image"
                          /> */}
                          <div className="bg-overlay"></div>
                          <div className="home-slide-content p-4">
                            <h3
                              className="text-white title"
                              style={{
                                textAlign: "left",
                                marginRight: "2em",
                                paddingLeft: "0.5em",
                                borderLeft: "3px solid white",
                              }}
                            >
                              "Navigate your way to a fulfilling career."
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <style>
                    {`
                        .swiper-image {
                          width: 100%;
                          height: auto;
                          object-fit: cover;
                        }
                        .image-container {
                          height: 300px; /* Set your desired height here */
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        }
                        
                        `}
                  </style>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      <Row className="justify-content-center">
        <Col lg={8} style={{ fontFamily: "Poppins" }}>
          {jobs.map((freelancerJobdetails, key) => (
            <div
              key={key}
              className={
                freelancerJobdetails.addclassNameBookmark === true
                  ? "job-box bookmark-post card mt-4"
                  : "job-box card mt-4"
              }
            >
              <div className="bookmark-label text-center">
                <Link to="#" className="text-white align-middle">
                  <i className="mdi mdi-star"></i>
                </Link>
              </div>
              <div className="p-4">
                <Row className="align-items-center">
                  <Col md={2}>
                    <div className="text-center mb-4 mb-md-0">
                      <Link to="/companydetails">
                        <img
                          src={freelancerJobdetails.companyImg}
                          alt=""
                          className="img-fluid rounded-3"
                        />
                      </Link>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="mb-2 mb-md-0">
                      <h5 className="fs-18 mb-1">
                        <Link to="/jobdetails" className="text-dark">
                          {freelancerJobdetails.job_title}
                        </Link>
                      </h5>
                      <p className="text-muted fs-14 mb-0">
                        {freelancerJobdetails.company_id.company_name}
                      </p>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="d-flex mb-2">
                      <div className="flex-shrink-0">
                        <i className="mdi mdi-map-marker text-primary me-1"></i>
                      </div>
                      <p className="text-muted mb-0">
                        {freelancerJobdetails.job_location_id.country}
                      </p>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div>
                      <p className="text-muted mb-2">
                        <span className="text-primary">$</span>
                        {freelancerJobdetails.salary}
                      </p>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div>
                      <span className={"badge bg-soft-danger fs-13 mt-1 mx-1"}>
                        {freelancerJobdetails.job_type_id.job_type
                          .charAt(0)
                          .toUpperCase() +
                          freelancerJobdetails.job_type_id.job_type.slice(1)}
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-3 bg-light">
                <Row>
                  <Col md={4}>
                    <div>
                      <p className="text-muted mb-0">
                        <span className="text-dark">Experience :</span>{" "}
                        {freelancerJobdetails.experince_type_id?.experince_type}
                      </p>
                    </div>
                  </Col>

                  <Col lg={6} md={5}>
                    {}
                    <div>
                      <p className="text-muted mb-0">
                        <span className="text-dark">
                          {freelancerJobdetails.job_description === null
                            ? ""
                            : "Job Description :"}
                        </span>
                        {freelancerJobdetails.job_description}{" "}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </Col>
        {showViewMoreBtn && (
          <div className="text-center mt-4 pt-2">
            <Link to="/viewmoreadmin" className="btn btn-primary">
              View More <i className="uil uil-arrow-right"></i>
            </Link>
          </div>
        )}
      </Row>
    </>
  );
};

export default Section;
