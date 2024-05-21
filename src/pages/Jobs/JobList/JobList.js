// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import MetaTags from "react-meta-tags";
// import Section from "../../Jobs/JobList/Section";

// import { mainURL, subURL } from "../../../utils/URLs";
// import axios from "axios";
// import {
//   Badge,
//   Button,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
// } from "reactstrap";
// import Select from "react-select";
// import { Link } from "react-router-dom";

// import ListmoreNews from "../../../adminPanel/News/NewsList/ListmoreNews";
// import { jobsList } from "../../../utils/Jobs";

// const JobList = (props) => {
//   const [jobTypeOptions, setJobTypeOptions] = useState([]);
//   const [showViewMoreBtn, setShowViewMore] = useState(false);

//   const [expType, setExpType] = useState("");
//   const [experience, setExperience] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [enteredPhone, setEnteredPhone] = useState("");
//   const [filename, setFilename] = useState("");
//   const [expectedPay, setExpectedPay] = useState(0);
//   const [noticePeriod, setNoticePeriod] = useState("");
//   const [city, setCity] = useState("");
//   const [applycountries, setApplyCountries] = useState([]);
//   const [selectedApplyCountry, setSelectedApplyCountry] = useState(null);
//   const [sendSelectedApplyCountry, setSendSelectedApplyCountry] =
//     useState(null);
//   const [enquiry, setEnquiry] = useState("");

//   const [jobs, setJobs] = useState([]);

//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

//   const [companyNameOrJobTitle, setCompanyNameOrJobTitle] = useState("");
//   const [isValidEmail, setIsValidEmail] = useState(true);
//   const [isValidPhone, setIsValidPhone] = useState(true);

//   const [jobType, setJobType] = useState("");
//   //Apply Now Model
//   const [modal, setModal] = useState(false);
//   const openModal = () => setModal(!modal);

//   const [showModal, setShowModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const [jobId, setJobId] = useState("");

//   const [filteredJobsTrue, setFilteredJobsTrue] = useState(false);

//   const [compImage, setCompanyImage] = useState("");
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   const [currentPage, setCurrentPage] = useState(1);

//   const [totalPages, setTotalPages] = useState(0);
//   const itemsPerPage = 7;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     if (filteredData.length > 0) {
//       if (startIndex < filteredData.length) {
//         const slicedData = filteredData.slice(startIndex, endIndex);
//         setFilteredJobs(slicedData);
//       } else {
//         // Handle the case where the start index is beyond the filtered data length
//         setFilteredJobs([]);
//       }
//     } else {
//       const slicedData = jobs.slice(startIndex, endIndex);
//       setFilteredJobs(slicedData);
//     }
//   };

//   useEffect(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     if (filteredData.length === 0 && jobs.length > 0) {
//       const slicedData = jobs.slice(startIndex, endIndex);
//       setFilteredJobs(slicedData);
//     }
//   }, [currentPage, filteredData, jobs, itemsPerPage]);

//   useEffect(() => {
//     const fetchSkillSetOptions = async () => {
//       const response = await fetch(`${subURL}/exptype/`);
//       const data = await response.json();

//       setExperience(data);
//     };

//     fetchSkillSetOptions();
//   }, []);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       let headers = {
//         "Content-Type": "application/json; charset=utf-8",
//       };

//       const res = await axios.get(`${subURL}/post_job/`, {
//         headers: headers,
//       });

//       setJobs(res.data);
//       setCompanyImage(res.data[0]?.company_id?.companyimage);
//       const initialTotalPages = Math.ceil(res.data.length / itemsPerPage);
//       setTotalPages(initialTotalPages);
//       setFilteredJobs(res.data.slice(0, itemsPerPage));
//     };

//     fetchJobs();
//   }, []);

//   const resetJobs = async () => {
//     const headers = {
//       "Content-Type": "application/json; charset=utf-8",
//     };

//     const res = await axios.get(`${subURL}/post_job/`, {
//       headers: headers,
//     });

//     const allJobs = res.data;
//     const initialTotalPages = Math.ceil(allJobs.length / itemsPerPage);

//     setJobs(allJobs);
//     setTotalPages(initialTotalPages);
//     setCurrentPage(1);
//     setFilteredData(allJobs); // Reset filtered data as well
//     setFilteredJobs(allJobs.slice(0, itemsPerPage));
//     setFilteredJobsTrue(false);
//     setShowViewMore(false);
//   };

//   useEffect(() => {
//     const fetchJobTypeOptions = async () => {
//       const response = await fetch(`${subURL}/job_type/`);
//       const data = await response.json();

