import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Navbar,
  Nav,
} from "reactstrap";

import { Link, useHistory, withRouter } from "react-router-dom";
import classname from "classnames";

import darkLogo from "../../assets/newimages/logo-dark.jpeg";
import lightLogo from "../../assets/newimages/logo-light.png";

function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}

const NavBar = (props) => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [aboutUs, setAboutUs] = useState(false);
  const [coreService, setCoreService] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [showSuboptions, setShowSuboptions] = useState(false);

  const handleMouseEnter = () => {
    setShowSuboptions(true);
  };

  const handleMouseLeave = () => {
    setShowSuboptions(false);
  };

  //scroll navbar
  //const [navClass, setnavClass] = useState(false);
  const [navClass, setNavClass] = useState('');
  const [isLandownerActive, setIsLandownerActive] = useState(false);
  const handleSuboptionClick = () => {
    setIsLandownerActive(true);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollNavigation, true);
  // });



  // function scrollNavigation() {
  //   const scrollup = window.scrollY;
  //  // var scrollup = window.pageYOffset;
  //   if (scrollup > 0) {
  //     setnavClass("nav-sticky");
  //   } else {
  //     setnavClass("");
  //   }
  // }



  // useEffect(() => {
  //   const handleScroll = debounce(() => {
  //     const scrollY = window.pageYOffset;
  //     if (scrollY > 0) {
  //       setNavClass('nav-sticky');
  //     } else {
  //       setNavClass('');
  //     }
  //   }, 100); // Adjust the debounce time as needed

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
  const logoutHandler = () => {
    (async () => {
      try {
        await localStorage.removeItem("userid");
        await localStorage.removeItem("username");

        history.push("/");
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const toggleAboutUs = () => {
    if (window.innerWidth <= 991) {
      setAboutUs(!aboutUs);
      //setIsOpen(false)

    }
  };
  const toggleCoreService = () => {
    if (window.innerWidth <= 991) {
      setCoreService(!coreService);


    }
  };

  const handleNavItemClick = (event) => {
    if (window.innerWidth <= 991) {
      if (event.target.id !== "jobsdropdown" &&event.target.id !== "productdropdown" ) {
        setIsOpen(false);
      }
     
    }
  };
  const isActiveLink = (path) => {
    const currentPath = window.location.hash.substr(1);
    return currentPath === path;
  };
  const handleAboutUsMouseEnter = () => {
    setShowSuboptions(false);
  };
  const handleAboutUsMouseLeave = () => {
    setShowSuboptions(true);
  };
  const handleMouseEnterKeyStaff = () => {
    setShowSuboptions(false);
  };

  const handleMouseLeaveKeyStaff = () => {
    setShowSuboptions(false);
  };

  return (
    <React.Fragment>
      {/* <nav
        className={"navbar navbar-expand-lg fixed-top sticky p-0  " + navClass}
        id="navigation"
        //style={{marginLeft:'5em',marginRight:'5em',width:'90em'}}
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
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={darkLogo} height="51" alt="" className="logo-dark mt-2" />
            <img src={lightLogo} height="55" alt="" className="logo-light mt-2" />
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
                <Link className="nav-link" to="/" onClick={handleNavItemClick}>
                  Home
                </Link>
              </NavItem>

              <NavItem
                className="dropdown dropdown-hover"
                onMouseLeave={handleMouseLeave}

                onClick={handleNavItemClick}
              >
                <NavLink
                  to="/#"
                  id="jobsdropdown"
                  role="button"
                  onMouseEnter={handleAboutUsMouseEnter}
                  onMouseLeave={handleAboutUsMouseLeave}
                  onClick={toggleAboutUs}
                >
                  About Us <div className="arrow-down"></div>
                </NavLink>
                <ul

                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: aboutUs,
                  })}
                  aria-labelledby="jobsdropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/aboutus"
                      onMouseEnter={handleMouseEnterKeyStaff}
                      onMouseLeave={handleMouseLeaveKeyStaff}
                    >
                      Pacific Manpower
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/history">
                      History
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/coreservices">
                      Core Services
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/keystaff"
                      onMouseEnter={handleMouseEnterKeyStaff}
                      onMouseLeave={handleMouseLeaveKeyStaff}
                    >
                   Executive Management Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/subsidiarycompanies"
                      onMouseEnter={handleMouseEnterKeyStaff}
                      onMouseLeave={handleMouseLeaveKeyStaff}
                    >
                  Subsidiary Companies
                    </Link>
                  </li>


                  <li>
                    <div
                      style={{ margin: "0em" }}
                      //className="dropdown-item"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link to="/landowner" className="dropdown-item">
                        Land Owners Joint Venture
                      </Link>
                      {/* {showSuboptions && (
                        <ul
                          className="sub-options"
                          style={{ listStyle: "none" }}
                        >
                          <li>
                            <Link className="dropdown-item" to="/winima">
                              Winima Pacific Manpower
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/tkimanpower">
                              TKI Manpower
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/tkihistory">
                              TKI History
                            </Link>
                          </li>
                        </ul>
                      )} */}
                    </div>
                  </li>
                </ul>
              </NavItem>

              {/* <NavItem>
                <Link
                  className="nav-link"
                  to="/recruitmentservice"
                  onClick={handleNavItemClick}
                >
                  Recruitment Service
                </Link>
              </NavItem> */}

              <NavItem
                className="dropdown dropdown-hover"
                onClick={handleNavItemClick}
              >
                <NavLink
                  to="/#"
                  id="productdropdown"
                  role="button"
                  onClick={toggleCoreService}
                >
                  Core Service <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: coreService,
                  })}
                  aria-labelledby="productdropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/contractHire">
                      Contract Hire
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/recruitment">
                      Recruitment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/passport">
                      Passport and Work permits
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/payroll">
                      Payroll Services
                    </Link>
                  </li>
                  <Link className="dropdown-item" to="/technical">
                    Technical Services
                  </Link>
                  {/* <li>
                    <Link className="dropdown-item" to="/ITservices">
                      IT services
                    </Link>
                  </li> */}
                </ul>
              </NavItem>

              <NavItem>
                <Link
                  className="nav-link"
                  to="/joblist"
                  onClick={handleNavItemClick}
                >
                  Job Seekers
                </Link>
              </NavItem>

              {/* <NavItem>
                <Link
                  className="nav-link"
                  to="/gallery"
                  onClick={handleNavItemClick}
                >
                  Gallery
                </Link>
              </NavItem> */}

              <NavItem>
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={handleNavItemClick}
                >
                  Contact
                </Link>
              </NavItem>

              {/* <NavItem>
                <Link
                  className="nav-link"
                  to="/news"
                  onClick={handleNavItemClick}
                >
                  News
                </Link>
              </NavItem> */}
            </ul>
          </Collapse>
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
