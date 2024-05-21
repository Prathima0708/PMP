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
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  FormGroup,
} from "reactstrap";

import classnames from "classnames";
import StarRatings from "react-star-ratings";

//Images Import
import userImage2 from "../../../assets/images/user/img-02.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Select from "react-select";
var USERID;
const RightSideContent = () => {
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentSalary, setCurrentSalary] = useState(0);
  const [salaryFrequency, setSalaryFrequency] = useState("");
  const [currency, setCurrency] = useState("");
  const [skills, setSkills] = useState([]);
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [rolesAndResponsibility, setRolesAndResponsibility] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [educationEndDate, setEducationEndDate] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [cgpa, setCgpa] = useState(0);

  const [skillLevel, setSkillLevel] = useState(0);
  const [skillName, setSkillName] = useState("");
  const [skillSetOptions, setSkillSetOptions] = useState([]);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

  const [filename, setFilename] = useState("");
  const [getSingleData, setSingleData] = useState([]);

  const [userData, setUserData] = useState([]);

  const [getJobTitle, setSingleJobTitle] = useState([]);
  const [userId, setUserId] = useState("");

  const [userProfile, setUserProfile] = useState(null);
  const [newprofilePhoto, setNewProfilePhoto] = useState(null);

  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [fetchSkills, setFetchSkills] = useState([]);

  const [experiences, setExperiences] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [seekerProfileData, setSeekerProfileData] = useState(null);

  const [fetchSkillLevel, setFetchSkillLevel] = useState(null);

  const [applyjobModal, setapplyjobModal] = useState(false);

  const history = useHistory();

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
    async function fetechUserId() {
      const res = await axios.get(`${subURL}/user_save_account/${userId}/`);
      setUserData(res.data);
      setUserProfile(res.data.user_image);
    }
    fetechUserId();
  }, [userId]);

  const handleProfilePhotoChange = (event) => {
    setNewProfilePhoto(event.target.files[0]);
  };

  useEffect(() => {
    axios
      .get(`${subURL}/post_job/${id}`)
      .then((response) => {
     
        setSingleData(response.data.company_id.company_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${subURL}/education_detail/${userId}/`)
      .then((response) => {
        setEducationData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  useEffect(() => {
    axios
      .get(`${subURL}/seeker_skill_set/${userId}/`)
      .then((response) => {
        setFetchSkills(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  useEffect(() => {
    const fetchSkillLevelFromBackend = async () => {
      try {
        const response = await fetch(`${subURL}/seeker_skill_set/${userId}/`);
        const data = await response.json();
        // Assuming the backend response includes the skill level value in the `skillLevel` property
        const skillLevel = data.skillLevel;
        setFetchSkillLevel(skillLevel);
      } catch (error) {
        // Handle error
        console.error("Error fetching skill level:", error);
      }
    };

    fetchSkillLevelFromBackend();
  }, [userId]);

  useEffect(() => {
    if (fetchSkillLevel) {
      setSkillLevel(fetchSkillLevel);
    }
  }, [fetchSkillLevel]);

  useEffect(() => {
    axios
      .get(`${subURL}/seeker_profile/${userId}/`)
      .then((response) => {
        setSeekerProfileData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(`${subURL}/seeker_skill_set/${userId}/`);
        setSkills(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSkills();
  }, [userId]);

  useEffect(() => {
    axios
      .get(`${subURL}/experince_detail/${userId}/`)
      .then((res) => {
        setExperiences(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    axios
      .get(`${subURL}/post_job/${id}`)
      .then((response) => {
        setSingleJobTitle(response.data.job_title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    const fetchSkillSetOptions = async () => {
      const response = await fetch(`${subURL}/skillset/`);
      const data = await response.json();

      setSkillSetOptions(data);
    };

    fetchSkillSetOptions();
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
  const handleChange = (selectedOption) => {
    const countryName = selectedOption ? selectedOption.label : "";
    setSelectedCountry(selectedOption);
    setSendSelectedCountry(countryName);
  };
  const handleSelectSkill = (e) => {
    const selectedSkill = skillSetOptions.find(
      (skill) => skill.id === parseInt(e.target.value)
    );
    if (!selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
  };
  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };
  const handleRemoveSkill1 = (skillToRemove) => {
    setFetchSkills(fetchSkills.filter((skill) => skill !== skillToRemove));
  };

  function applyForJob() {
    setShowModal(false);
    setModalTitle("Success");
    setSuccessMessage("Apply for job !");

    setapplyjobModal(true);
  }

  async function postJob() {
    history.push("/home");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const selectedSkillNames = selectedSkills
      .map((skill) => skill.id)
      .join(",");
    

    const formData = new FormData();
    formData.append("user_account_id", userId);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("current_salary", currentSalary);
    formData.append("is_annually_monthly", salaryFrequency);
    formData.append("currency", currency);
    formData.append("certificate_degree_name", degree);
    formData.append("major", "test");
    formData.append("institute_university_name", universityName);
    formData.append("starting_date", educationStartDate);
    formData.append("completion_date", educationEndDate);
    formData.append("percentage", percentage);

    formData.append("cgpa", cgpa);
    formData.append("is_current_job", currentlyWorking);

    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
    formData.append("job_title", jobTitle);

    formData.append("company_name", companyName);
    formData.append("job_location_city", city);
    formData.append("job_location_state", state);
    formData.append("job_location_country", sendSelectedCountry);
    formData.append("description", rolesAndResponsibility);
    formData.append("skill_set_id", selectedSkillNames);
    formData.append("skill_level", skillLevel);
    formData.append("uploaded_cv", filename);

    try {
      let headers = {
        "Content-Type": "multipart/form-data",
      };
      const res = await axios.post(`${subURL}/seeker_profile/`, formData, {
        headers: headers,
      });

      if (res.data.success === true) {
       
        setModalTitle("Success");
        setSuccessMessage("Profile saved Successfully !Apply for the job");
        setShowModal(true);
        setTimeout(() => {
          history.push("/home");
        }, 1500);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 400) {
        setModalTitle("Failed !");
        setSuccessMessage("Profile already Exists!You can update it");
        setShowModal(true);
      } else {
        setModalTitle("Failed !");
        setSuccessMessage("Oops !Something went wrong ,please try again");
        setShowModal(true);
      }
    }

    setFirstName("");
    setLastName("");
    setCurrentSalary("");
    setSalaryFrequency("");
    setCurrency("");
    setCurrentlyWorking("");
    setCompanyName("");
    setSkillName("");
    setSkillLevel("");
    setStartDate("");
    setEndDate("");
    setJobTitle("");
    setRolesAndResponsibility("");
    setDegree("");
    setUniversityName("");
    setEducationStartDate("");
    setEducationEndDate("");
    setPercentage("");
    setCgpa("");
    setSelectedCountry("");
    setCity("");
    setState("");
    setFilename("");
  }

  async function updateHandler() {
    const selectedSkillNames = selectedSkills
      .map((skill) => skill.id)
      .join(",");

    const formData = new FormData();
    formData.append("user_account_id", userId);
    formData.append("first_name", firstName || seekerProfileData?.first_name);
    formData.append("last_name", lastName || seekerProfileData?.last_name);
    formData.append(
      "current_salary",
      currentSalary || seekerProfileData?.current_salary
    );
    formData.append(
      "is_annually_monthly",
      salaryFrequency || seekerProfileData?.is_annually_monthly
    );
    formData.append("currency", currency || seekerProfileData?.currency);
    formData.append(
      "certificate_degree_name",
      degree || educationData?.certificate_degree_name
    );
    formData.append("major", "test");
    formData.append(
      "institute_university_name",
      universityName || educationData?.institute_university_name
    );
    formData.append(
      "starting_date",
      educationStartDate || educationData?.starting_date?.substring(0, 10)
    );
    formData.append(
      "completion_date",
      educationEndDate || educationData?.completion_date?.substring(0, 10)
    );
    formData.append("percentage", percentage || educationData?.percentage);

    formData.append("cgpa", cgpa || educationData?.cgpa);
    formData.append(
      "is_current_job",
      currentlyWorking || experiences?.is_current_job
    );

    formData.append(
      "start_date",
      startDate || experiences?.start_date?.substring(0, 10)
    );
    formData.append(
      "end_date",
      endDate || experiences?.end_date?.substring(0, 10)
    );
    formData.append("job_title", jobTitle || experiences?.job_title);

    formData.append("company_name", companyName || experiences?.company_name);
    formData.append(
      "job_location_city",
      city || experiences?.job_location_city
    );
    formData.append(
      "job_location_state",
      state || experiences?.job_location_state
    );
    formData.append(
      "job_location_country",
      sendSelectedCountry || experiences?.job_location_country
    );
    formData.append(
      "description",
      rolesAndResponsibility || experiences?.description
    );
    formData.append("skill_set_id", selectedSkillNames);
    formData.append("skill_level", skillLevel);
    if (filename) {
      formData.append("uploaded_cv", filename);
    }

    if (newprofilePhoto) {
      formData.append("user_image", newprofilePhoto);
    } else {
      const savedUserImage = userProfile;
      const userImageWithoutFiles =
        savedUserImage && savedUserImage.replace("/files", "");
      formData.append("user_image", userImageWithoutFiles || null);
    }

    try {
      let headers = {
        "Content-Type": "multipart/form-data",
      };
      const res = await axios.put(
        `${subURL}/seeker_profile/${userId}/`,
        formData,
        {
          headers: headers,
        }
      );
  

      if (res.data.success === true) {
        setModalTitle("Success");
        setSuccessMessage("Updated Successfully !");
        setShowModal(true);
       
        let existingValue = localStorage.getItem("username");

        // Update the value if it exists
        if (existingValue !== null) {
          // Update with res.data.first_name if it is not undefined
          if (firstName || seekerProfileData?.first_name !== undefined) {
            existingValue = firstName || seekerProfileData?.first_name;
            localStorage.removeItem("username");
            localStorage.setItem("username", existingValue);
          }
        }
      } else {
        console.log("error");
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (e) {
      console.log(e);

      setModalTitle("Failed !");
      setSuccessMessage("Oops !Something went wrong ,please try again");
      setShowModal(true);
    }

    setFirstName("");
    setLastName("");
    setCurrentSalary("");
    setSalaryFrequency("");
    setCurrency("");
    setCurrentlyWorking("");
    setCompanyName("");
    setSkillName("");
    setSkillLevel("");
    setStartDate("");
    setEndDate("");
    setJobTitle("");
    setRolesAndResponsibility("");
    setDegree("");
    setUniversityName("");
    setEducationStartDate("");
    setEducationEndDate("");
    setPercentage("");
    setCgpa("");
    setSelectedCountry("");
    setCity("");
    setState("");
    setFilename("");
  }

  function callfunction() {
    if (
      educationData ||
      experiences ||
      (seekerProfileData && seekerProfileData.length > 0)
    ) {
      updateHandler(); // Call updateHandler function if any of the conditions are true
    } else {
      handleSubmit();
    }
  }

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
                <div className="candidate-education-details ">
                  <h6 className="fs-18 fw-bold mb-0">Education</h6>
                  {educationData ? (
                    <div
                      className="candidate-education-content mt-3 d-flex"
                      key={educationData.id}
                    >
                      <div className="circle flex-shrink-0 bg-soft-primary">
                        {educationData.certificate_degree_name
                          ?.charAt(0)
                          .toUpperCase()}
                      </div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">
                          {educationData.certificate_degree_name
                            .charAt(0)
                            .toUpperCase() +
                            educationData.certificate_degree_name.slice(1)}{" "}
                          - {educationData.major}
                        </h6>
                        <p className="mb-2 text-muted">
                          {educationData.institute_university_name} - (
                          {new Date(educationData.starting_date).getFullYear()}{" "}
                          -{" "}
                          {new Date(
                            educationData.completion_date
                          ).getFullYear()}
                          )
                        </p>
                        <p className="text-muted">
                          There are many variations of passages of available,
                          but the majority alteration in some form. As a highly
                          skilled and successful {educationData.major} with more
                          than {educationData.cgpa} CGPA of experience.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <h3 className="fs-15 mt-3 mb-5">No education data found</h3>
                  )}
                </div>

                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Experiences</h6>

                  {experiences?.is_current_job === true && experiences ? (
                    <div
                      className="candidate-education-content mt-4 d-flex"
                      key={experiences.id}
                    >
                      <div className="circle flex-shrink-0 bg-soft-primary">
                        {" "}
                        {experiences.company_name?.charAt(0).toUpperCase()}{" "}
                      </div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">{experiences.job_title}</h6>
                        <p className="mb-2 text-muted">
                          {experiences?.company_name} - (
                          {experiences?.start_date?.substring(0, 10)} to{" "}
                          {experiences?.end_date?.substring(0, 10)})
                        </p>
                        <p className="text-muted mb-0">
                          {experiences.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <h3 className="fs-15 mt-3 mb-5">
                      No experience details found
                    </h3>
                  )}
                </div>

                {/* <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Skills</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  <span className="badge fs-13 bg-soft-blue mt-2">
                    Cloud Management
                  </span>
                  <span className="badge fs-13 bg-soft-blue mt-2">
                    Responsive Design
                  </span>
                  <span className="badge fs-13 bg-soft-blue mt-2">
                    Network Architecture
                  </span>
                  <span className="badge fs-13 bg-soft-blue mt-2">PHP</span>
                  <span className="badge fs-13 bg-soft-blue mt-2">
                    Bootstrap
                  </span>
                  <span className="badge fs-13 bg-soft-blue mt-2">
                    UI & UX Designer
                  </span>
                </div> */}

                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Skills</h5>
                  {skills.length > 0 ? (
                    <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                      {skills.map((skill) => (
                        <span
                          key={skill.id}
                          className="badge fs-13 bg-soft-blue mt-2"
                        >
                          {skill.skill_set_id.skill_set_name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <h3 className="fs-15 mt-3 mb-5">No skills found</h3>
                  )}
                </div>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col lg={12}>
                    <div className="bg-soft-primary p-3">
                      <h5 className="mb-0 fs-17">Add your profile details!</h5>
                    </div>
                  </Col>
                </Row>
                <h5 className="fs-17 fw-semibold mb-3 mb-0 mt-3">My Account</h5>
                <div className="text-center">
                  <div className="mb-4 profile-user">
                    <img
                    
                      src={
                        newprofilePhoto
                          ? newprofilePhoto
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
                <form
                  action="#"
                  className="job-post-form shadow "
                  onSubmit={callfunction}
                >
                  <div className="job-post-content box-shadow-md rounded-3 p-4">
                    <Row className="row">
                      <Col lg={6}>
                        <div className="mb-4">
                          <Label htmlFor="firstname" className="form-label">
                            First Name:
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="firstname"
                            placeholder="FirstName"
                            value={firstName || seekerProfileData?.first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-4">
                          <Label htmlFor="lastname" className="form-label">
                            Last Name:
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder="LastName"
                            value={lastName || seekerProfileData?.last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                      </Col>

                      {/* <Col lg={6}>
                        <div className="mb-4">
                          <Label for="skillLevel">Skill Name</Label>
                          <Input
                            type="select"
                            name="skillname"
                            id="skillname"
                            value={skillName}
                            onChange={(e) => setSkillName(e.target.value)}
                          >
                            <option value="">Select Skill Name</option>
                            {skillSetOptions.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.skill_set_name.charAt(0).toUpperCase() +
                                  option.skill_set_name.slice(1)}
                              </option>
                            ))}
                          </Input>
                        </div>
                      </Col> */}

                      {/* <Col lg={6}>
                        <div>
                          <label htmlFor="skillname">Select Skills:</label>
                          <select id="skillname" onChange={handleSelectSkill}>
                            <option value="">Select Skill Name</option>
                            {skillSetOptions.map((skill) => (
                              <option key={skill.id} value={skill.id}>
                                {skill.skill_set_name}
                              </option>
                            ))}
                          </select>
                          <div>
                            {selectedSkills.map((skill) => (
                              <div key={skill.id} className="skill-chip">
                                {skill.skill_set_name}
                                <button
                                  onClick={() => handleRemoveSkill(skill)}
                                >
                                  x
                                </button>
                              </div>
                            ))}
                            {fetchSkills?.map((skill) => (
                              <div key={skill.id} className="skill-chip">
                                {skill.skill_set_id.skill_set_name}
                              </div>
                            ))}
                          </div>
                          <style jsx>{`
                            .skill-chip {
                              display: inline-block;
                              padding: 5px;
                              margin: 5px;
                              background-color: #eee;
                            }
                          `}</style>
                        </div>
                      </Col> */}

                      <Col lg={6}>
                        <div className="skill-select-container">
                          <label htmlFor="skillname" className="skill-label">
                            Select Skills:
                          </label>
                          <select id="skillname" onChange={handleSelectSkill}>
                            <option value="">Select Skill Name</option>
                            {skillSetOptions.map((skill) => (
                              <option key={skill.id} value={skill.id}>
                                {skill.skill_set_name}
                              </option>
                            ))}
                          </select>
                          <div className="skill-chip-container">
                            {selectedSkills.map((skill) => (
                              <div key={skill.id} className="skill-chip">
                                {skill.skill_set_name}
                                <button
                                  onClick={() => handleRemoveSkill(skill)}
                                >
                                  x
                                </button>
                              </div>
                            ))}
                            {fetchSkills?.map((skill) => (
                              <div key={skill.id} className="skill-chip">
                                {skill.skill_set_id.skill_set_name}
                                {/* <button
                                  onClick={() => handleRemoveSkill1(skill)}
                                >
                                  x
                                </button> */}
                              </div>
                            ))}
                          </div>
                        </div>
                        <style jsx>{`
                          .skill-select-container {
                            margin-bottom: 20px;
                          }

                          .skill-label {
                            margin-right: 10px;
                          }

                          .skill-chip-container {
                            margin-top: 10px;
                          }

                          .skill-chip {
                            display: inline-block;
                            padding: 5px;
                            margin: 5px;
                            background-color: #eee;
                          }
                        `}</style>
                      </Col>

                      <Col lg={6}>
                        <FormGroup>
                          <Label
                            for="skillLevel"
                            style={{ marginRight: "10px" }}
                          >
                            Skill Level :
                          </Label>

                          <StarRatings
                            rating={skillLevel}
                            starRatedColor="#F9A52B"
                            starHoverColor="#F9A52B"
                            starDimension="30px"
                            starSpacing="5px"
                            changeRating={(newRating) =>
                              setSkillLevel(newRating)
                            }
                          />
                        </FormGroup>
                      </Col>

                      {/* <Col lg={6}>
                        <div className="mb-4">
                          <Label for="skillLevel">Skill Level</Label>
                          <Input
                            type="select"
                            name="skillLevel"
                            id="skillLevel"
                            value={skillLevel}
                            onChange={(e) => setSkillLevel(e.target.value)}
                          >
                            <option value="">Select Skill Level</option>
                            <option value="1"> 1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>
                        </div>
                      </Col> */}

                      <Col lg={6}>
                        <div className="mb-4">
                          <Label htmlFor="degree" className="form-label">
                            Degree
                          </Label>
                          <Input
                            type="text"
                            value={
                              degree || educationData?.certificate_degree_name
                            }
                            onChange={(e) => setDegree(e.target.value)}
                            required
                            className="form-control"
                            id="degree"
                            placeholder="Degree"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-4">
                          <Label htmlFor="university" className="form-label">
                            University Name
                          </Label>
                          <Input
                            type="text"
                            value={
                              universityName ||
                              educationData?.institute_university_name
                            }
                            onChange={(e) => setUniversityName(e.target.value)}
                            required
                            className="form-control"
                            id="university"
                            placeholder="University Name"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-4">
                          <Label htmlFor="startyear" className="form-label">
                            Education Start Date:
                          </Label>
                          <Input
                            type="date"
                            className="form-control"
                            id="startyear"
                            value={
                              educationStartDate ||
                              educationData?.starting_date?.substring(0, 10)
                            }
                            onChange={(e) =>
                              setEducationStartDate(e.target.value)
                            }
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-4">
                          <Label htmlFor="endyear" className="form-label">
                            Education Completion Date:
                          </Label>
                          <Input
                            min={educationStartDate}
                            type="date"
                            className="form-control"
                            id="endyear"
                            value={
                              educationEndDate ||
                              educationData?.completion_date?.substring(0, 10)
                            }
                            onChange={(e) =>
                              setEducationEndDate(e.target.value)
                            }
                            required
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <Label htmlFor="percentage" className="form-label">
                          Percentage
                        </Label>
                        <Input
                          type="number"
                          className="form-control"
                          id="percentage"
                          value={percentage || educationData?.percentage}
                          onChange={(e) => setPercentage(e.target.value)}
                          placeholder="Percentage"
                        />
                      </Col>
                      <Col lg={6}>
                        <div className="mb-4">
                          <Label htmlFor="cgpa" className="form-label">
                            CGPA
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            id="cgpa"
                            value={cgpa || educationData?.cgpa}
                            onChange={(e) => setCgpa(e.target.value)}
                            placeholder="CGPA"
                          />
                        </div>
                      </Col>

                      <Col lg={12} style={{ marginTop: "3%" }}>
                        <div className="mb-4" style={{ display: "flex" }}>
                          <Label
                            htmlFor="currentlyWorking"
                            className="form-label"
                          >
                            Currently working &nbsp;
                          </Label>
                          <Input
                            type="checkbox"
                            className="form-control"
                            id="currentlyWorking"
                            checked={
                              currentlyWorking ||
                              (experiences && experiences.is_current_job)
                            }
                            onChange={(e) =>
                              setCurrentlyWorking(e.target.checked)
                            }
                          />
                        </div>
                      </Col>

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={6}>
                          <div className="mb-4">
                            <Label htmlFor="companyname" className="form-label">
                              Company Name
                            </Label>
                            <Input
                              type="text"
                              id="companyname"
                          
                              value={companyName || experiences?.company_name}
                              onChange={(e) => setCompanyName(e.target.value)}
                              required
                            ></Input>
                          </div>
                        </Col>
                      ) : null}

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={6}>
                          <div className="mb-4">
                            <Label htmlFor="jobtitle" className="form-label">
                              Job Title
                            </Label>
                            <Input
                              type="text"
                             
                              value={jobTitle || experiences?.job_title}
                              onChange={(e) => setJobTitle(e.target.value)}
                              required
                              className="form-control"
                              id="jobtitle"
                              placeholder="Job Title"
                            />
                          </div>
                        </Col>
                      ) : null}

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={6}>
                          <div className="mb-4">
                            <Label htmlFor="startdate" className="form-label">
                              Duration From:
                            </Label>
                            <Input
                              type="date"
                              className="form-control"
                              id="startdate"
                              placeholder="Start date"
                              value={
                                startDate ||
                                experiences?.start_date?.substring(0, 10)
                              }
                              onChange={(e) => setStartDate(e.target.value)}
                              required
                            />
                          </div>
                        </Col>
                      ) : null}

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={6}>
                          <div className="mb-4">
                            <Label htmlFor="enddate" className="form-label">
                              Duration To:
                            </Label>
                            <Input
                              type="date"
                              className="form-control"
                              id="enddate"
                              placeholder="End date"
                              value={
                                endDate ||
                                experiences?.end_date?.substring(0, 10)
                              }
                              onChange={(e) => setEndDate(e.target.value)}
                              required
                              min={startDate}
                            />
                          </div>
                        </Col>
                      ) : null}

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={4}>
                          <div className="mb-4">
                            <Label htmlFor="ctc" className="form-label">
                              Current Salary (CTC):
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              id="ctc"
                              placeholder="Current Salary"
                              value={
                                currentSalary ||
                                seekerProfileData?.current_salary
                              }
                              onChange={(e) => setCurrentSalary(e.target.value)}
                              required
                            />
                          </div>
                        </Col>
                      ) : null}
                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={4}>
                          <div className="mb-4">
                            <Label htmlFor="currency" className="form-label">
                              Select Currency:
                            </Label>
                            <Input
                              type="select"
                              value={currency || seekerProfileData?.currency}
                              onChange={(e) => setCurrency(e.target.value)}
                              required
                            >
                              <option value="">-- Select Currency --</option>
                              <option value="rupees">Rupees</option>
                              <option value="dollar">Dollar</option>
                            </Input>
                          </div>
                        </Col>
                      ) : null}
                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={4}>
                          <div className="mb-4">
                            <Label
                              htmlFor="monthlyorannually"
                              className="form-label"
                            >
                              Monthly or Annually:
                            </Label>
                            <Input
                              type="select"
                              value={
                                salaryFrequency ||
                                seekerProfileData?.is_annually_monthly
                              }
                              onChange={(e) =>
                                setSalaryFrequency(e.target.value)
                              }
                              required
                            >
                              <option value="">-- Select Frequency --</option>
                              <option value="monthly">Monthly</option>
                              <option value="annually">Annually</option>
                            </Input>
                          </div>
                        </Col>
                      ) : null}

                      {/* <Col lg={6}>
                        <div className="mb-4">
                          <Label htmlFor="currency" className="form-label">
                            Currency:
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="currency"
                            placeholder="Currency"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            required
                          />
                        </div>
                      </Col> */}

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={12}>
                          <div className="mb-4">
                            <Label htmlFor="jobrole" className="form-label">
                              Job Roles and Responsiblities
                            </Label>
                            <textarea
                              className="form-control"
                              id="jobrole"
                              rows="3"
                              placeholder="Enter Job roles"
                              value={
                                rolesAndResponsibility ||
                                experiences?.description
                              }
                              onChange={(e) =>
                                setRolesAndResponsibility(e.target.value)
                              }
                              required
                            ></textarea>
                          </div>
                        </Col>
                      ) : null}

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={6}>
                          <div className="mb-4">
                            <Label for="country">Job Location</Label>

                            <Select
                              placeholder="Select Country"
                              options={countries}
                            
                              defaultValue={
                                selectedCountry ||
                                (experiences && {
                                  value: experiences.job_location_country,
                                  label: experiences.job_location_country,
                                })
                              }
                              onChange={handleChange}
                            />
                          </div>
                        </Col>
                      ) : null}

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={3}>
                          <div className="mb-4">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <Input
                              type="text"
                              className="form-control"
                              id="city"
                              placeholder="City"
                              value={city || experiences?.job_location_city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                        </Col>
                      ) : null}

                      {currentlyWorking ||
                      (experiences && experiences.is_current_job) ? (
                        <Col lg={3}>
                          <div className="mb-4">
                            <label htmlFor="state" className="form-label">
                              State
                            </label>
                            <Input
                              type="text"
                              className="form-control"
                              id="state"
                              placeholder="State"
                              value={state || experiences?.job_location_state}
                              onChange={(e) => setState(e.target.value)}
                            />
                          </div>
                        </Col>
                      ) : null}

                      <Col lg={12}>
                        <div className="mb-4">
                          <Label for="companyImage">Upload CV</Label>
                          <Input
                            type="file"
                            name="companyImage"
                            id="companyImage"
                          
                            onChange={(e) => setFilename(e.target.files[0])}
                          />
                        </div>
                      </Col>
                      {seekerProfileData && seekerProfileData?.uploaded_cv && (
                        <div>
                          <Label
                            for="uploadedCV"
                            style={{ marginRight: "10px" }}
                          >
                            Already Uploaded CV :
                          </Label>

                          <a
                            //href={seekerProfileData?.uploaded_cv}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {seekerProfileData?.uploaded_cv.substring(
                              seekerProfileData?.uploaded_cv.lastIndexOf("/") +
                                1
                            )}
                          </a>
                        </div>
                      )}

                      <Col lg={12}>
                        <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                          <Link to="/home" className="btn btn-success">
                            Back
                          </Link>
                          {educationData ||
                          experiences ||
                          seekerProfileData?.length > 0 ? (
                            <Button
                              type="submit"
                              onClick={updateHandler}
                              className="btn btn-purple"
                            >
                              Update <i className="mdi mdi-send"></i>
                            </Button>
                          ) : (
                            <Button
                              type="submit"
                              onClick={handleSubmit}
                              className="btn btn-purple"
                            >
                              Submit <i className="mdi mdi-send"></i>
                            </Button>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </form>

                {/* <Form action="#">
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
                    <div className="text-center">
                      <div className="mb-4 profile-user">
                        <img
                          src={userImage2}
                          className="rounded-circle img-thumbnail profile-img"
                          id="profile-img"
                          alt=""
                        />
                        <div className="p-0 rounded-circle profile-photo-edit">
                          <Input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
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
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="choices-single-categories"
                            className="form-label"
                          >
                            Account Type
                          </label>
                          <select
                            className="form-select"
                            data-trigger
                            name="choices-single-categories"
                            id="choices-single-categories"
                            aria-label="Default select example"
                          >
                            <option value="4">Accounting</option>
                            <option value="1">IT & Software</option>
                            <option value="3">Marketing</option>
                            <option value="5">Banking</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Profile</h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Introduce Yourself
                          </Label>
                          <textarea className="form-control" rows="5">
                            Developer with over 5 years' experience working in
                            both the public and private sectors. Diplomatic,
                            personable, and adept at managing sensitive
                            situations. Highly organized, self-motivated, and
                            proficient with computers. Looking to boost
                            students’ satisfactions scores for International
                            University. Bachelor's degree in communications.
                          </textarea>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="languages" className="form-label">
                            Languages
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="languages"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="choices-single-location"
                            className="form-label"
                          >
                            Location
                          </label>
                          <select
                            className="form-select"
                            data-trigger
                            name="choices-single-location"
                            id="choices-single-location"
                            aria-label="Default select exam
                                                                            ple"
                          >
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label htmlFor="attachmentscv" className="form-label">
                            Attachments CV
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="attachmentscv"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Social Media</h5>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="facebook" className="form-label">
                            Facebook
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="facebook"
                            to="https://www.facebook.com"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="twitter" className="form-label">
                            Twitter
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="twitter"
                            to="https://www.twitter.com"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="linkedin" className="form-label">
                            Linkedin
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="linkedin"
                            to="https://www.linkedin.com"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="whatsapp" className="form-label">
                            Whatsapp
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="whatsapp"
                            to="https://www.whatsapp.com"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3 mb-3">
                      Change Password
                    </h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="current-password-input"
                            className="form-label"
                          >
                            Current password
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder="Enter Current password"
                            id="current-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label
                            htmlFor="new-password-input"
                            className="form-label"
                          >
                            New password
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder="Enter new password"
                            id="new-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label
                            htmlFor="confirm-password-input"
                            className="form-label"
                          >
                            Confirm Password
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            id="confirm-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="verification"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="verification"
                          >
                            Enable Two-Step Verification via email
                          </Label>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-4 text-end">
                    <Link to="#" className="btn btn-primary">
                      Update
                    </Link>
                  </div>
                </Form> */}
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

      <Modal isOpen={applyjobModal} toggle={() => setapplyjobModal(false)}>
        <ModalHeader toggle={() => setapplyjobModal(false)}>
          {modalTitle}
        </ModalHeader>
        <ModalBody>{successMessage}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={postJob}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default RightSideContent;
