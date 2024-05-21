import React, { useEffect, useState } from "react";

import {
  Button,
  Col,
  Container,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
} from "reactstrap";
import { subURL } from "../../../utils/URLs";
import Select from "react-select";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var USERID;
const JobPostEdit = () => {
  const history = useHistory();
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [expType, setExpType] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [skillName, setSkillName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [zip, setZip] = useState("");
  const [isCompanyNameHidden, setIsCompanyNameHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");

  const [jobTypeOptions, setJobTypeOptions] = useState([]);
  const [skillSetOptions, setSkillSetOptions] = useState([]);
  const [experience, setExperience] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [salary, setSalary] = useState(0);
  
  const [userId, setUserId] = useState("");

  const [qualifications, setQualifications] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const fetchSkillSetOptions = async () => {
      const response = await fetch(`${subURL}/skillset/`);
      const data = await response.json();

      setSkillSetOptions(data);
    };

    fetchSkillSetOptions();
  }, []);

  useEffect(() => {
    const fetchSkillSetOptions = async () => {
      const response = await fetch(`${subURL}/exptype/`);
      const data = await response.json();

      setExperience(data);
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

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const selectedSkillNames = selectedSkills
      .map((skill) => skill.id)
      .join(",");

    async function storeData() {
      const formData = {
        
        job_title: jobTitle,
        job_type_id: jobType ? jobType :null,
        job_qualification:qualifications ? qualifications: [],
        // company_id: selectedCompanyId,
        is_company_name_hidden: isCompanyNameHidden,

        job_description: jobDescription,
        is_active: isActive,
        experince_type_id: expType ? expType : null,
        skill_set_id: selectedSkillNames?selectedSkillNames:null,
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

      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const res = await axios.post(`${subURL}/post_job/`, formData, {
          headers: headers,
        });

        if (res.status === 201) {
          setModalTitle("Success!");
          setSuccessMessage("Posted job successfully!");
          setShowModal(true);
          setTimeout(() => {
            history.push("/myjobs");
          }, 1000);
        } else {
          console.log("error");
        }
      } catch (e) {
        setModalTitle("Failed !");
        setSuccessMessage("Oops !Something went wrong ,please try again");
        setShowModal(true);
        console.log(e);
      }
    }
    storeData();
    setJobType("");
    setSkillName("");
    setSkillLevel("");
    setStreetAddress("");
    setCity("");
    setState("");
    setCountries("");
    setZip("");
    setJobDescription("");
    setSelectedCountry("");
    setJobTitle("");
    setIsActive(false);
    setIsCompanyNameHidden(false);
    setCompanies([]);
    setSalary("");
    setSkillSetOptions([]);
    setExpType("");
    setLoading(false);
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

  const handleDeleteQualification = (id) => {
    const updatedQualifications = qualifications.filter(
      (qualification) => qualification.id !== id
    );
    setQualifications(updatedQualifications);
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Post a New Job!</h5>
              </div>
            </Col>
          </Row>
          <form
            action="#"
            className="job-post-form shadow mt-4"
            onSubmit={handleSubmit}
          >
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
                <Col lg={12}>
                  <Label>Add Qualifications</Label>
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
                        style={{ cursor: "pointer", marginLeft: "3em",marginTop:'7px' }}
                      />
                    </div>
                  ))}
                  <Button onClick={handleAddQualification} className="mt-3 mb-4" style={{marginLeft:'1em'}}>
                    Add
                  </Button>
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
                      <option value="">Select Job Type</option>
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
                  <div>
                    <label htmlFor="skillname">Select Skills:</label>
                    <select
                      
                      id="skillname"
                      onChange={handleSelectSkill}
                    >
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
                          <button onClick={() => handleRemoveSkill(skill)}>
                            x
                          </button>
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
                </Col>

                <Col lg={3}>
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
                </Col>

                <Col lg={3}>
                  <div className="mb-4">
                    <Label for="salary">Salary</Label>
                    <Input
                     // required
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
                <Col lg={6}>
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
                      <option value="">Select Company Name</option>
                      {companies?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.company_name.charAt(0).toUpperCase() +
                            option.company_name.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </div>
                </Col> */}
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
                    <Label for="country">Country</Label>

                    <Select
                      
                      placeholder="Select Country"
                      options={countries}
                      value={selectedCountry}
                      onChange={handleChange}
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
                      Job Is Active
                    </Label>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="mb-4">
                    <Label for="jobDescription">Job Description</Label>
                    <Input
                      rows="5"
                     
                      type="textarea"
                      name="jobDescription"
                      id="jobDescription"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Button
                      type="submit"
                      className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2"
                      disabled={loading}
                    >
                                     {loading ? (
          <>
            <Spinner animation="border" size="sm" />
            <span className="visually-hidden">Loading...</span>
          </>
        ) : (
          <>
            Submit <i className="mdi mdi-send"></i>
          </>
        )}
                    
                    </Button>
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
              </Row>
            </div>
          </form>
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
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobPostEdit;
