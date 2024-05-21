import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  Card,
  Input,
  Form,
  NavItem,
  CardBody,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
} from "reactstrap";

import classnames from "classnames";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { mainURL, subURL } from "../../../utils/URLs";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightSideContent = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [userId, setUserId] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enteredDOB, setEnteredDOB] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [enteredPhone, setEnteredPhone] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [adminData, setAdminData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

 
useEffect(()=>{
  getUserID()
},[])

async function getUserID() {
  try {
    const USERID = localStorage.getItem("userid");
    console.log('Retrieved user ID from local storage:', USERID);
    if (USERID !== null) {
      setUserId(USERID);
      console.log('Set user ID state:', USERID);
    }
  } catch (e) {
    console.log('Error retrieving user ID:', e);
  }
}

useEffect(() => {
  async function fetchUserId() {
    try {
      const res = await axios.get(`${subURL}/user_save_account/${userId}`);
      console.log('admin data', res.data);

      // Set both admin data and user profile
      setAdminData(res.data);
      setUserProfile(res.data.user_image);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  }

  // Ensure userId is not empty before fetching data
  if (userId) {
    fetchUserId();
  }
}, [userId]);

console.log('profie',userProfile)

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]);
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Check if password has at least 6 characters
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
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

    // const phoneNumberString = adminData?.contact_number?.toString();

    // if (phoneNumberString.length < 10) {
    //   alert("Phone number must be exactly 10 digits.");
    //   return;
    // }
    // if (enteredPhone && enteredPhone.length < 10) {
    //   alert("Phone number must be exactly 10 digits");
    //   return;
    // }

    async function storeData() {
      const formData = new FormData();

      formData.append("user_type_id", 1);
      formData.append("email_address", email || adminData?.email_address);
      formData.append("password", password || adminData?.password);
      formData.append("first_name", firstName ||adminData?.first_name);
      formData.append("last_name", lastName || adminData?.last_name);
      // formData.append("date_of_birth", enteredDOB || adminData?.date_of_birth);
      formData.append("date_of_birth", '2024-04-15');
      // formData.append("gender", selectedGender || adminData?.gender);
      formData.append("gender", "");
      formData.append("isactive", true);
      // formData.append(
      //   "contact_number",
      //   enteredPhone || adminData?.contact_number
      // );
      formData.append(
        "contact_number",
      ""
      );
      formData.append("email_notification_active", false);

      if (profilePhoto) {
        formData.append("user_image", profilePhoto);
      } else {
        const savedUserImage = adminData?.user_image;
        const userImageWithoutFiles =
          savedUserImage && savedUserImage.replace("/files", "");
        formData.append("user_image", userImageWithoutFiles || null);
      }

    
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.put(
          `${subURL}/user_save_account/${userId}/`,
          formData,
          {
            headers: headers,
          }
        );

        if (res.status === 200) {
          setModalTitle("Success");
          setSuccessMessage("Updated Successfully !");
          setShowModal(true);

          let existingValue = localStorage.getItem("username");

          if (existingValue !== null) {
            if (res.data.first_name !== undefined) {
              existingValue = res.data.first_name;
              localStorage.removeItem("username");
              localStorage.setItem("username", existingValue);
            }
          }
        } else {
          console.log("error");
        }
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (e) {
        console.log(e);

        setModalTitle("Failed !");
        setSuccessMessage("Oops!Something went wrong ,please try again");
        setShowModal(true);
      }
    }

    storeData();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEnteredDOB("");
    setEnteredPhone("");
    setSelectedGender("");
    setProfilePhoto("");
  }
  const getCheckedValue = (gender) => {
    if (selectedGender !== "") {
      return selectedGender === gender;
    }
    if (adminData && adminData.gender) {
      return adminData.gender === gender;
    }
    return false;
  };
  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="profile-content-page mt-4 mt-lg-0">
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-4"
            id="pills-tab"
            role="tablist"
          >
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabChange("1");
                }}
                type="button"
              >
                Overview
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabChange("2");
                }}
                type="button"
              >
                Settings
              </NavLink>
            </NavItem>
          </Nav>

          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div>
                  <h5 className="fs-18 fw-bold">About</h5>
                  <p className="text-muted mt-4">
                    <b>First Name : </b>
                    {adminData?.first_name}
                  </p>
                  <p className="text-muted">
                    <b>Last Name : </b>
                    {adminData?.last_name}
                  </p>
                  {/* <p className="text-muted">
                    <b>Date of Birth : </b>
                    {adminData.date_of_birth}
                  </p> */}
                </div>
              </TabPane>
              <TabPane tabId="2">
                <Form onSubmit={handleSubmit}>
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
                    <div className="text-center">
                      <div className="mb-4 profile-user">
                        <img
                       
                          src={
                            profilePhoto
                              ? URL.createObjectURL(profilePhoto)
                              : `${mainURL}${userProfile}`
                          }
                          className="rounded-circle img-thumbnail profile-img"
                          id="profile-img"
                          alt="img"
                        />
                        <div className="p-0 rounded-circle profile-photo-edit">
                          <Input
                            id="profile-img-file-input"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            className="profile-img-file-input"
                            onChange={handleProfilePhotoChange}
                          />
                          <Label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit avatar-xs"
                          >
                            <i className="uil uil-edit"></i>
                          </Label>
                        </div>
                      </div>
                    </div>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={firstName || adminData.first_name}
                            onChange={firstNameChangeHandler}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="lastName" className="form-label">
                            Last Name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={lastName || adminData.last_name}
                            onChange={lastNameChangeHandler}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Emails
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email || adminData.email_address}
                            onChange={handleEmailChange}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="password" className="form-label">
                            Password
                          </Label>
                          <InputGroup>
                            <Input
                              type={showPassword ? "text" : "password"}
                              className="form-control"
                              id="password"
                              value={password || adminData.password}
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
                      </Col>
                    </Row>
                  </div>

                  {/* <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                          Date of Birth
                        </Label>

                        <Input
                          type="date"
                          className="form-control"
                          id="DOB"
                          placeholder="Enter your DOB"
                          value={enteredDOB || adminData.date_of_birth}
                          onChange={handleDOBChange}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="phone" className="form-label">
                          Contact Number
                        </Label>
                        <Input
                          maxLength={10}
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Enter your phone no"
                          value={enteredPhone || adminData.contact_number}
                          onChange={handlePhonenoChange}
                        />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-3">
                        <label htmlFor="genderInput" className="form-label">
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
                              checked={getCheckedValue("male")}
                           
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
                              checked={getCheckedValue("female")}
                           
                              onChange={handleGenderChange}
                              className="form-check-input me-1"
                            />
                            Female
                          </label>
                        </div>
                      </div>
                    </Col>
                  </Row> */}

                  <div className="mt-4 text-end">
                    <Button className="btn btn-blue">Update</Button>
                  </div>
                </Form>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
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

export default RightSideContent;
