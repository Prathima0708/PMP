import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MetaTags from "react-meta-tags";
import Section from "./Section";

import { subURL } from "../../../utils/URLs";
import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import Footer from "../../Layout/CommonLayout/Footer";
import ListmoreNews from "../../News/NewsList/ListmoreNews";
const AdminViewJobList = (props) => {
  const [jobTypeOptions, setJobTypeOptions] = useState([]);

  const [jobs, setJobs] = useState([]);
  const [filteredJobsTrue, setFilteredJobsTrue] = useState(false);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sendSelectedCountry, setSendSelectedCountry] = useState(null);

  const [companyNameOrJobTitle, setCompanyNameOrJobTitle] = useState("");

  const [filteredJobs, setFilteredJobs] = useState([]);

  const [jobType, setJobType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 3;
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (jobs.length > 0) {
      const filteredData = jobs.slice(startIndex, endIndex);
      setFilteredJobs(filteredData);
    }
  }, [jobs, startIndex, endIndex]);
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
      .get(`${subURL}/post_job/`)
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
    setFilteredJobsTrue(true);

    setCompanyNameOrJobTitle("");
    setSelectedCountry("");
    setJobType("");
  }
  const resetJobs = () => {
    const fetchJobs = async () => {
      const response = await fetch(`${subURL}/post_job/`);
      const data = await response.json();

      setJobs(data);
    };

    fetchJobs();
    setFilteredJobsTrue(false);
  };
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
                    <Row>
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
                          color="primary"
                          type="submit"
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
                            style={{
                              marginTop: "1em",
                            }}
                            onClick={resetJobs}
                          >
                            <i className="uil uil-filter"></i> Reset
                          </Button>
                        </Col>
                      )}
                    </Row>
                  </Container>
                </Form>

                {jobs.length === 0 ? (
                  <p className="text-center fs-16 mt-13">No jobs found.</p>
                ) : (
                  <div>
                    {filteredJobs.map((jobVacancyListDetails, key) => (
                      <div
                        key={key}
                        className={
                          jobVacancyListDetails.addclassNameBookmark === true
                            ? "job-box bookmark-post card mt-4"
                            : "job-box card mt-4"
                        }
                      >
                        <div className="bookmark-label text-center">
                          <Link to="#" className="align-middle text-white">
                            <i className="mdi mdi-star"></i>
                          </Link>
                        </div>
                        <div className="p-4">
                          <Row className="align-items-center">
                            <Col md={2}>
                              <div className="text-center mb-4 mb-md-0">
                                <img
                                  src={
                                    jobVacancyListDetails.company_id
                                      ?.companyimage
                                  }
                                  alt="img1"
                                  className="img-fluid rounded-3"
                                />
                              </div>
                            </Col>

                            <Col md={3}>
                              <div className="mb-2 mb-md-0">
                                <h5 className="fs-18 mb-0">
                                  <Link
                                    to={`/viewjob/${jobVacancyListDetails.id}`}
                                    className="text-dark"
                                  >
                                    {jobVacancyListDetails.job_title}
                                  </Link>
                                </h5>
                                <p className="text-muted fs-14 mb-0">
                                  {
                                    jobVacancyListDetails.company_id
                                      .company_name
                                  }
                                </p>
                              </div>
                            </Col>

                            <Col md={3}>
                              <div className="d-flex mb-2">
                                <div className="flex-shrink-0">
                                  <i className="mdi mdi-map-marker text-primary me-1"></i>
                                </div>
                                <p className="text-muted mb-0">
                                  {
                                    jobVacancyListDetails.job_location_id
                                      .country
                                  }
                                </p>
                              </div>
                            </Col>

                            <Col md={2}>
                              <div className="d-flex mb-0">
                                <div className="flex-shrink-0">
                                  <i className="uil uil-dollar-sign text-primary me-1"></i>
                                </div>
                                <p className="text-muted mb-0">
                                  {" "}
                                  {jobVacancyListDetails.salary}
                                </p>
                              </div>
                            </Col>

                            <Col md={2}>
                              <div>
                                <span
                                  className={
                                    "badge bg-soft-success fs-13 mt-1 mx-1"
                                  }
                                >
                                  {jobVacancyListDetails.job_type_id.job_type
                                    .charAt(0)
                                    .toUpperCase() +
                                    jobVacancyListDetails.job_type_id.job_type.slice(
                                      1
                                    )}
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="p-3 bg-light">
                          <Row className="justify-content-between">
                            <Col md={4}>
                              <div>
                                <p className="text-muted mb-0">
                                  <span className="text-dark">
                                    Experience :
                                  </span>
                                  {
                                    jobVacancyListDetails.experince_type_id
                                      ?.experince_type
                                  }
                                </p>
                              </div>
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
        </Container>
        <ListmoreNews
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AdminViewJobList;