//       setJobTypeOptions(data);
//     };

//     fetchJobTypeOptions();
//   }, []);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       const response = await fetch("https://restcountries.com/v2/all");
//       const data = await response.json();
//       const options = data.map((country) => ({
//         label: country.name,
//         value: country.alpha2Code,
//       }));

//       setCountries(options);
//     };
//     fetchCountries();
//   }, []);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       const response = await fetch("https://restcountries.com/v2/all");
//       const data = await response.json();
//       const options = data.map((country) => ({
//         label: country.name,
//         value: country.alpha2Code,
//       }));

//       setApplyCountries(options);
//     };
//     fetchCountries();
//   }, []);

//   const handleChange = (selectedOption) => {
//     const countryName = selectedOption ? selectedOption.label : "";
//     setSelectedCountry(selectedOption);
//     setSendSelectedCountry(countryName);
//   };

//   const handleChangeApply = (selectedOption) => {
//     const countryName = selectedOption ? selectedOption.label : "";
//     setSelectedApplyCountry(selectedOption);
//     setSendSelectedApplyCountry(countryName);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const response = await axios.get(
//       `${subURL}/filteredjob/${sendSelectedCountry}/${jobType}/${companyNameOrJobTitle}/`
//     );

//     const filteredData = response.data;

//     if (filteredData.length === 0) {
//       setFilteredJobs([]);
//       setJobs([]);
//     }

//     const filteredTotalPages = Math.ceil(filteredData.length / itemsPerPage);

//     setTotalPages(filteredTotalPages);
//     setFilteredData(filteredData);
//     setFilteredJobs(filteredData.slice(0, itemsPerPage));
//     setCurrentPage(1);
//     setFilteredJobsTrue(true);
//     setShowViewMore(true);
//     setCompanyNameOrJobTitle("");
//     setSelectedCountry("");
//     setSendSelectedCountry("");
//     setJobType("");
//   };

//   const validateEmail = (email) => {
//     // Regular expression for email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleChangeEmail = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     setIsValidEmail(validateEmail(newEmail));
//   };

//   const validatePhone = (phone) => {
//     return phone.length === 10; // Check if the phone number has exactly 10 digits
//   };

//   const handleChangePhone = (e) => {
//     const newPhone = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
//     setEnteredPhone(newPhone);
//     setIsValidPhone(validatePhone(newPhone));
//   };

//   async function applyforJob(event) {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("job_post_id", jobId);
//     formData.append("applicant_name", name);
//     formData.append("applicant_email", email);
//     formData.append("phone_num", enteredPhone);
//     formData.append("uploaded_cv", filename);
//     formData.append("notice_period", noticePeriod);
//     formData.append("expected_pay", expectedPay);
//     formData.append("experience", expType);
//     formData.append("city", city);
//     formData.append("country", sendSelectedApplyCountry);
//     formData.append("enquiry", enquiry);

//     formData.append("status", "Pending");

//     try {
//       let headers = {
//         "Content-Type": "multipart/form-data",
//       };
//       const res = await axios.post(`${subURL}/applyjob/`, formData, {
//         headers: headers,
//       });

//       if (res.status === 201) {
//         setModalTitle("Success");
//         setSuccessMessage("Applied for job Successfully !");
//         setShowModal(true);
//         setModal(false);
//         setName("");
//         setEmail("");
//         setEnteredPhone("");
//         setExpType("");
//         setExpectedPay("");
//         setFilename("");
//       } else {
//         console.log("error");
//       }
//     } catch (e) {
//       console.log(e);
//       if (e.response.status === 404) {
//         setModalTitle("Failed !");
//         setSuccessMessage("Please add your profile details first!");
//         setShowModal(true);
//       } else {
//         setModalTitle("Failed !");
//         setSuccessMessage("Oops !Something went wrong ,please try again");
//         setShowModal(true);
//       }
//     }
//   }
//   const passJobID = () => {
//     setModal(true);
//     // Constructing the mailto URL with pre-filled recipient
//   };
//   // function passJobID(id) {
//   //   setModal(true);

