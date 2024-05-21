import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Col,
  Input,
  Row,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import MetaTags from "react-meta-tags";

import { useHistory } from "react-router-dom";

import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";

import signUpImage from "../../assets/images/auth/sign-up.png";
import { Form } from "react-bootstrap";
import axios from "axios";
import { subURL } from "../../utils/URLs";

const SignUp = () => {
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enteredDOB, setEnteredDOB] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [enteredPhone, setEnteredPhone] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const history = useHistory();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function firstNameChangeHandler(event) {
    setFirstName(event.target.value);
  }
  function lastNameChangeHandler(event) {
    setLastName(event.target.value);
  }
  const handleDOBChange = (event) => {
    setEnteredDOB(event.target.value);
  };
  function handlePhonenoChange(event) {
    setEnteredPhone(event.target.value);
  }
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]);
  };

  const validateDOB = (enteredDOB) => {
    // Minimum age requirement
    const minimumAge = 18;

    // Calculate the age based on the entered DOB
    const today = new Date();
    const enteredDate = new Date(enteredDOB);
    const age = today.getFullYear() - enteredDate.getFullYear();

    // Calculate the difference in months to account for cases where the birthday hasn't passed yet this year
    const monthDiff = today.getMonth() - enteredDate.getMonth();
    const hasPassedBirthday =
      monthDiff > 0 ||
      (monthDiff === 0 && today.getDate() >= enteredDate.getDate());

    // Compare the calculated age and birthday verification with the minimum age requirement
    if (age < minimumAge) {
      return "You must be at least 18 years old to apply for a job.";
    }

    // DOB is valid
    return "";
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const dobValidationMessage = validateDOB(enteredDOB);

    if (dobValidationMessage) {
      alert(dobValidationMessage);
      return;
    }

    async function storeData() {
      const formData = new FormData();
      formData.append("user_type_id", 2);
      formData.append("email_address", email);
      formData.append("password", password);
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("date_of_birth", enteredDOB);
      formData.append("gender", selectedGender);
      formData.append("isactive", true);
      formData.append("contact_number", enteredPhone);
      formData.append("email_notification_active", false);
      formData.append("user_image", profilePhoto);

      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/user_save_account/`, formData, {
          headers: headers,
        });

        if (res.status === 201) {
          setModalTitle("Success");
          setSuccessMessage("Registered Successfully !");
          setShowModal(true);
          setTimeout(() => {
            history.push("/");
          }, 1500);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
        if (e.response.status === 400) {
          setModalTitle("Failed !");
          setSuccessMessage("Email already Exists!");
          setShowModal(true);
        } else if (e.response.status === 403) {
          setModalTitle("Invalid format !");
          setSuccessMessage("Please upload valid profile photo!");
          setShowModal(true);
        } else {
          setModalTitle("Failed !");
          setSuccessMessage("Oops! Something went wrong, please try again");
          setShowModal(true);
        }
      }
    }

    storeData();

    // Reset form state variables
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEnteredDOB("");
    setEnteredPhone("");
    setSelectedGender("");
    setProfilePhoto(null);
   
  }

 
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <MetaTags>
              <title>Sign Up</title>
            </MetaTags>
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="align-items-center">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signUpImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 text-white">
                            <div className="w-100">
                              <div className="text-center">
                                <h5>Let's Get Started</h5>
                                <p className="text-white-70">
                                  Sign Up and get access to all the features of
                                  PacificManpower
                                </p>
                              </div>
                              <Form
                                action="/"
                                className="auth-form"
                                onSubmit={handleSubmit}
                              >
                                <div className="d-flex">
                                  <div className="mb-3 me-3">
                                    <label
                                      htmlFor="firstNameInput"
                                      className="form-label"
                                    >
                                      First Name
                                    </label>
                                    <input
                                      pattern="[A-Za-z]+"
                                      type="text"
                                      className="form-control"
                                      required
                                      id="firstNameInput"
                                      placeholder="Enter your first name"
                                      value={firstName}
                                      onChange={firstNameChangeHandler}
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="lastNameInput"
                                      className="form-label"
                                    >
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      required
                                      id="lastNameInput"
                                      pattern="[A-Za-z]+"
                                      placeholder="Enter your last name"
                                      value={lastName}
                                      onChange={lastNameChangeHandler}
                                    />
                                  </div>
                                </div>

                                <div className="d-flex">
                                  <div className="mb-3 me-3">
                                    <label
                                      htmlFor="passwordInput"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      required
                                      id="emailInput"
                                      placeholder="Enter your email"
                                      value={email}
                                      onChange={handleEmailChange}
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="emailInput"
                                      className="form-label"
                                    >
                                      Password
                                    </label>
                                    <Input
                                      type="password"
                                      className="form-control"
                                      id="passwordInput"
                                      placeholder="Enter your password"
                                      value={password}
                                      onChange={handlePasswordChange}
                                    />
                                  </div>
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Date of Birth
                                  </label>
                                  <Input
                                    type="date"
                                    className="form-control"
                                    id="DOB"
                                    placeholder="Enter your DOB"
                                    value={enteredDOB}
                                    onChange={handleDOBChange}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Contact Number
                                  </label>
                                  <Input
                                    maxLength={10}
                                    type="phone"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter your phone no"
                                    value={enteredPhone}
                                    onChange={handlePhonenoChange}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Upload profile photo
                                  </label>
                                  <Input
                                    type="file"
                                    id="profile_photo"
                                    // accept="image/*"
                                    onChange={handleProfilePhotoChange}
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="genderInput"
                                    className="form-label"
                                  >
                                    Gender
                                  </label>
                                  <div className="d-flex align-items-center">
                                    <label
                                      htmlFor="maleInput"
                                      className="form-check-label me-3"
                                    >
                                      <input
                                        type="radio"
                                        id="maleInput"
                                        value="male"
                                        checked={selectedGender === "male"}
                                        onChange={handleGenderChange}
                                        className="form-check-input me-1"
                                      />
                                      Male
                                    </label>

                                    <label
                                      htmlFor="femaleInput"
                                      className="form-check-label"
                                    >
                                      <input
                                        type="radio"
                                        id="femaleInput"
                                        value="female"
                                        checked={selectedGender === "female"}
                                        onChange={handleGenderChange}
                                        className="form-check-input me-1"
                                      />
                                      Female
                                    </label>
                                  </div>
                                </div>

                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Sign Up
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Already a member ?{" "}
                                  <Link
                                    to="/"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign In{" "}
                                  </Link>
                                </p>
                              </div>
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
        <ModalHeader toggle={() => setShowModal(false)}>
          {modalTitle}
        </ModalHeader>
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

export default SignUp;
