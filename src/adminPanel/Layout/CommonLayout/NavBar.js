import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "reactstrap";

import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

import darkLogo from "../../../assets/newimages/logo-dark.jpeg";
import lightLogo from "../../../assets/newimages/logo-light.png";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { imageURL, mainURL, subURL } from "../../../utils/URLs";
var USERNAME, USERID;
const NavBar = (props) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [pages, setPages] = useState(false);

  const [job, setJob] = useState(false);
  const [addData, setAddData] = useState(false);
  const [company, setCompany] = useState(false);
  const [news, setNews] = useState(false);
  const [gallery, setGallery] = useState(false);

  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [userData, setUserData] = useState([]);
  const [userImage, setUserImage] = useState("");

  const [showModal, setShowModal] = useState(false);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);

  async function getUserName() {
    try {
      USERNAME = await localStorage.getItem("username");

      if (USERNAME !== null) {
        setUserName(USERNAME);
      }
    } catch (e) {
      console.log(e);
    }
  }
  getUserName();

  async function getUserID() {
    try {
      USERID = await localStorage.getItem("userid");

      if (USERID !== null) {
        setUserID(USERID);
      }
    } catch (e) {
      console.log(e);
    }
  }
  getUserID();

  useEffect(() => {
    async function fetechUserId() {
      const res = await axios.get(`${subURL}/user_save_account/${userID}`);

      setUserData(res.data);
      const imagePath = res.data.user_image;
const imageName = imagePath?.replace("/files/", "");
setUserImage(imageName);

     // setUserImage(res.data.user_image);
    }
    fetechUserId();
  }, [userID]);

  console.log(userImage,imageURL)

  useEffect(() => {
    setTimeout(() => {
      getUserName();
    }, 100);
  }, []);

  const logoutHandler = () => {
    (async () => {
      try {
        localStorage.removeItem("userid");
        await localStorage.removeItem("username");

        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    })();
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollNavigation, true);
  // });

  // function scrollNavigation() {
  //   var scrollup = window.pageYOffset;
  //   if (scrollup > 0) {
  //     setnavClass("nav-sticky");
  //   } else {
  //     setnavClass("");
  //   }
  // }

  //menu activation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    var matchingMenuItem = null;
    var ul = document.getElementById("navbarCollapse");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }

    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });
  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement.parentElement.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  const toggleJobs = () => {
    if (window.innerWidth <= 991) {
      setJob(!job);
    }
  };
  const togglePages = () => {
    if (window.innerWidth <= 991) {
      setPages(!pages);
    }
  };
  const toggleCompany = () => {
    if (window.innerWidth <= 991) {
      setCompany(!company);
    }
  };
  const toggleAddData = () => {
    if (window.innerWidth <= 991) {
      setAddData(!addData);
    }
  };

  const toggleNews = () => {
    if (window.innerWidth <= 991) {
      setNews(!news);
    }
  };
  const toggleGallery = () => {
    if (window.innerWidth <= 991) {
      setGallery(!gallery);
    }
  };
  return (
    <React.Fragment>
      {/* <nav
        style={{
          fontFamily: "Poppins",
          letterSpacing: "0.5px",
          color: "black",
        }}
        className={"navbar navbar-expand-lg fixed-top sticky p-0 " + navClass}
        id="navigation"
      > */}
       <nav
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 1000, // Adjust the z-index as needed
        }}
        className="navbar navbar-expand-lg p-0"
        id="navigation"
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/admin">
            <img src={darkLogo} height="51" alt="" className="logo-dark mt-2" />
            <img
              src={lightLogo}
              height="55"
              alt=""
              className="logo-light mt-2"
            />
          </Link>
          <div>
            {isOpen ? (
              <NavbarToggler
                className="me-3"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                <i className="mdi mdi-close"></i>
              </NavbarToggler>
            ) : (
              <NavbarToggler
                className="me-3"
                type="button"
                onClick={() => setIsOpen(true)}
              >
                <i className="mdi mdi-menu"></i>
              </NavbarToggler>
            )}
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mx-auto navbar-center">
              <NavItem>
                <Link className="nav-link" to="/admin">
                  Home
                </Link>
              </NavItem>

              <li className="nav-item dropdown dropdown-hover">
                <NavLink
                  to="#"
                  id="pagesdoropdown"
                  className="nav-link dropdown-toggle arrow-none"
                  onClick={togglePages}
                >
                  Pages
                  <div className="arrow-down"></div>
                </NavLink>
                <div
                  className={classname(
                    "dropdown-menu dropdown-menu-lg dropdown-menu-center",
                    { show: pages }
                  )}
                  aria-labelledby="pagesdoropdown"
                >
                  <Row>
                    <Col lg={6}>
                      <span className="dropdown-header">About Us</span>
                      <div>
                        <Link className="dropdown-item" to="/aboutpage">
                          Pacific Manpower
                        </Link>
                        <Link className="dropdown-item" to="/landownerpage">
                          LandOwner Joint Ventures
                        </Link>
                        <Link className="dropdown-item" to="/keystaffpage">
                          Key Staff
                        </Link>
                        <Link className="dropdown-item" to="/historypage">
                          History
                        </Link>
                        {/* <Link className="dropdown-item" to="/winimapage">
                          Winima PacificManpower
                        </Link>
                        <Link className="dropdown-item" to="/tkihistorypage">
                          TKI History
                        </Link>
                        <Link className="dropdown-item" to="/tkimanpowerpage">
                          TKI Manpower
                        </Link> */}
                      </div>
                    </Col>

                    <Col lg={6}>
                      <span className="dropdown-header">Core Service</span>
                      <div>
                        <Link className="dropdown-item" to="/manpowerpage">
                          Manpower
                        </Link>
                        <Link className="dropdown-item" to="/recruitmentpage">
                          Recruitment
                        </Link>
                        <Link className="dropdown-item" to="/passportpage">
                          Passport and Work Permits
                        </Link>
                        <Link className="dropdown-item" to="/payrollpage">
                          Payroll Services
                        </Link>
                        <Link className="dropdown-item" to="/technicalpage">
                          Technical Services
                        </Link>
                        {/* <Link className="dropdown-item" to="/ITservicespage">
                          IT Services
                        </Link> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </li>


              <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="jobdropdown"
                  role="button"
                  onClick={toggleJobs}
                >
                  Jobs <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: job,
                  })}
                  aria-labelledby="jobdropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/postjob">
                      Post a job
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/myjobs">
                      Edit Jobs
                    </Link>
                  </li>
                </ul>
              </NavItem>

              

              {/* <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="companydropdown"
                  role="button"
                  onClick={toggleCompany}
                >
                  Company <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: company,
                  })}
                  aria-labelledby="companydropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/addcompany">
                      Add Company details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mycompany">
                      My Company
                    </Link>
                  </li>
                </ul>
              </NavItem> */}

              <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="addData"
                  role="button"
                  onClick={toggleAddData}
                >
                  Add Data <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: addData,
                  })}
                  aria-labelledby="addData"
                >
                  <li>
                    <Link className="dropdown-item" to="/addskill">
                      Add Skills
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/addBusinessStream">
                      Add Business Stream
                    </Link>
                  </li>
                </ul>
              </NavItem>

              <NavItem>
                <Link className="nav-link" to="/candidateList">
                  Candidate List
                </Link>
              </NavItem>

              {/* <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="newsdropdown"
                  role="button"
                  onClick={toggleNews}
                >
                  News <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: news,
                  })}
                  aria-labelledby="newsdropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/addnews">
                      Add News
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mynews">
                      News List
                    </Link>
                  </li>
                </ul>
              </NavItem>

              <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="#"
                  id="gallerydropdown"
                  role="button"
                  onClick={toggleGallery}
                >
                  Gallery <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: gallery,
                  })}
                  aria-labelledby="gallerydropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/addgallery">
                      Upload images
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mygallery">
                      Events list
                    </Link>
                  </li>
                </ul>
              </NavItem> */}
            </ul>
          </Collapse>

          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Dropdown
              onClick={() => setUserProfile(!userProfile)}
              isOpen={userProfile}
              toggle={dropDownuserprofile}
              className="list-inline-item"
            >
              <DropdownToggle
                to="#"
                className="header-item"
                id="userdropdown"
                type="button"
                tag="a"
                aria-expanded="false"
              >
             { userImage&&  <img
                  src={`${imageURL}${userImage}`}
                  alt="mdo"
                  width="35"
                  height="35"
                  className="rounded-circle me-1"
                />}{" "}
                <span
                  className="d-none d-md-inline-block fw-medium"
                  style={{
                    maxWidth: "60px",

                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Hi,
                  {userName.charAt(0).toUpperCase() + userName.slice(1)}
                </span>
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-end"
                aria-labelledby="userdropdown"
                end
              >
                <li>
                  <Link className="dropdown-item" to="/addadmin">
                    Add Admin
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adminprofile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-item"
                    onClick={() => setShowModal(true)}
                  >
                    Logout
                  </a>
                </li>
              </DropdownMenu>
            </Dropdown>
          </ul>
        </Container>
      </nav>

      <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
        <ModalHeader toggle={() => setShowModal(false)}>Logout !</ModalHeader>
        <ModalBody>
          <h6>Are you sure you want to logout ?</h6>
        </ModalBody>
        <ModalFooter>
          <Button color="grey" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button color="primary" onClick={logoutHandler}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
