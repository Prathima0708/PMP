import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

import Select from "react-select";

import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";
import ListmoreNews from "../../News/NewsList/ListmoreNews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
var ID, USERID;
const JobListing = () => {
  const [modal, setModal] = useState(false);
  const [delId, setDelId] = useState("");

  const openModal = () => setModal(!modal);

  const [jobData, setJobData] = useState([]);

  const [editModal, setEditModal] = useState(false);
  const openEditModal = () => setEditModal(!editModal);

  const [jobTitle, setJobTitle] = useState("");
  const [qualifications, setQualifications] = useState([{}]);

  const [jobType, setJobType] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [skillName, setSkillName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [salary, setSalary] = useState(0);

  const [zip, setZip] = useState("");
  const [isCompanyNameHidden, setIsCompanyNameHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");

  const [jobTypeOptions, setJobTypeOptions] = useState([]);

  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [compImage, setCompImage] = useState("");

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [companyNameOrJobTitle, setCompanyNameOrJobTitle] = useState("");
  const [showViewMoreBtn, setShowViewMore] = useState(false);
  const [filteredJobsTrue, setFilteredJobsTrue] = useState(false);

  const [experience, setExperience] = useState([]);
  const [expType, setExpType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [nextQualificationId, setNextQualificationId] = useState(1);

  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5; // Change this to the number of items to display per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (filteredData.length > 0) {
      if (startIndex < filteredData.length) {
        const slicedData = filteredData.slice(startIndex, endIndex);
        setFilteredJobs(slicedData);
      } else {
        // Handle the case where the start index is beyond the filtered data length
        setFilteredJobs([]);
      }
    } else {
      const slicedData = jobData.slice(startIndex, endIndex);
      setFilteredJobs(slicedData);
    }
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (filteredData.length === 0 && jobData.length > 0) {
      const slicedData = jobData.slice(startIndex, endIndex);
      setFilteredJobs(slicedData);
    }
  }, [currentPage, filteredData, jobData, itemsPerPage]);

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const [userId, setUserId] = useState("");

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
    getUserID();
  }, []);

  useEffect(() => {
    const fetchJobTypeOptions = async () => {
      const response = await fetch(`${subURL}/job_type/`);
      const data = await response.json();

      setJobTypeOptions(data);
    };

    fetchJobTypeOptions();
  }, []);
  useEffect(() => {
    axios
      .get(`${subURL}/company_save_details`)
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const fetchExperience = async () => {
      const response = await fetch(`${subURL}/exptype/`);
      const data = await response.json();

      setExperience(data);
    };

    fetchExperience();
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

  useEffect(() => {
    axios
      .get(`${subURL}/post_job/`)
      .then((response) => {
        setJobData(response.data);
        setCompImage(response.data[0].company_id?.companyimage);
        const initialTotalPages = Math.ceil(
          response.data.length / itemsPerPage
        );
        setTotalPages(initialTotalPages);
        setFilteredJobs(response.data.slice(0, itemsPerPage));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (selectedOption) => {
    const countryName = selectedOption ? selectedOption.label : "";
    setSelectedCountry(selectedOption);
    setSendSelectedCountry(countryName);
  };
  const handleChangeCompany = (event) => {
    setSelectedCompanyId(event.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${subURL}/filteredjob/${sendSelectedCountry}/${jobType}/${companyNameOrJobTitle}/`
    );

    const filteredData = response.data;
    if (filteredData.length === 0) {
      setFilteredJobs([]);
      setJobData([]);
    }
    const filteredTotalPages = Math.ceil(filteredData.length / itemsPerPage);

    setTotalPages(filteredTotalPages);
    setFilteredData(filteredData);
    setFilteredJobs(filteredData.slice(0, itemsPerPage));
    setCurrentPage(1);
    setFilteredJobsTrue(true);
    setShowViewMore(true);
    setCompanyNameOrJobTitle("");
    setSelectedCountry("");
    setSendSelectedCountry("");
    setJobType("");
  };
  const resetJobs = async () => {
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
    };

    const res = await axios.get(`${subURL}/post_job/`, {
      headers: headers,
    });

    const allJobs = res.data;
    const initialTotalPages = Math.ceil(allJobs.length / itemsPerPage);

    setJobData(allJobs);
    setTotalPages(initialTotalPages);
    setCurrentPage(1);
    setFilteredData(allJobs); // Reset filtered data as well
    setFilteredJobs(allJobs.slice(0, itemsPerPage));
    setFilteredJobsTrue(false);
    setShowViewMore(false);
  };

  function editItem(id) {
    ID = id;

    setEditModal(true);

    const filteredDummuyData = jobData.find((data) => data.id === id);
    const qualificationValues = filteredDummuyData.job_qualification || [];

    setJobTitle(filteredDummuyData.job_title);

    setJobType(filteredDummuyData.job_type_id.id);
    setExpType(filteredDummuyData.experince_type_id?.id);

    setStreetAddress(filteredDummuyData.job_location_id.street_address);

    setCity(filteredDummuyData.job_location_id.city);
    setState(filteredDummuyData.job_location_id.state);
    setSelectedCountry(filteredDummuyData.job_location_id.country);

    setZip(filteredDummuyData.job_location_id.zip);
    setIsActive(filteredDummuyData.is_active);
    setIsCompanyNameHidden(filteredDummuyData.is_company_name_hidden);
    setSalary(filteredDummuyData.salary);
    setJobDescription(filteredDummuyData.job_description);

    setQualifications(qualificationValues);
  }
  function updateHandler() {
    // const formData = {
    //   job_title: jobTitle,
    //   job_type_id: jobType,
    //   experince_type_id: expType,
    //   job_qualification: qualifications,
    //   // company_id: selectedCompanyId,
    //   is_company_name_hidden: isCompanyNameHidden,

    //   job_description: jobDescription,
    //   is_active: isActive,

    //   skill_set_id: skillName,
    //   skill_level: skillLevel,
    //   street_address: streetAddress,
    //   city: city,
    //   state: state,
    //   country: sendSelectedCountry,
    //   zip: zip,
    //   salary: salary,
    //   user_account_id: userId,
    // };

 

    const formData = {
        
      job_title: jobTitle,
      job_type_id: jobType ? jobType :null,
      job_qualification:qualifications,
      // company_id: selectedCompanyId,
      is_company_name_hidden: isCompanyNameHidden,

      job_description: jobDescription,
      is_active: isActive,
      experince_type_id: expType ? expType : null,
      skill_set_id: skillName?skillName:null,
      skill_level: skillLevel?skillLevel :null,
      street_address: streetAddress? streetAddress :"",
      city: city ? city :"",
      state: state ? state :"",
      country: sendSelectedCountry ? sendSelectedCountry : null,
      zip: zip ? zip :null,
      user_account_id: userId,
      salary: salary? salary : 0,
    };

    console.log(formData)
    async function updateData() {
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };

        const resLogin = await axios.put(
          `${subURL}/post_job/${ID}/`,
          formData,
          {
            headers: headers,
          }
        );

        if (resLogin.status === 200) {
          setModalTitle("Sucess!");
          setSuccessMessage("Updated successfully");
          setShowModal(true);
          setEditModal(false);

          async function fetchData() {
            try {
              const res = await axios.get(`${subURL}/post_job/`);

              //setFilteredJobs(res.data.slice(0, 3));
              const updatedData = res.data;

              // Update the jobs state with the fetched data
              setJobData(updatedData);

              // Update the filteredJobs state with the fetched data
              const initialTotalPages = Math.ceil(
                updatedData.length / itemsPerPage
              );
              setTotalPages(initialTotalPages);
              const slicedData = updatedData.slice(startIndex, endIndex);
              setFilteredJobs(slicedData);
            } catch (error) {
              console.log(error);
            } finally {
            }
          }
          fetchData();
        }
      } catch (error) {
        setModalTitle("Failed!");
        setSuccessMessage("Oops !Something went wrong,Please try again");
        setShowModal(true);
        setEditModal(false);
        console.log(error);
      }
    }
    updateData();
  }

  function handleDelete(id) {
    setDelId(id);
    setModal(true);
  }

  async function deleteItem() {
    try {
      let headers = {
        "Content-Type": "application/json; charset=utf-8",
      };

      const resLogin = await axios.delete(
        `${subURL}/post_job/${delId}/`,

        {
          headers: headers,
        }
      );
      if (resLogin.status === 204) {
        setModalTitle("Success");
        setSuccessMessage("Deleted Successfully!");
        setShowModal(true);
        setModal(false);
        async function fetchData() {
          try {
            const res = await axios.get(`${subURL}/post_job/`);

            setFilteredJobs(res.data.slice(0, 3));
          } catch (error) {
            console.log(error);
          } finally {
          }
        }
        fetchData();
      }
    } catch (error) {
      setModalTitle("Failed!");
      setSuccessMessage("Oops !Something went wrong,Please try again");
      setShowModal(true);
      console.log(error);
    }
  }

  const handleDeleteQualification = (id) => {
    const updatedQualifications = qualifications.filter(
      (qualification) => qualification.id !== id
    );
    setQualifications(updatedQualifications);
  };

  const handleAddQualification = () => {
    const newQualification = { id: qualifications.length + 1, value: "" };
    setQualifications([...qualifications, newQualification]);
  };

  const handleQualificationChange = (id, value) => {
    const updatedQualifications = qualifications.map((qualification) =>
      qualification.id === id ? { ...qualification, value } : qualification
    );
    setQualifications(updatedQualifications);
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleFormSubmit} className="d-flex align-items-end">
        <Container>
          <Row className="filter">
            <Col className="bg-light border">
              <FormGroup className="me-2 mt-3 mb-0">
                <Label for="companyNameOrJobTitle" className="visually-hidden">
                  Company Name or Job Title
                </Label>
                <Input
                  type="text"
                  name="companyNameOrJobTitle"
                  id="companyNameOrJobTitle"
                  placeholder=" Job Title"
                  value={companyNameOrJobTitle}
                  onChange={(e) => setCompanyNameOrJobTitle(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col className="bg-light border">
              <FormGroup className="me-2  mt-3 mb-0">
                <Label for="location" className="visually-hidden">
                  Location
                </Label>
                <Select
                  placeholder=" Country"
                  options={countries}
                  value={selectedCountry}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col className="bg-light border">
              <FormGroup className="me-2  mt-3 mb-0">
                <Label for="jobType" className="visually-hidden">
                  Job Type
                </Label>
                <Input
                  type="select"
                  name="jobType"
                  id="jobType"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="">Select Job Type</option>
                  {jobTypeOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.job_type.charAt(0).toUpperCase() +
                        option.job_type.slice(1)}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col className="bg-light border me-2  mt-13 mb-0">
              <Button
                color="primary"
                type="submit"
                className="btn btn-gradient-primary btn-hover ms-sm-1"
                style={{
                  marginTop: "1em",
                }}
                onClick={handleFormSubmit}
              >
                <i className="uil uil-filter"></i> Fliter
              </Button>
            </Col>
            {filteredJobsTrue && (
              <Col className="bg-light border me-2  mt-13 mb-0">
                <Button
                  color="primary"
                  type="submit"
                  className="btn btn-gradient-primary btn-hover ms-sm-1 "
                  style={{
                    marginTop: "1em",
                  }}
                  onClick={resetJobs}
                >
                  <i className="uil uil-refresh"></i> Reset
                </Button>
              </Col>
            )}
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
              
    @media only screen and (max-width: 991px) {
     
.filter{
  display:block
}
      
   
    `}
            </style>
          </Row>
        </Container>
      </Form>
      <Row>
        <Col lg={12}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((jobListingDetails, key) => (
              <Card className="job-box card mt-4" key={key}>
                <CardBody className="p-4">
                  <Row>
                    {/* <Col lg={1}>
                      <img
                        src={
                          !showViewMoreBtn
                            ? `${jobListingDetails?.company_id?.companyimage}`
                            : `${mainURL}${jobListingDetails?.company_id?.companyimage}`
                        }
                        alt="img"
                        className="img-fluid rounded-3"
                      />
                    </Col> */}

                    <Col lg={9}>
                      <div className="mt-3 mt-lg-0">
                        <h5 className="fs-17 mb-1">
                          <Link
                            to={`/viewjob/${jobListingDetails.id}`}
                            className="text-dark"
                          >
                            {jobListingDetails.job_title}
                          </Link>
                        </h5>
                        <ul className="list-inline mb-0">
                          {/* <li className="list-inline-item">
                            <p className="text-muted fs-14 mb-0">
                              {jobListingDetails.company_id.company_name}
                            </p>
                          </li> */}
                          <li className="list-inline-item">
                            <p className="text-muted fs-14 mb-0">
                              <i className="mdi mdi-map-marker"></i>{" "}
                              {jobListingDetails.job_location_id.country}
                            </p>
                          </li>
                          <li className="list-inline-item">
                            <p className="text-muted fs-14 mb-0">
                              Job Description :
                              {jobListingDetails.job_description?.length > 20
                                ? jobListingDetails.job_description.slice(
                                    0,
                                    10
                                  ) + "..."
                                : jobListingDetails.job_description}
                            </p>
                          </li>
                        </ul>
                        <div className="mt-2">
                          <Badge
                            className="fs-13 mt-1"
                            color={
                              jobListingDetails.job_type_id.job_type ===
                              "full time"
                                ? "success"
                                : jobListingDetails.job_type_id.job_type ===
                                  "part time"
                                ? "purple"
                                : jobListingDetails.job_type_id.job_type ===
                                  "freelancer"
                                ? "pink"
                                : "primary"
                            }
                            key={key}
                          >
                            {jobListingDetails.job_type_id.job_type
                              .charAt(0)
                              .toUpperCase() +
                              jobListingDetails.job_type_id.job_type.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </Col>

                    <Col lg={2} className="align-self-center">
                      <ul className="list-inline mt-3 mb-0">
                        <li
                          className="list-inline-item"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Edit"
                        >
                          <Link
                            to="#"
                            onClick={() => editItem(jobListingDetails.id)}
                            className="avatar-sm bg-soft-success d-inline-block text-center rounded-circle fs-18"
                          >
                            <i className="uil uil-edit"></i>
                          </Link>
                        </li>
                        <li
                          className="list-inline-item"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                        >
                          <Link
                            to="#"
                            onClick={() => handleDelete(jobListingDetails.id)}
                            className="avatar-sm bg-soft-danger d-inline-block text-center rounded-circle fs-18"
                          >
                            <i className="uil uil-trash-alt"></i>
                          </Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            ))
          ) : (
            <h3 className="fs-15 mt-3 mb-5 text-center">No jobs found.</h3>
          )}
        </Col>
        {filteredJobs.length > 0 && (
          <ListmoreNews
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Row>

      <div
        className="modal fade"
        id="editmodal"
        tabIndex="-1"
        aria-labelledby="editmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal
            isOpen={editModal}
            toggle={toggleEditModal}
            centered
            tabIndex="-1"
          >
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Job
              </h5>
            </div>
            <ModalBody>
              <div className="job-post-content box-shadow-md rounded-3 p-4">
                <Row className="row">
                  <Col lg={12}>
                    <div className="mb-4">
                      <Label for="jobtitle">Job Title</Label>
                      <Input
                        required
                        type="text"
                        name="jobtitle"
                        id="jobtitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-4">
                      <Label for="jobType">Job Type</Label>
                      <Input
                        required
                        type="select"
                        name="jobType"
                        id="jobType"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                      >
                        {jobTypeOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.job_type.charAt(0).toUpperCase() +
                              option.job_type.slice(1)}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
                      <Label for="exptype">Experience Type</Label>
                      <Input
                        required
                        type="select"
                        name="exptype"
                        id="exptype"
                        value={expType}
                        onChange={(e) => setExpType(e.target.value)}
                      >
                        {experience.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.experince_type.charAt(0).toUpperCase() +
                              option.experince_type.slice(1)}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
                      <Label for="streetAddress">Street Address</Label>
                      <Input
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                      />
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
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
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
                      <Label for="state">State</Label>
                      <Input
                        type="text"
                        name="state"
                        id="state"
                        value={state}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const formattedValue = inputValue.replace(
                            /[^a-zA-Z\s]/g,
                            ""
                          ); // Remove numbers and special characters
                          setState(formattedValue);
                        }}
                      />
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
                      <Label for="country">Country</Label>

                      <Select
                        required
                        placeholder="Select Country"
                        options={countries}
                        //value={selectedCountry}
                        defaultValue={
                          selectedCountry
                            ? {
                                value: selectedCountry,
                                label: selectedCountry,
                              }
                            : undefined
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-4">
                      <Label for="zip">Zip</Label>
                      <Input
                        type="text"
                        name="zip"
                        id="zip"
                        maxLength={6}
                        value={zip}
                        onChange={(e) => {
                          const enteredValue = parseInt(e.target.value, 10);
                          if (enteredValue >= 0 && e.target.value.length <= 6) {
                            setZip(enteredValue);
                          }
                        }}
                      />
                    </div>
                  </Col>

                  <Col lg={6} style={{ marginTop: "3%" }}>
                    <div className="mb-4">
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={isActive}
                          onChange={(e) => setIsActive(e.target.checked)}
                        />{" "}
                        Job is Active
                      </Label>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="mb-4">
                      <Label for="salary">Salary</Label>
                      <Input
                        required
                        type="number"
                        name="salary"
                        id="salary"
                        value={salary}
                        onChange={(e) => {
                          const enteredValue = parseInt(e.target.value, 10);
                          if (enteredValue >= 0) {
                            setSalary(enteredValue);
                          }
                        }}
                      />
                    </div>
                  </Col>
                  {/* <Col lg={6}>
                    <div className="mb-4">
                      <Label for="jobDescription">Company Name</Label>
                      <Input
                        required
                        type="select"
                        name="companyname"
                        id="companyname"
                        onChange={handleChangeCompany}
                      >
                        {companies?.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.company_name.charAt(0).toUpperCase() +
                              option.company_name.slice(1)}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </Col> */}

                  <Col lg={12}>
                    <div className="mb-4">
                      <Label for="jobDescription">Job Description</Label>
                      <Input
                        rows={5}
                        required
                        type="textarea"
                        name="jobDescription"
                        id="jobDescription"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>
                  </Col>

                  {/* <Col lg={12}>
                    <Label> Qualifications</Label>
                    {qualifications.map((qualification) => (
                      <div
                        key={qualification.id}
                        className=""
                        style={{
                          marginTop: "1em",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Input
                          type="text"
                          value={qualification.value}
                          onChange={(e) =>
                            handleQualificationChange(
                              qualification.id,
                              e.target.value
                            )
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          color="red"
                          size="lg"
                          onClick={() =>
                            handleDeleteQualification(qualification.id)
                          }
                          style={{
                            cursor: "pointer",
                            marginLeft: "3em",
                            marginTop: "7px",
                          }}
                        />
                      </div>
                    ))}

                    <Button
                      onClick={handleAddQualification}
                      className="mt-3 mb-4"
                    >
                      Add
                    </Button>
                  </Col> */}
                  <Col lg={12}>
                    <Label>Qualifications</Label>
                    {qualifications.map(
                      (qualification) =>
                        qualification.id !== 0 &&
                        qualification.value !== null && (
                          <div
                            key={qualification.id}
                            className=""
                            style={{
                              marginTop: "1em",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Input
                              type="text"
                              value={qualification.value}
                              onChange={(e) =>
                                handleQualificationChange(
                                  qualification.id,
                                  e.target.value
                                )
                              }
                            />
                            <FontAwesomeIcon
                              icon={faTrash}
                              color="red"
                              size="lg"
                              onClick={() =>
                                handleDeleteQualification(qualification.id)
                              }
                              style={{
                                cursor: "pointer",
                                marginLeft: "3em",
                                marginTop: "7px",
                              }}
                            />
                          </div>
                        )
                    )}
                    <Button
                      onClick={handleAddQualification}
                      className="mt-3 mb-4"
                      style={{ marginLeft: "1em" }}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  onClick={openEditModal}
                  className="btn btn-primary btn-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-danger btn-sm"
                  onClick={updateHandler}
                >
                  Update
                </button>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Delete Job ?
              </h5>
            </div>
            <ModalBody>
              <div>
                <h6 className="text-danger">
                  Are you sure you want to delete ?
                </h6>
              </div>
            </ModalBody>
            <div className="modal-footer">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-primary btn-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={deleteItem}
              >
                Yes, delete
              </button>
            </div>
          </Modal>
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

export default JobListing;