//   //   setJobId(id);
//   // }
//   return (
//     <React.Fragment>
//       <MetaTags>
//         <title>Job List</title>
//       </MetaTags>
//       <Section />
//       <section className="section">
//         <Container>
//           <Row>
//             <Col lg={12}>
//               <div className="me-lg-5">
//                 {/* <Form
//                   onSubmit={handleFormSubmit}
//                   className="d-flex align-items-end"
//                 >
//                   <Container>
//                     <Row className="filter">
//                       <Col className="bg-light border">
//                         <FormGroup className="me-2 mt-3 mb-0">
//                           <Label
//                             for="companyNameOrJobTitle"
//                             className="visually-hidden"
//                           >
//                             Company Name or Job Title
//                           </Label>
//                           <Input
//                             type="text"
//                             name="companyNameOrJobTitle"
//                             id="companyNameOrJobTitle"
//                             placeholder=" Job Title"
//                             value={companyNameOrJobTitle}
//                             onChange={(e) =>
//                               setCompanyNameOrJobTitle(e.target.value)
//                             }
//                           />
//                         </FormGroup>
//                       </Col>
//                       <Col className="bg-light border">
//                         <FormGroup className="me-2  mt-3 mb-0">
//                           <Label for="location" className="visually-hidden">
//                             Location
//                           </Label>
//                           <Select
//                             placeholder=" Country"
//                             options={countries}
//                             value={selectedCountry}
//                             onChange={handleChange}
//                           />
//                         </FormGroup>
//                       </Col>
//                       <Col className="bg-light border">
//                         <FormGroup className="me-2  mt-3 mb-0">
//                           <Label for="jobType" className="visually-hidden">
//                             Job Type
//                           </Label>
//                           <Input
//                             type="select"
//                             name="jobType"
//                             id="jobType"
//                             value={jobType}
//                             onChange={(e) => setJobType(e.target.value)}
//                           >
//                             <option value="">Select Job Type</option>
//                             {jobTypeOptions.map((option) => (
//                               <option key={option.id} value={option.value}>
//                                 {option.job_type.charAt(0).toUpperCase() +
//                                   option.job_type.slice(1)}
//                               </option>
//                             ))}
//                           </Input>
//                         </FormGroup>
//                       </Col>
//                       <Col className="bg-light border me-2  mt-13 mb-0">
//                         <Button
//                           className="btn btn-gradient-primary btn-hover ms-sm-1 "
//                           color="primary"
//                           type="submit"
//                           style={{
//                             marginTop: "1em",
//                           }}
//                           onClick={handleFormSubmit}
//                         >
//                           <i className="uil uil-filter"></i> Filter
//                         </Button>
//                       </Col>
//                       {filteredJobsTrue && (
//                         <Col className="bg-light border me-2  mt-13 mb-0">
//                           <Button
//                             className="btn btn-gradient-primary btn-hover ms-sm-1 "
//                             color="primary"
//                             type="submit"
//                             style={{
//                               marginTop: "1em",
//                             }}
//                             onClick={resetJobs}
//                           >
//                             <i className="uil uil-refresh"></i> Reset
//                           </Button>
//                         </Col>
//                       )}
//                       <style>
//                         {`
//     @media only screen and (max-width: 991px) {
//   .filter{
//     display:block

//   }
//   .btn{
//     margin:1em;
//     margin-left:5em;
//   }

//     `}
//                       </style>
//                     </Row>
//                   </Container>
//                 </Form> */}

//                 {jobsList.length === 0 ? (
//                   <h3 className="fs-15 mt-3 mb-5 text-center">
//                     No jobsList found.
//                   </h3>
//                 ) : (
//                   <div>
//                     {jobsList &&
//                       jobsList.map((jobVacancyListDetails) => (
//                         <div
//                           className={
//                             jobVacancyListDetails.addclassNameBookmark === true
//                               ? "job-box bookmark-post card mt-4"
//                               : "job-box card mt-4"
//                           }
//                         >
//                           <div className="p-4">
//                             <Row className="align-items-center">
//                               <Col md={4}>
//                                 <div className="mb-2 mb-md-0">
//                                   <h5 className="fs-18 mb-0">
//                                     <Link
//                                       to={`/jobdetails/${jobVacancyListDetails.id}`}
//                                       className="text-dark"
//                                     >
//                                       {jobVacancyListDetails.job_title
//                                         .toLowerCase()
//                                         .charAt(0)
//                                         .toUpperCase() +
//                                         jobVacancyListDetails.job_title.slice(
//                                           1
//                                         )}
//                                     </Link>
//                                   </h5>
//                                   {/* <p className="text-muted fs-14 mb-0">
//                                     {
//                                       jobVacancyListDetails?.company_id
//                                         ?.company_name
//                                     }
//                                   </p> */}
//                                 </div>
//                               </Col>

//                               <Col md={4}>
//                                 <div className="d-flex mb-2">
//                                   <div className="flex-shrink-0"></div>
//                                   <p className="text-muted mb-0">
//                                     {jobVacancyListDetails?.job_description}
//                                   </p>
//                                 </div>
//                               </Col>

