import axios from "axios";
import React, { useState } from "react";
import { subURL } from "../../utils/URLs";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { MetaTags } from "react-meta-tags";
import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/newimages/logo-dark.jpeg";
import signUpImage from "../../assets/images/auth/sign-up.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AddAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enteredDOB, setEnteredDOB] = useState(null);
  const [enteredPhone, setEnteredPhone] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const history = useHistory();

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

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
    const minimumAge = 18;

    const today = new Date();
    const enteredDate = new Date(enteredDOB);
    const age = today.getFullYear() - enteredDate.getFullYear();

    const monthDiff = today.getMonth() - enteredDate.getMonth();
    const hasPassedBirthday =
      monthDiff > 0 ||
      (monthDiff === 0 && today.getDate() >= enteredDate.getDate());

    if (age < minimumAge) {
      return "You must be at least 18 years old ";
    }

    return "";
  };
  async function getDefaultImage() {
    // Define the URL of your default image
    const defaultImageUrl = '../../assets/images/user.jpg';

    // Fetch the default image asynchronously
    const response = await fetch(defaultImageUrl);
    const blob = await response.blob();

    // Create a new File object with the default image
    return new File([blob], 'user.jpg');
}
  async function handleSubmit(event) {
    event.preventDefault();

    const dobValidationMessage = validateDOB(enteredDOB);

    if (dobValidationMessage) {
      alert(dobValidationMessage);
      return;
    }

    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!isValidPassword) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    async function storeData() {
      const formData = new FormData();
    //  const profilePhoto = document.getElementById("profile_photo").files[0]; // Get the selected profile photo
  
      formData.append("user_type_id", 1);
      formData.append("email_address", email);
      formData.append("password", password);
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("date_of_birth", "2024-05-07");
      formData.append("gender", "male");
      formData.append("isactive", true);
      formData.append("contact_number", 111);
      formData.append("email_notification_active", false);
      const emptyFile = new File([], 'empty-file.txt', { type: 'text/plain' });
      if (profilePhoto instanceof File) {
        formData.append("user_image", profilePhoto);
      } else {
      //  formData.append("user_image", null); // Or remove this line if null is not needed
      }
    //   if (profilePhoto) {
    //     formData.append("user_image", profilePhoto);
    // } else {
    //     // Append the default image to FormData
    //     const defaultImage = await getDefaultImage();
    //     formData.append("user_image", defaultImage, 'default_image.png');
    // }
      //formData.append("user_image", profilePhoto ? profilePhoto : null);

      try {
        // let headers = {
        //   "Content-Type": "multipart/form-data",
          
        // };
        let headers = {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json", // This header is commonly used for specifying the expected response format
          "Charset": "utf-8" // If you want to specify the charset, it's usually done separately
        };
        const res = await axios.post(`${subURL}/user_save_account/`, formData, {
          headers: headers,
        });

        if (res.status === 201) {
          setModalTitle("Success");
          setSuccessMessage("Added successfully!");
          setShowModal(true);
          setTimeout(() => {
            history.push("/admin");
          }, 2000);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setEnteredDOB("");
          setEnteredPhone("");
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
        setModalTitle("Failed !");
        setSuccessMessage("Oops !Something went wrong ,please try again");
        setShowModal(true);
      }
    }

    storeData();
  }
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <MetaTags>
              <title>Add Admin</title>
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
                                height="75"
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
                                <h5>Add Admin</h5>
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
                                      id="lastNameInput"
                                      placeholder="Enter your last name"
                                      value={lastName}
                                      onChange={lastNameChangeHandler}
                                    />
                                  </div>
                                </div>

                                <div>
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
                                {/* <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Date of Birth
                                  </label>
                                  <Input
                                    required
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
                                    required
                                    type="phone"
                                    className="form-control"
                                    id="phone"
                                    maxLength={10}
                                    placeholder="Enter your phone no"
                                    value={enteredPhone}
                                    onChange={handlePhonenoChange}
                                    pattern="[0-9]{10}"
                                  />
                                  <p
                                    style={{ fontSize: "10px", margin: "1em" }}
                                  >
                                    Phone number should be 10 digits[0-9]
                                  </p>
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
                                </div> */}

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
                                    accept=".png, .jpg, .jpeg"
                                    onChange={handleProfilePhotoChange}
                                  />
                                </div>
                                <div className="text-center">
                                  <div className="text-center">
                                    <button
                                      type="button"
                                      className="btn btn-secondary btn-hover me-2"
                                      onClick={() => history.push("/admin")}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      className="btn btn-white btn-hover"
                                    >
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </Form>
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

export default AddAdmin;
