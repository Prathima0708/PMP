

import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  FormGroup,
  Label,
 
  Form,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import { subURL } from "../../../utils/URLs";
import Select from "react-select";
import Jobcatogaries from "../jobCatogaries";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export var filteredJobs = [];
const JobSearch = () => {
  const history=useHistory()
  const [jobTypeOptions, setJobTypeOptions] = useState([]);

  const [jobs, setJobs] = useState([]);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

  const [companyNameOrJobTitle, setCompanyNameOrJobTitle] = useState("");

  const [jobType, setJobType] = useState("");

  useEffect(() => {
    const fetchJobTypeOptions = async () => {
      const response = await fetch(`${subURL}/job_type/`);
      const data = await response.json();

      setJobTypeOptions(data);
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

  const handleChange = (selectedOption) => {
    const countryName = selectedOption ? selectedOption.label : "";
    setSelectedCountry(selectedOption);
    setSendSelectedCountry(countryName);
  };

 
  async function handleFormSubmit(e) {
    e.preventDefault();

    const response = await axios.get(
      `${subURL}/filteredjob/${companyNameOrJobTitle}/${sendSelectedCountry}/${jobType}/`
    );
   
    setJobs(response.data);
 
    setCompanyNameOrJobTitle("");
    setSelectedCountry("");
    setJobType("");
  }
  return (
    <>
      <Form onSubmit={handleFormSubmit} className="d-flex align-items-end">
        <Container>
          <Row>
            <Col className="bg-light border">
              <FormGroup className="me-2 mt-3 mb-0">
                <Label for="companyNameOrJobTitle" className="visually-hidden">
                  Company Name or Job Title
                </Label>
                <Input
                  type="text"
                  name="companyNameOrJobTitle"
                  id="companyNameOrJobTitle"
                  placeholder="Company Name or Job Title"
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
                  placeholder="Select Country"
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
                style={{
                  marginTop: "1em",
                }}
                onClick={handleFormSubmit}
              >
                Find Jobs
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>

      {/* <Jobcatogaries jobs={jobs} /> */}

      {jobs.map((job) => (
        <div key={job.id} style={{ color: "white" }}>
          <h3>{job.job_title}</h3>
          <p>{job.job_description}</p>
          <p>
            {job.job_location_id.city}, {job.job_location_id.state}
          </p>
          <p>{job.job_type_id.job_type}</p>
        </div>
      ))}
    </>
  );
};

export default JobSearch;
