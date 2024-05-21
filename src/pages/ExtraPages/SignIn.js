import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import MetaTags from "react-meta-tags";

//Import Image
import lightLogo from "../../assets/newimages/logo-light.png";
import darkLogo from "../../assets/newimages/logo-dark.jpeg";
import bcrypt from "bcryptjs";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { subURL } from "../../utils/URLs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const SignIn = () => {
  const setColor = (color) => {
    document.getElementById("app-style").href =
      "assets/css/app" + color + ".min.css";
    document.getElementById("bootstrap-style").href =
      "assets/css/bootstrap" + color + ".min.css";
  };
  useEffect(() => {
    document.body.setAttribute("data-layout-mode", "light");
    setColor("-blue");
  }, []);
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const history = useHistory();
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function firstNameChangeHandler(event) {
    setFirstName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    event.preventDefault();

    async function storeData() {
      const formData = {
        email_address: firstName,
        password: password,
      };

      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const res = await axios.post(`${subURL}/user_login/`, formData, {
          headers: headers,
        });

        if (res.status === 200) {
          if (res.data.user_type_id === 1) {
            history.push("/admin");

            try {
              localStorage.setItem("userid", res.data.userid);
            } catch (e) {
              console.log(e);
            }
            try {
              localStorage.setItem("username", res.data.username);
            } catch (e) {
              console.log(e);
            }
          }
        } else {
          console.log("error");
        }
      } catch (error) {
        if (error.response?.status === 404) {
          setSuccessMessage("User does not exists !Please Register");
          setShowModal(true);
        } else if (error.response?.status === 401) {
          setSuccessMessage("Invalid Username or password");
          setShowModal(true);
        } else {
          setSuccessMessage("Oops!Something went wrong,please try again");
          setShowModal(true);
        }
      }
    }

    storeData();
    // }

    setFirstName("");

    setPassword("");
  }

  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <MetaTags>
              <title>Sign In</title>
            </MetaTags>
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="g-0">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt="img"
                                className="logo-light"
                              />
                              <img
                                src={darkLogo}
                                height="71"
                                alt="img"
                                className="logo-dark"
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signInImage}
                                alt="img"
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>Admin Login !!</h5>
                                <p className="text-white-70">
                                  Sign in to continue to PacificManpower.
                                </p>
                              </div>
                              <Form
                                className="auth-form"
                                onSubmit={handleSubmit}
                              >
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    id="usernameInput"
                                    placeholder="Enter your username"
                                    required
                                    value={firstName}
                                    onChange={firstNameChangeHandler}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Password
                                  </label>

                                  <InputGroup>
                                    <Input
                                      required
                                      type={showPassword ? "text" : "password"}
                                      minLength={6}
                                      className="form-control"
                                      id="passwordInput"
                                      placeholder="Enter your password"
                                      value={password}
                                      onChange={handlePasswordChange}
                                    />
                                    <InputGroupText
                                      onClick={togglePasswordVisibility}
                                      style={{ cursor: "pointer" }}
                                    >
                                      <FontAwesomeIcon
                                        icon={showPassword ? faEye : faEyeSlash}
                                      />
                                    </InputGroupText>
                                  </InputGroup>
                                </div>

                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Sign In
                                  </button>
                                </div>
                              </Form>
                              {/* <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Don't have an account ?{" "}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign Up{" "}
                                  </Link>
                                </p>
                              </div> */}
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
        <ModalHeader toggle={() => setShowModal(false)}>Failed !</ModalHeader>
        <ModalBody>{successMessage}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default SignIn;
