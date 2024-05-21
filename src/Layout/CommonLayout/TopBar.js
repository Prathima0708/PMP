import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

//import images
import flagUs from "../../assets/images/flags/us.jpg";
import flagSp from "../../assets/images/flags/spain.jpg";
import flagGr from "../../assets/images/flags/germany.jpg";
import flagIt from "../../assets/images/flags/italy.jpg";
import flagRu from "../../assets/images/flags/russia.jpg";
import { useEffect } from "react";

const TopBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  const iconTobar = [
    {
      id: 2,
      classname: "uil uil-facebook",
      link: "https://www.facebook.com/groups/266168910449287/",
    },
    {
      id: 3,
      classname: "uil uil-linkedin",
      link: "https://www.linkedin.com/in/pacific-manpower-85835b145/",
    },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setCurrentDateTime(
        new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZone: userTimeZone,
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <React.Fragment>
      <div
        // className="top-bar"
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 1000,
          backgroundColor: "black", color: "white" // Adjust the z-index as needed
        }}
        className="top-bar"
        id="navigation"
      //  style={{ zIndex: 1030, backgroundColor: "black", color: "white" }}
      >
        <Container
          fluid
          className="custom-container"
          style={{ color: "white" }}
        >
          <Row className="g-0 align-items-center" style={{ color: "white" }}>
            <Col md={7} style={{ color: "white" }}>
              <ul className="list-inline mb-0 text-center text-md-start">
                <li className="list-inline-item">
                  <p className="fs-13 mb-0">
                    {" "}
                    <i className="mdi mdi-map-marker"></i> Location:{" "}
                    <Link to="#" className="text-white">
                      Papua New Guinea
                    </Link>
                  </p>
                </li>
                <li className="list-inline-item" style={{ color: "white" }}>
                  <ul className="topbar-social-menu list-inline mb-0">
                    {(iconTobar || []).map((icon, key) => (
                      <li className="list-inline-item" key={key}>
                        {icon.link ? (
                          <a
                            href={icon.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ color: "white" }}
                          >
                            <i className={icon.classname}></i>
                          </a>
                        ) : (
                          <span
                            className="social-link"
                            style={{ color: "white" }}
                          >
                            <i className={icon.classname}></i>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </Col>
            {!isMobile && (
              <Col md={5}>
                <div style={{ marginLeft: "20em" }}>
                  <p className="fs-13 mb-0">
                    {/* {currentDateTime.toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      timeZone: "Pacific/Port_Moresby",
                    })} */}
                    {currentDateTime}
                  </p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
