import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  Input,
  Label,
  Card,
  CardBody,
  Col,
  Button,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { subURL } from "../../../utils/URLs";
import axios from "axios";
import Select from "react-select";
var USERID;
const RightSideContent = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [expType, setExpType] = useState("");
  const [experience, setExperience] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [filename, setFilename] = useState("");
  const [expectedPay, setExpectedPay] = useState(0);
  const [noticePeriod, setNoticePeriod] = useState("");
  const [city, setCity] = useState("");
  const [applycountries, setApplyCountries] = useState([]);
  const [selectedApplyCountry, setSelectedApplyCountry] = useState(null);
  const [sendSelectedApplyCountry, setSendSelectedApplyCountry] =
    useState(null);
    const [enquiry, setEnquiry] = useState("");

  const [userId, setUserId] = useState();

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const [jobId, setJobId] = useState("");
  async function getUserID() {
    try {
      USERID = await localStorage.getItem("userid");

      if (USERID !== null) {
        setUserId(USERID);
      }
    } catch (e) {
      console.log(e);
    }
  }
  getUserID();
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const options = data.map((country) => ({
        label: country.name,
        value: country.alpha2Code,
      }));

      setApplyCountries(options);
    };
    fetchCountries();
  }, []);
  useEffect(() => {
    const fetchAppliedStatus = async () => {
      const res = await axios.get(`${subURL}/post_job/${id}/`);

      setJobDetails(res.data);
    };

    fetchAppliedStatus();
  }, [id]);

  useEffect(() => {
    const fetchSkillSetOptions = async () => {
      const response = await fetch(`${subURL}/exptype/`);
      const data = await response.json();

      setExperience(data);
    };

    fetchSkillSetOptions();
  }, []);

  function passJobID(id) {
    setModal(true);

    setJobId(id);
  }

  const validatePhone = (phone) => {
    return phone.length === 10; // Check if the phone number has exactly 10 digits
  };

  const handleChangePhone = (e) => {
    const newPhone = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    setEnteredPhone(newPhone);
    setIsValidPhone(validatePhone(newPhone));
  };


  
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChangeApply = (selectedOption) => {
    const countryName = selectedOption ? selectedOption.label : "";
    setSelectedApplyCountry(selectedOption);
    setSendSelectedApplyCountry(countryName);
  };

  async function applyforJob(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("job_post_id", jobId);
    formData.append("applicant_name", name);
    formData.append("applicant_email", email);
    formData.append("phone_num", enteredPhone);
    formData.append("uploaded_cv", filename);
    formData.append("notice_period", noticePeriod);
    formData.append("expected_pay", expectedPay);
    formData.append("experience", expType);
    formData.append("city", city);
    formData.append("country", sendSelectedApplyCountry);
    formData.append("enquiry", enquiry);

    formData.append("status", "Pending");

    try {
      let headers = {
        "Content-Type": "multipart/form-data",
      };
      const res = await axios.post(`${subURL}/applyjob/`, formData, {
        headers: headers,
      });

      if (res.status === 201) {
        setModalTitle("Success");
        setSuccessMessage("Applied for job Successfully !");
        setShowModal(true);
        setModal(false);
        setName("");
        setEmail("");
        setEnteredPhone("");
        setExpType("");
        setExpectedPay("");
        setFilename("");
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 404) {
        setModalTitle("Failed !");
        setSuccessMessage("Please add your profile details first!");
        setShowModal(true);
      } else {
        setModalTitle("Failed !");
        setSuccessMessage("Oops !Something went wrong ,please try again");
        setShowModal(true);
      }
    }
   
  }

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  return (
    <React.Fragment>
      <div className="side-bar ms-lg-4">
        <Card className="job-overview">
          <CardBody className="p-4">
            <h6 className="fs-17">Job Overview</h6>
            <ul className="list-unstyled mt-4 mb-0">
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-user icon bg-soft-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Job Title</h6>
                    <p className="text-muted mb-0">{jobDetails?.job_title}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-star-half-alt icon bg-soft-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Experience</h6>
                    <p className="text-muted mb-0">
                      {" "}
                      {jobDetails?.experince_type_id?.experince_type?jobDetails?.experince_type_id?.experince_type : "Not Applicable" }
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-soft-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Location</h6>
                    <p className="text-muted mb-0">
                    {jobDetails?.job_location_id?.country ? jobDetails?.job_location_id?.country :"Not Applicable"}
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-history icon bg-soft-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Date Posted</h6>
                    <p className="text-muted mb-0">
                      {jobDetails?.createdDate?.substring(0, 10)}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <Card>
            <CardBody>
              <Col lg={8} md={3} mt={5} >
                <div className="text-start">
                  <button
                    onClick={() => passJobID(jobDetails.id)}
                    className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2"
                  >
                    Apply Now <i className="mdi mdi-chevron-double-right"></i>
                  </button>
                  <style>
                  {`
      .btn-gradient-primary {
        background-image: linear-gradient(to left,  #0066CC,#38B0F9);
  color: white;
  border: none;
  transition: transform 0.3s ease;
      }
      
      .btn-gradient-primary:hover {
        transform: scale(1.1); 
        background-image: linear-gradient(to left,  #38B0F9,#0066CC);
        color: white;
      }
      
      `}
                </style>
                </div>
              </Col>
            </CardBody>
          </Card>
        </Card>

        {/* <Card className="company-profile mt-4">
          <CardBody className="p-4">
            <h6 className="fs-17">Company Details</h6>
            <div className="text-center">
              <img
                src={jobDetails?.company_id?.companyimage}
                alt=""
                className="img-fluid rounded-3"
              />

              <div className="mt-4">
                <h6 className="fs-17 mb-1">
                  {jobDetails?.company_id?.company_name}
                </h6>
                <p className="text-muted">
                  Since {jobDetails?.company_id?.establishment_date}
                </p>
              </div>
            </div>
            <ul className="list-unstyled mt-4">
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-globe text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Website</h6>
                    <p className="text-muted fs-14 text-break mb-0">
                      {jobDetails?.company_id?.company_website_url}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card> */}

        <div
          className="modal fade"
          id="applyNow"
          tabIndex="-1"
          aria-labelledby="applyNow"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <Modal isOpen={modal} toggle={openModal} centered>
              <ModalBody className="modal-body p-5">
                <div className="text-center mb-4">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Apply For This Job
                  </h5>
                </div>
                <div className="position-absolute end-0 top-0 p-3">
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <form onSubmit={applyforJob}>
                    <div className="mb-3">
                      <Label for="nameControlInput" className="form-label">
                        Name
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="nameControlInput"
                        placeholder="Enter your name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <Label for="emailControlInput2" className="form-label">
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="emailControlInput2"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChangeEmail}
                        required
                      />
                      {!isValidEmail && (
                        <div className="invalid-feedback">
                          Please enter a valid email address.
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <Label for="emailControlInput2" className="form-label">
                        Contact Number
                      </Label>
                      <Input
                        type="tel" // Use type="tel" for phone number inputs
                        className="form-control"
                        id="emailControlInput2"
                        maxLength={10}
                        pattern="[0-9]{10}" // Use pattern="[0-9]{10}" to enforce 10 digits only
                        placeholder="Enter your contact number"
                        value={enteredPhone}
                        onChange={handleChangePhone}
                        required
                      />
                      {!isValidPhone && (
                        <div className="invalid-feedback">
                          Please enter a valid 10-digit phone number.
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <Label for="exptype">Experience Type</Label>
                      <Input
                        type="select"
                        name="exptype"
                        id="exptype"
                        value={expType}
                        onChange={(e) => setExpType(e.target.value)}
                      >
                        <option value="">Select Experience Type</option>
                        {experience.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.experince_type.charAt(0).toUpperCase() +
                              option.experince_type.slice(1)}
                          </option>
                        ))}
                      </Input>
                    </div>
                    <div className="mb-3">
                      <Label for="nameControlInput" className="form-label">
                        Notice Period
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="nameControlInput"
                        placeholder="Enter your notice period"
                        required
                        value={noticePeriod}
                        onChange={(e) => setNoticePeriod(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <Label for="emailControlInput2" className="form-label">
                        Expected Pay
                      </Label>
                      <Input
                        type="number"
                        className="form-control"
                        id="emailControlInput2"
                        placeholder="Enter your expected pay"
                        value={expectedPay}
                        onChange={(e) => {
                          const inputValue = parseInt(e.target.value);
                          if (inputValue >= 0) {
                            setExpectedPay(inputValue);
                          }
                        }}
                      />
                    </div>

                    <div className="mb-4">
                      <Label className="form-label" for="inputGroupFile01">
                        Resume Upload
                      </Label>
                      <Input
                        accept=".pdf,.doc,.docx"
                        type="file"
                        className="form-control"
                        id="inputGroupFile01"
                        onChange={(e) => setFilename(e.target.files[0])}
                      />
                        <p style={{marginTop:'5px',fontSize:'13px'}}>Supported format(PDF,.doc,.docx)</p>
                    </div>

                    <div className="mb-3">
                      <Label for="city">City</Label>
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const formattedValue = inputValue.replace(
                            /[^a-zA-Z\s]/g,
                            ""
                          ); // Remove numbers and special characters
                          setCity(formattedValue);
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <Label for="country">Country</Label>

                      <Select
                        required
                        placeholder="Select Country"
                        options={applycountries}
                        value={selectedApplyCountry}
                        onChange={handleChangeApply}
                      />
                    </div>

                    <div className="mb-3">
                      <Label for="nameControlInput" className="form-label">
                        Enquiry
                      </Label>
                      <Input
                        type="textarea"
                        rows={3}
                        className="form-control"
                        id="nameControlInput"
                        placeholder="Enter your message"
                        required
                        value={enquiry}
                        onChange={(e) => setEnquiry(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 btn">
                      Send Application
                    </button>
                    <style>
                      {`
                       @media only screen and (max-width: 991px){
                        .btn{
                          margin:1em;
                        }
                       }
                      `}
                    </style>
                  </form>
              </ModalBody>
            </Modal>
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

export default RightSideContent;