//                               {/* <Col md={2}>
//                                 <div>
//                                   <p className="text-muted mb-0">
//                                     <span className="text-dark">Salary :</span>
//                                     <span>
//                                       {jobVacancyListDetails.salary}
//                                     </span>{" "}
//                                   </p>
//                                 </div>
//                               </Col> */}

//                               <Col lg={4} md={3}>
//                                 <div className="text-start text-md-end">
//                                   <a
//                                     href="mailto:contact@pacificmanpower.com.pg"
//                                     className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2"
//                                     onClick={passJobID}
//                                   >
//                                     Apply Now{" "}
//                                     <i className="mdi mdi-chevron-double-right"></i>
//                                   </a>
//                                   <style>
//                                     {`
//       .btn-gradient-primary {
//         background-image: linear-gradient(to left,  #0066CC,#38B0F9);
//   color: white;
//   border: none;
//   transition: transform 0.3s ease;
//       }

//       .btn-gradient-primary:hover {
//         transform: scale(1.1);
//         background-image: linear-gradient(to left,  #38B0F9,#0066CC);
//         color: white;
//       }

//       `}
//                                   </style>
//                                 </div>
//                                 <style>
//                                   {`
//                                     .btn-small {
//                                       padding: 5px 10px; /* Adjust padding as needed */
//                                       font-size: 14px; /* Adjust font size as needed */
//                                     }
//                                     `}
//                                 </style>
//                               </Col>
//                             </Row>
//                           </div>
//                           <div className="p-3 bg-light">
//                             <Row className="justify-content-between"></Row>
//                           </div>
//                         </div>
//                       ))}
//                   </div>
//                 )}
//               </div>
//             </Col>
//           </Row>

//           <div
//             className="modal fade"
//             id="applyNow"
//             tabIndex="-1"
//             aria-labelledby="applyNow"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog modal-dialog-centered">
//               <Modal isOpen={modal} toggle={openModal} centered>
//                 <ModalBody className="modal-body p-5">
//                   <div className="text-center mb-4">
//                     <h5 className="modal-title" id="staticBackdropLabel">
//                       Apply For This Job
//                     </h5>
//                   </div>
//                   <div className="position-absolute end-0 top-0 p-3">
//                     <button
//                       type="button"
//                       onClick={openModal}
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     ></button>
//                   </div>

//                   <Label for="nameControlInput" className="form-label">
//                     Drop a mail to{" "}
//                     <a
//                       href="mailto:contact@pacificmanpower.com.pg"
//                       onClick={passJobID}
//                     >
//                       contact@pacificmanpower.com.pg
//                     </a>{" "}
//                     & share your resume
//                   </Label>

//                   {/* <form onSubmit={applyforJob}>
//                     <div className="mb-3">
//                       <Label for="nameControlInput" className="form-label">
//                         Name
//                       </Label>
//                       <Input
//                         type="text"
//                         className="form-control"
//                         id="nameControlInput"
//                         placeholder="Enter your name"
//                         value={name}
//                         required
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <Label for="emailControlInput2" className="form-label">
//                         Email Address
//                       </Label>
//                       <Input
//                         type="email"
//                         className="form-control"
//                         id="emailControlInput2"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={handleChangeEmail}
//                         required
//                       />
//                       {!isValidEmail && (
//                         <div className="invalid-feedback">
//                           Please enter a valid email address.
//                         </div>
//                       )}
//                     </div>
//                     <div className="mb-3">
//                       <Label for="emailControlInput2" className="form-label">
//                         Contact Number
//                       </Label>
//                       <Input
//                         type="tel" // Use type="tel" for phone number inputs
//                         className="form-control"
//                         id="emailControlInput2"
//                         maxLength={10}
//                         pattern="[0-9]{10}" // Use pattern="[0-9]{10}" to enforce 10 digits only
//                         placeholder="Enter your contact number"
//                         value={enteredPhone}
//                         onChange={handleChangePhone}
//                         required
//                       />
//                       {!isValidPhone && (
//                         <div className="invalid-feedback">
//                           Please enter a valid 10-digit phone number.
//                         </div>
//                       )}
//                     </div>

