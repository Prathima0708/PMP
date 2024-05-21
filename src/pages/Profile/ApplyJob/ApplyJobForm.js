import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
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
import StarRatings from "react-star-ratings";

import { subURL } from "../../../utils/URLs";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
var USERID;
const ApplyJobForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentSalary, setCurrentSalary] = useState(0);
  const [salaryFrequency, setSalaryFrequency] = useState("");
  const [currency, setCurrency] = useState("");
  const [skills, setSkills] = useState("");
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
  const [percentage, setPercentage] = useState("");
  const [cgpa, setCgpa] = useState("");

  const [skillLevel, setSkillLevel] = useState(0);
  const [skillName, setSkillName] = useState("");
  const [skillSetOptions, setSkillSetOptions] = useState([]);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

  const [filename, setFilename] = useState("");
  const [displayedFilename, setDisplayedFilename] = useState("");

  const [getSingleData, setSingleData] = useState([]);
  const [getJobTitle, setSingleJobTitle] = useState([]);
  const [userId, setUserId] = useState("");

  const [seekerProfileData, setSeekerProfileData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  const [selectedSkills, setSelectedSkills] = useState([]);

  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
      const res = await axios.get(`${subURL}/seeker_profile/${userId}`);

      setSeekerProfileData(res.data);
    }
    fetechUserId();
  }, [userId]);

  useEffect(() => {
    async function fetechUserId() {
      const res = await axios.get(`${subURL}/education_detail/${userId}`);

      setEducationData(res.data);
    }
    fetechUserId();
  }, [userId]);

  useEffect(() => {
    axios
      .get(`${subURL}/post_job/${id}`)
      .then((response) => {
        setSingleData(response.data.company_id.company_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedSkillNames = selectedSkills
      .map((skill) => skill.id)
      .join(",");
    async function storeData() {
      const formData = new FormData();
      formData.append("user_account_id", userId);
      formData.append("first_name", firstName || educationData.first_name);
      formData.append("last_name", lastName || educationData.last_name);
      formData.append("current_salary", currentSalary);
      formData.append("is_annually_monthly", salaryFrequency);
      formData.append("currency", currency);
      formData.append("certificate_degree_name", degree);
      formData.append("major", "test");
      formData.append("institute_university_name", universityName);
      formData.append("starting_date", educationStartDate);
      formData.append("completion_date", educationEndDate);
      formData.append("percentage", percentage || educationData.percentage);

      formData.append("cgpa", cgpa || educationData.cgpa);
      formData.append("is_current_job", currentlyWorking);

      formData.append("start_date", startDate);
      formData.append("end_date", endDate);
      formData.append("job_title", getJobTitle);

      formData.append("company_name", getSingleData);
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
        const res = await axios.put(
          `${subURL}/seeker_profile/${userId}/`,
          formData,
          {
            headers: headers,
          }
        );

        if (res.status === 201) {
          setModalTitle("Success");
          setSuccessMessage("Updated Successfully !Apply for job ?");
          setShowModal(true);
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
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Apply for a New Job!</h5>
              </div>
            </Col>
          </Row>
          <form
            action="#"
            className="job-post-form shadow "
            onSubmit={handleSubmit}
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
                      value={seekerProfileData.first_name || firstName}
                      //value={firstName}
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
                      value={seekerProfileData.last_name || lastName}
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

                <Col lg={6}>
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
                  <FormGroup>
                    <Label for="skillLevel">Skill Level</Label>

                    <StarRatings
                      rating={skillLevel}
                      starRatedColor="#F9A52B"
                      starHoverColor="#F9A52B"
                      starDimension="30px"
                      starSpacing="5px"
                      changeRating={(newRating) => setSkillLevel(newRating)}
                    />
                    {/* </Input> */}
                  </FormGroup>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="degree" className="form-label">
                      Degree
                    </Label>
                    <Input
                      type="text"
                      value={degree || educationData.certificate_degree_name}
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
                        educationData.institute_university_name
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
                      value={educationStartDate || educationData.starting_date}
                      onChange={(e) => setEducationStartDate(e.target.value)}
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
                      type="date"
                      min={educationStartDate}
                      className="form-control"
                      id="endyear"
                      value={educationEndDate || educationData.completion_date}
                      onChange={(e) => setEducationEndDate(e.target.value)}
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
                    value={percentage || educationData.percentage}
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
                      value={cgpa || educationData.cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      placeholder="CGPA"
                    />
                  </div>
                </Col>

                <Col lg={12} style={{ marginTop: "3%" }}>
                  <div className="mb-4" style={{ display: "flex" }}>
                    <Label htmlFor="currentlyWorking" className="form-label">
                      Currently working &nbsp;
                    </Label>
                    <Input
                      type="checkbox"
                      className="form-control"
                      id="currentlyWorking"
                      checked={currentlyWorking}
                      onChange={(e) => setCurrentlyWorking(e.target.checked)}
                    />
                  </div>
                </Col>

                {currentlyWorking && (
                  <Col lg={6}>
                    <div className="mb-4">
                      <Label htmlFor="companyname" className="form-label">
                        Company Name
                      </Label>
                      <Input
                        type="text"
                        id="companyname"
                        //    value={getSingleData}
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                      ></Input>
                    </div>
                  </Col>
                )}

                {currentlyWorking && (
                  <Col lg={6}>
                    <div className="mb-4">
                      <Label htmlFor="jobtitle" className="form-label">
                        Job Title
                      </Label>
                      <Input
                        type="text"
                        // value={getJobTitle}
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                        className="form-control"
                        id="jobtitle"
                        placeholder="Job Title"
                      />
                    </div>
                  </Col>
                )}

                {currentlyWorking && (
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
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                      />
                    </div>
                  </Col>
                )}

                {currentlyWorking && (
                  <Col lg={6}>
                    <div className="mb-4">
                      <Label htmlFor="enddate" className="form-label">
                        Duration To:
                      </Label>
                      <Input
                        type="date"
                        min={startDate}
                        className="form-control"
                        id="enddate"
                        placeholder="End date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                      />
                    </div>
                  </Col>
                )}

                {currentlyWorking && (
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
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                        required
                      />
                    </div>
                  </Col>
                )}
                {currentlyWorking && (
                  <Col lg={4}>
                    <div className="mb-4">
                      <Label htmlFor="currency" className="form-label">
                        Select Currency:
                      </Label>
                      <Input
                        type="select"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        required
                      >
                        <option value="">-- Select Currency --</option>
                        <option value="rupees">Rupees</option>
                        <option value="dollar">Dollar</option>
                      </Input>
                    </div>
                  </Col>
                )}
                {currentlyWorking && (
                  <Col lg={4}>
                    <div className="mb-4">
                      <Label htmlFor="monthlyorannually" className="form-label">
                        Monthly or Annually:
                      </Label>
                      <Input
                        type="select"
                        value={salaryFrequency}
                        onChange={(e) => setSalaryFrequency(e.target.value)}
                        required
                      >
                        <option value="">-- Select Frequency --</option>
                        <option value="monthly">Monthly</option>
                        <option value="annually">Annually</option>
                      </Input>
                    </div>
                  </Col>
                )}

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

                {currentlyWorking && (
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
                        value={rolesAndResponsibility}
                        onChange={(e) =>
                          setRolesAndResponsibility(e.target.value)
                        }
                        required
                      ></textarea>
                    </div>
                  </Col>
                )}

                {currentlyWorking && (
                  <Col lg={6}>
                    <div className="mb-4">
                      <Label for="country">Job Location</Label>

                      <Select
                        placeholder="Select Country"
                        options={countries}
                        value={selectedCountry}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                )}

                {currentlyWorking && (
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
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </Col>
                )}
                {currentlyWorking && (
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
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                  </Col>
                )}
                <Col lg={12}>
                  <div className="mb-4">
                    <Label for="companyImage">Upload CV</Label>
                    <Input
                      type="file"
                      name="companyImage"
                      id="companyImage"
                      // accept="image/*"

                      // onChange={(e) => setFilename(e.target.files[0])}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFilename(file);
                        setDisplayedFilename(seekerProfileData.uploaded_cv);
                      }}
                    />
                    {displayedFilename && (
                      <p>Selected file: {displayedFilename}</p>
                    )}
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/home" className="btn btn-success">
                      Back
                    </Link>
                    <Button className="btn btn-purple">
                      Update <i className="mdi mdi-send"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
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

export default ApplyJobForm;