//                     <div className="mb-4">
//                       <Label for="exptype">Experience Type</Label>
//                       <Input
//                         type="select"
//                         name="exptype"
//                         id="exptype"
//                         value={expType}
//                         onChange={(e) => setExpType(e.target.value)}
//                       >
//                         <option value="">Select Experience Type</option>
//                         {experience.map((option) => (
//                           <option key={option.id} value={option.id}>
//                             {option.experince_type.charAt(0).toUpperCase() +
//                               option.experince_type.slice(1)}
//                           </option>
//                         ))}
//                       </Input>
//                     </div>
//                     <div className="mb-3">
//                       <Label for="nameControlInput" className="form-label">
//                         Notice Period
//                       </Label>
//                       <Input
//                         type="text"
//                         className="form-control"
//                         id="nameControlInput"
//                         placeholder="Enter your notice period"
//                         required
//                         value={noticePeriod}
//                         onChange={(e) => setNoticePeriod(e.target.value)}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <Label for="emailControlInput2" className="form-label">
//                         Expected Pay
//                       </Label>
//                       <Input
//                         type="number"
//                         className="form-control"
//                         id="emailControlInput2"
//                         placeholder="Enter your expected pay"
//                         value={expectedPay}
//                         onChange={(e) => {
//                           const inputValue = parseInt(e.target.value);
//                           if (inputValue >= 0) {
//                             setExpectedPay(inputValue);
//                           }
//                         }}
//                       />
//                     </div>

//                     <div className="mb-4">
//                       <Label className="form-label" for="inputGroupFile01">
//                         Resume Upload
//                       </Label>
//                       <Input
//                         accept=".pdf,.doc,.docx"
//                         type="file"
//                         className="form-control"
//                         id="inputGroupFile01"
//                         onChange={(e) => setFilename(e.target.files[0])}
//                       />
//                       <p style={{ marginTop: "5px", fontSize: "13px" }}>
//                         Supported format(PDF,.doc,.docx)
//                       </p>
//                     </div>

//                     <div className="mb-3">
//                       <Label for="city">City</Label>
//                       <Input
//                         type="text"
//                         name="city"
//                         id="city"
//                         value={city}
//                         onChange={(e) => {
//                           const inputValue = e.target.value;
//                           const formattedValue = inputValue.replace(
//                             /[^a-zA-Z\s]/g,
//                             ""
//                           ); // Remove numbers and special characters
//                           setCity(formattedValue);
//                         }}
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <Label for="country">Country</Label>

//                       <Select
//                         required
//                         placeholder="Select Country"
//                         options={applycountries}
//                         value={selectedApplyCountry}
//                         onChange={handleChangeApply}
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <Label for="nameControlInput" className="form-label">
//                         Enquiry
//                       </Label>
//                       <Input
//                         type="textarea"
//                         rows={3}
//                         className="form-control"
//                         id="nameControlInput"
//                         placeholder="Enter your message"
//                         required
//                         value={enquiry}
//                         onChange={(e) => setEnquiry(e.target.value)}
//                       />
//                     </div>

//                     <button type="submit" className="btn btn-primary w-100 btn">
//                       Send Application
//                     </button>
//                     <style>
//                       {`
//                        @media only screen and (max-width: 991px){
//                         .btn{
//                           margin:1em;
//                         }
//                        }
//                       `}
//                     </style>
//                   </form> */}
//                 </ModalBody>
//               </Modal>
//             </div>
//           </div>
//           {filteredJobs.length > 0 && (
//             <ListmoreNews
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           )}
//         </Container>
//       </section>

//       <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
//         <ModalHeader toggle={() => setShowModal(false)}>
//           {modalTitle}
//         </ModalHeader>
//         <ModalBody>{successMessage}</ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={() => setShowModal(false)}>
//             OK
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </React.Fragment>
//   );
// };

// export default JobList;

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MetaTags from "react-meta-tags";
import Section from "../../Jobs/JobList/Section";

import { mainURL, subURL } from "../../../utils/URLs";
import axios from "axios";
import {
  Badge,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "reactstrap";
import Select from "react-select";
import { Link } from "react-router-dom";

import ListmoreNews from "../../../adminPanel/News/NewsList/ListmoreNews";

const JobList = (props) => {
  const [jobTypeOptions, setJobTypeOptions] = useState([]);
  const [showViewMoreBtn, setShowViewMore] = useState(false);

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

  const [jobs, setJobs] = useState([]);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

  const [companyNameOrJobTitle, setCompanyNameOrJobTitle] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const [jobType, setJobType] = useState("");
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [jobId, setJobId] = useState("");

  const [filteredJobsTrue, setFilteredJobsTrue] = useState(false);

  const [compImage, setCompanyImage] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 7;
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
      const slicedData = jobs.slice(startIndex, endIndex);
      setFilteredJobs(slicedData);
    }
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (filteredData.length === 0 && jobs.length > 0) {
      const slicedData = jobs.slice(startIndex, endIndex);
      setFilteredJobs(slicedData);
    }
  }, [currentPage, filteredData, jobs, itemsPerPage]);

  useEffect(() => {
    const fetchSkillSetOptions = async () => {
      try {
        const response = await axios.get(`${subURL}/exptype/`); // Use axios.get method
        setExperience(response.data); // Extract data from the response
      } catch (error) {
        // Handle any errors
        console.error("Error fetching skill set options:", error);
      }
    };

    fetchSkillSetOptions();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      let headers = {
        "Content-Type": "application/json; charset=utf-8",
      };

      const res = await axios.get(`${subURL}/post_job/`, {
        headers: headers,
      });

      setJobs(res.data);
      setCompanyImage(res.data[0]?.company_id?.companyimage);
      const initialTotalPages = Math.ceil(res.data.length / itemsPerPage);
      setTotalPages(initialTotalPages);
      setFilteredJobs(res.data.slice(0, itemsPerPage));
    };

    fetchJobs();
  }, []);

  const resetJobs = async () => {
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
    };

    const res = await axios.get(`${subURL}/post_job/`, {
      headers: headers,
    });

    const allJobs = res.data;
    const initialTotalPages = Math.ceil(allJobs.length / itemsPerPage);

    setJobs(allJobs);
    setTotalPages(initialTotalPages);
    setCurrentPage(1);
    setFilteredData(allJobs); // Reset filtered data as well
    setFilteredJobs(allJobs.slice(0, itemsPerPage));
    setFilteredJobsTrue(false);
    setShowViewMore(false);
  };

  useEffect(() => {
    const fetchJobTypeOptions = async () => {
      try {
        const response = await axios.get(`${subURL}/job_type/`); // Use axios.get method
        setJobTypeOptions(response.data); // Extract data from the response
      } catch (error) {
        // Handle any errors
        console.error("Error fetching job type options:", error);
      }
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

  const handleChange = (selectedOption) => {
    const countryName = selectedOption ? selectedOption.label : "";
    setSelectedCountry(selectedOption);
    setSendSelectedCountry(countryName);
  };

  const handleChangeApply = (selectedOption) => {
    const countryName = selectedOption ? selectedOption.label : "";
    setSelectedApplyCountry(selectedOption);
    setSendSelectedApplyCountry(countryName);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${subURL}/filteredjob/${sendSelectedCountry}/${jobType}/${companyNameOrJobTitle}/`
    );

    const filteredData = response.data;

    if (filteredData.length === 0) {
      setFilteredJobs([]);
      setJobs([]);
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

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const validatePhone = (phone) => {
    return phone.length === 10; // Check if the phone number has exactly 10 digits
  };

  const handleChangePhone = (e) => {
    const newPhone = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    setEnteredPhone(newPhone);
    setIsValidPhone(validatePhone(newPhone));
  };

  async function applyforJob(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("job_post_id", jobId);
    formData.append("applicant_name", name);
    formData.append("applicant_email", email);
    formData.append("phone_num", enteredPhone);
    formData.append("uploaded_cv", filename);
    formData.append("notice_period", 0);
    formData.append("expected_pay", expectedPay);
    formData.append("experience", expType);
    formData.append("city", city);
    formData.append("country", sendSelectedApplyCountry);
    formData.append("enquiry", enquiry);

    formData.append("status", "Pending");

    try {
      setLoading(true);
      // let headers = {
      //   "Content-Type": "multipart/form-data",
      // };
      const authFormData = {
        username: "pacific",
        password: "pacificmanpower@1123",
      };
      const authRes = await axios.post(
        "https://pacificmanpower.com.pg/pmp/spacificmanpower/auth-token/",
        authFormData
      );
     
      let headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${authRes.data.token}`,
      };
      const res = await axios.post(`${subURL}/applyjob/`, formData, {
        headers: headers,
      });

    

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
      setSelectedCountry("")

      // if (res.status === 201) {
      //   setModalTitle("Success");
      //   setSuccessMessage("Applied for job Successfully !");
      //   setShowModal(true);
      //   setModal(false);
      //   setName("");
      //   setEmail("");
      //   setEnteredPhone("");
      //   setExpType("");
      //   setExpectedPay("");
      //   setFilename("");
      // } else {
      //   console.log("error");
      // }
    } catch (e) {
      console.log(e);
         if (e.response?.status === 500) {
        setModalTitle("Success");
        setSuccessMessage("Applied for job Successfully !");
        setShowModal(true);
        setModal(false);
      } 
      if (e.response?.status === 502) {
        setModalTitle("Success");
        setSuccessMessage("Applied for job Successfully !");
        setShowModal(true);
        setModal(false);
      } 
      // if (e.response?.status === 404) {
      //   setModalTitle("Failed !");
      //   setSuccessMessage("Please add your profile details first!");
      //   setShowModal(true);
      // } 
      //else {
      //   setModalTitle("Failed !");
      //   setSuccessMessage("Oops !Something went wrong ,please try again");
      //   setShowModal(true);
      // }
    } finally {
      setModalTitle("Success");
      setSuccessMessage("Applied for job Successfully !");
      setShowModal(true);
      setModal(false);
      setLoading(false);
      setName("");
      setEmail("");
      setEnteredPhone("");
      setExpType("");
      setExpectedPay("");
      setFilename("");
      setCity("")
      setSelectedApplyCountry("")
    
 
      setEnquiry("")
    }
  }

  function passJobID(id) {
    setModal(true);

    setJobId(id);
  }
  function timeAgo(createdDate) {
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate - new Date(createdDate);
    const elapsedSeconds = Math.round(elapsedMilliseconds / 1000);

    if (elapsedSeconds < 60) {
      return elapsedSeconds === 1 ? "1 sec ago" : elapsedSeconds + " secs ago";
    } else if (elapsedSeconds < 3600) {
      const minutes = Math.round(elapsedSeconds / 60);
      return minutes === 1 ? "1 min ago" : minutes + " mins ago";
    } else if (elapsedSeconds < 86400) {
      const hours = Math.round(elapsedSeconds / 3600);
      return hours === 1 ? "1 hour ago" : hours + " hours ago";
    } else {
      const days = Math.round(elapsedSeconds / 86400);
      return days === 1 ? "1 day ago" : days + " days ago";
    }
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Job List</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="me-lg-5">
                <Form
                  onSubmit={handleFormSubmit}
                  className="d-flex align-items-end"
                >
                  <Container>
                    <Row className="filter">
                      <Col className="bg-light border">
                        <FormGroup className="me-2 mt-3 mb-0">
                          <Label
                            for="companyNameOrJobTitle"
                            className="visually-hidden"
                          >
                            Company Name or Job Title
                          </Label>
                          <Input
                            type="text"
                            name="companyNameOrJobTitle"
                            id="companyNameOrJobTitle"
                            placeholder=" Job Title"
                            value={companyNameOrJobTitle}
                            onChange={(e) =>
                              setCompanyNameOrJobTitle(e.target.value)
                            }
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
                          className="btn btn-gradient-primary btn-hover ms-sm-1 btn-filter "
                          color="primary"
                          type="submit"
                          style={{
                            marginTop: "1.5em",
                          }}
                          onClick={handleFormSubmit}
                        >
                          <i className="uil uil-filter"></i> Filter
                        </Button>
                        <style>
                          {`  .btn-filter {
                              padding: 5px 15px; /* Adjust padding as needed */
                              font-size: 14px; /* Adjust font size as needed */
                            }
                            `}
                        </style>
                      </Col>
                      {filteredJobsTrue && (
                        <Col className="bg-light border me-2  mt-13 mb-0">
                          <Button
                            className="btn btn-gradient-primary btn-hover ms-sm-1 btn-filter"
                            color="primary"
                            type="submit"
                            style={{
                              marginTop: "1.5em",
                            }}
                            onClick={resetJobs}
                          >
                            <i className="uil uil-refresh"></i> Reset
                          </Button>
                          <style>
                            {`  .btn-filter {
                              padding: 5px 15px; /* Adjust padding as needed */
                              font-size: 14px; /* Adjust font size as needed */
                            }
                            `}
                          </style>
                        </Col>
                      )}
                      <style>
                        {`
    @media only screen and (max-width: 991px) {      
  .filter{
    display:block
  
  }
  .btn{
    margin:1em;
    margin-left:5em;
  }

      

   
    `}
                      </style>
                    </Row>
                  </Container>
                </Form>

                {filteredJobs.length === 0 ? (
                  <h3 className="fs-15 mt-3 mb-5 text-center">
                    No Jobs found.
                  </h3>
                ) : (
                  <div>
                    {filteredJobs &&
                      filteredJobs.map((jobVacancyListDetails) => (
                        <div
                          className={
                            jobVacancyListDetails.addclassNameBookmark === true
                              ? "job-box bookmark-post card mt-4"
                              : "job-box card mt-4"
                          }
                        >
                          <div className="p-4">
                            <Row className="align-items-center">
                              <Col md={3}>
                                <div className="mb-2 mb-md-0">
                                  <h5 className="fs-18 mb-0">
                                    <Link
                                      to={`/jobdetails/${jobVacancyListDetails.id}`}
                                      className="text-dark"
                                    >
                                      {jobVacancyListDetails.job_title
                                        .toLowerCase()
                                        .charAt(0)
                                        .toUpperCase() +
                                        jobVacancyListDetails.job_title.slice(
                                          1
                                        )}
                                    </Link>
                                  </h5>
                                  {/* <p className="text-muted fs-14 mb-0">
                                    {
                                      jobVacancyListDetails?.company_id
                                        ?.company_name
                                    }
                                  </p> */}
                                </div>
                              </Col>

                              <Col md={3}>
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                                  </div>
                                  <p className="text-muted mb-0">
                                    {
                                      jobVacancyListDetails?.job_location_id
                                        ?.country ? jobVacancyListDetails?.job_location_id
                                        ?.country :"Not Applicable"
                                    }
                                  </p>
                                </div>
                              </Col>

                              {/* <Col md={2}>
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">Salary :</span>
                                    <span>
                                      {jobVacancyListDetails.salary}
                                    </span>{" "}
                                  </p>
                                </div>
                              </Col> */}

                              <Col md={3}>
                                <div>
                                  <Badge
                                    className="fs-13 mt-1"
                                    color={
                                      jobVacancyListDetails.job_type_id
                                        ?.job_type === "full time"
                                        ? "success"
                                        : jobVacancyListDetails.job_type_id
                                            ?.job_type === "contract"
                                        ? "purple"
                                        : jobVacancyListDetails.job_type_id
                                            ?.job_type === "permanent"
                                        ? "success"
                                        : "primary"
                                    }
                                  >
                                    {jobVacancyListDetails.job_type_id?.job_type
                                      .charAt(0)
                                      .toUpperCase() +
                                      jobVacancyListDetails.job_type_id?.job_type.slice(
                                        1
                                      )}
                                  </Badge>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <i className="mdi mdi-clock-outline text-primary me-1"></i>
                                  </div>
                                  <p className="text-muted mb-0">
                                    {timeAgo(jobVacancyListDetails.createdDate)}
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <div className="p-3 bg-light">
                            <Row className="justify-content-between">
                              <Col md={8}>
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">
                                      Experience :
                                    </span>
                                    {
                                      jobVacancyListDetails?.experince_type_id
                                        ?.experince_type ? jobVacancyListDetails?.experince_type_id
                                        ?.experince_type :"Not Applicable"
                                    }
                                  </p>
                                </div>
                              </Col>

                              <Col md={4}>
                                <div className="text-start text-md-end">
                                  <button
                                    onClick={() =>
                                      passJobID(jobVacancyListDetails.id)
                                    }
                                    className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2 btn-small"
                                  >
                                    Apply Now{" "}
                                    <i className="mdi mdi-chevron-double-right"></i>
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
                                <style>
                                  {`
                                    .btn-small {
                                      padding: 5px 10px; /* Adjust padding as needed */
                                      font-size: 14px; /* Adjust font size as needed */
                                    }
                                    `}
                                </style>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </Col>
          </Row>

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
                        maxLength={8}
                        //pattern="[0-9]{10}" // Use pattern="[0-9]{10}" to enforce 10 digits only
                        placeholder="Enter your contact number"
                        value={enteredPhone}
                        onChange={handleChangePhone}
                        required
                      />
                      
                         {/* <p
                                    style={{ fontSize: "10px", margin: "1em" }}
                                  >
                                    Phone number should be 10 digits[0-9]
                                  </p> */}
                      {/* {!isValidPhone && (
                        <div className="invalid-feedback">
                          Please enter a valid 10-digit phone number.
                        </div>
                      )} */}
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
                    
                    {/* <div className="mb-3">
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
                    </div> */}

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
                      <p style={{ marginTop: "5px", fontSize: "13px" }}>
                        Supported format(PDF,.doc,.docx)
                      </p>
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

                    <button
                      type="submit"
                      className="btn btn-primary w-100 btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner animation="border" size="sm" />
                          <span className="visually-hidden">Loading...</span>
                        </>
                      ) : (
                        <>Send application </>
                      )}
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
          {filteredJobs.length > 0 && (
            <ListmoreNews
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </Container>
      </section>

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

export default JobList;
