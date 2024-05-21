import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CardBody,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
} from "reactstrap";

import axios from "axios";
import { subURL } from "../../../utils/URLs";
import ListmoreNews from "../../News/NewsList/ListmoreNews";
import { Container, Form, FormGroup } from "react-bootstrap";

const CandidateDetails = () => {
  const [filterStatus, setFilterStatus] = useState("");

  const [candidateData, setCandidateData] = useState([]);
  const [appliedJobTitle, setAppliedJobTitle] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredJobsTrue, setFilteredJobsTrue] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [filterJobPostId, setFilterJobPostId] = useState("");
  const [selectedJobTitle, setSelectedJobTitle] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

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
      const slicedData = candidateData.slice(startIndex, endIndex);
      setFilteredJobs(slicedData);
    }
  };

  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5; // Change this to the number of items to display per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (filteredData.length === 0 && candidateData.length > 0) {
      const slicedData = candidateData.slice(startIndex, endIndex);
      setFilteredJobs(slicedData);
    }
  }, [currentPage, filteredData, candidateData, itemsPerPage]);

  useEffect(() => {
    async function fetechUserId() {
      const res = await axios.get(`${subURL}/applyjob/`);
      const uniqueJobTitles = Array.from(
        new Set(res.data.map((item) => item.job_post_id.job_title))
      );
      console.log(uniqueJobTitles);
      setAppliedJobTitle(uniqueJobTitles);

      setCandidateData(res.data);

      const initialTotalPages = Math.ceil(res.data.length / itemsPerPage);
      setTotalPages(initialTotalPages);
      setFilteredJobs(res.data.slice(0, itemsPerPage));
    }
    fetechUserId();
  }, []);

  async function handleStatusClick(id, jobpostid, status) {
    const formData = {
      job_post_id: jobpostid,
      status: status,
    };

    try {
      let headers = {
        "Content-Type": "application/json; charset=utf-8",
      };
      const res = await axios.put(`${subURL}/applyjob/${id}/`, formData, {
        headers: headers,
      });

      if (res.status === 201) {
        setModalTitle("Success");
        setSuccessMessage("Status updated Successfully !");
        setShowModal(true);
        setEditModal(false);

        async function fetchData() {
          try {
            const res = await axios.get(`${subURL}/applyjob/`);

            const updatedData = res.data;

            // Update the jobs state with the fetched data
            setCandidateData(updatedData);

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

  // async function handleFormSubmit(e) {
  //   e.preventDefault();

  //   const response = await axios.get(
  //     `${subURL}/statuswisefilter/${filterStatus}/`
  //   );
  //   const filteredData = response.data;
  //   if (filteredData.length === 0) {
  //     setFilteredJobs([]);
  //     setCandidateData([]);
  //   }
  //   const filteredTotalPages = Math.ceil(filteredData.length / itemsPerPage);

  //   setTotalPages(filteredTotalPages);
  //   setFilteredData(filteredData);
  //   setFilteredJobs(filteredData.slice(0, itemsPerPage));
  //   setCurrentPage(1);
  //   setFilteredJobsTrue(true);

  //   setFilterStatus("");
  // }

  async function handleFilter(e) {
    setLoading(true);
    e.preventDefault();

    const response = await axios.get(
      `${subURL}/jobwisefilter/${filterJobPostId}/`
    );
    const filteredData = response.data;
    if (filteredData.length === 0) {
      setFilteredJobs([]);
      setCandidateData([]);
    }
    const filteredTotalPages = Math.ceil(filteredData.length / itemsPerPage);

    setTotalPages(filteredTotalPages);
    setFilteredData(filteredData);
    setFilteredJobs(filteredData.slice(0, itemsPerPage));
    setCurrentPage(1);
    setFilteredJobsTrue(true);

    setFilterStatus("");
    setLoading(false);
  }

  const resetJobs = async () => {
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
    };

    const res = await axios.get(`${subURL}/applyjob/`, {
      headers: headers,
    });

    const allJobs = res.data;
    const initialTotalPages = Math.ceil(allJobs.length / itemsPerPage);

    setCandidateData(allJobs);
    setTotalPages(initialTotalPages);
    setCurrentPage(1);
    setFilteredData(allJobs);
    setFilteredJobs(allJobs.slice(0, itemsPerPage));
    setFilteredJobsTrue(false);
    setSelectedJobTitle("")
  };

  const handleJobTitleChange = (e) => {
    const selectedJobTitle = e.target.value;
    const selectedJobPostId =
      candidateData.find(
        (item) => item.job_post_id.job_title === selectedJobTitle
      )?.job_post_id.id || "";
    setFilterJobPostId(selectedJobPostId);
    setSelectedJobTitle(selectedJobTitle);
    // Here you can send selectedJobPostId to the backend
    console.log("Selected Job Post ID:", selectedJobPostId);
  };

  return (
    <React.Fragment>
      <Row>
        <Form onSubmit={handleFilter} className="d-flex align-items-end">
          <Container>
            <Row className="filter">
              <Col className="bg-light border">
                <h3 className="fs-15 mt-4 mb-3 text-center">Filter By</h3>
              </Col>

              {/* <Col className="bg-light border">
                <FormGroup className="me-2 mt-3 mb-3">
                  <Label for="jobType" className="visually-hidden">
                    Status
                  </Label>
                  <Input
                    type="select"
                    name="jobType"
                    id="jobType"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select Status</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                    <option value="pending">Pending</option>
                  </Input>
                </FormGroup>
              </Col> */}
              <Col className="bg-light border">
                <FormGroup className="me-2 mt-3 mb-3">
                  <Label for="jobType" className="visually-hidden">
                    Status
                  </Label>
                  <Input
                    type="select"
                    name="jobType"
                    id="jobType"
                    value={selectedJobTitle}
                    onChange={handleJobTitleChange}
                    className="form-control"
                  >
                    <option value="">Select Job Title</option>
                    {appliedJobTitle.map((title) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col className="bg-light border me-2  mt-13 mb-0">
                <Button
                  className="btn btn-gradient-primary btn-hover ms-sm-1 "
                  color="primary"
                  type="submit"
                  style={{
                    marginTop: "1em",
                  }}
                  onClick={handleFilter}
                >
                                  {loading ? (
          <>
            <Spinner animation="border" size="sm" />
            <span className="visually-hidden">Loading...</span>
          </>
        ) : (
          <>
           <i className="uil uil-filter"></i> Filter
          </>
        )}
                  {/* <i className="uil uil-filter"></i> Filter */}
                </Button>
              </Col>
              {filteredJobsTrue && (
                <Col className="bg-light border me-2  mt-13 mb-0">
                  <Button
                    color="primary"
                    className="btn btn-gradient-primary btn-hover ms-sm-1 "
                    type="submit"
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
      .filter {
        display: block;
      }
      
      .filter .form-select {
        width: 100%;
      }
      
      .filter .form-select::-ms-expand {
        display: none; /* Hide the default arrow icon in Internet Explorer */
      }
      
      .filter .form-select option {
        width: 100%; /* Set the width of the options to 100% */
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  `}
              </style>
            </Row>
          </Container>
        </Form>
      </Row>

      <div className="candidate-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((candidateDetailsNew, key) => (
            <div
              key={key}
              className={
                candidateDetailsNew.addclassNameBookmark === true
                  ? "candidate-list-box bookmark-post card mt-4"
                  : "candidate-list-box card mt-4"
              }
            >
              <CardBody className="p-4">
                <Row>
                  <Col lg={3}>
                    <Row>
                      <h6 className="fs-19 mb-0">
                        <Link
                          className="primary-link"
                          to={`/candidatedetails/${candidateDetailsNew.id}`}
                        >
                          {candidateDetailsNew.applicant_name
                            .charAt(0)
                            .toUpperCase() +
                            candidateDetailsNew.applicant_name.slice(1)}
                        </Link>
                      </h6>
                    </Row>

                    <Row className="mt-3 ">
                      <ul className="list-inline mb-1 text-muted">
                        <li className="list-inline-item">
                          <i className="uil uil-envelope mail-icon"> </i>

                          {candidateDetailsNew.applicant_email}
                        </li>
                      </ul>
                    </Row>
                    <Row>
                      <div className="mt-2">
                        <span>
                          Applied date:{" "}
                          {candidateDetailsNew.apply_date?.substring(0, 10)}
                        </span>
                      </div>
                    </Row>
                  </Col>
                  <Col lg={3}>
                    {" "}
                    <div className="mt-3">
                      <span>
                        Applied for:{" "}
                        <Link
                          to={`/viewjob/${candidateDetailsNew.job_post_id.id}`}
                          className="text-muted mb-2"
                        >
                          {candidateDetailsNew.job_post_id.job_title}
                        </Link>
                      </span>
                    </div>
                  </Col>
                  <Col lg={4}>
                    {" "}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                        <button
                          className="btn btn-sm btn-outline-success"
                          onClick={() =>
                            handleStatusClick(
                              candidateDetailsNew.id,

                              candidateDetailsNew.job_post_id.id,
                              "accepted"
                            )
                          }
                        >
                          Accepted
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() =>
                            handleStatusClick(
                              candidateDetailsNew.id,

                              candidateDetailsNew.job_post_id.id,
                              "rejected"
                            )
                          }
                        >
                          Rejected
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() =>
                            handleStatusClick(
                              candidateDetailsNew.id,

                              candidateDetailsNew.job_post_id.id,
                              "pending"
                            )
                          }
                        >
                          Pending
                        </button>
                      </div>
                    </div>
                  </Col>

                  <Col lg={2}>
                    <span
                      className="badge fs-15 mt-1 p-2"
                      style={{
                        backgroundColor:
                          candidateDetailsNew.status === "accepted"
                            ? "green"
                            : candidateDetailsNew.status === "rejected"
                            ? "red"
                            : "gray",
                      }}
                    >
                      {candidateDetailsNew.status.charAt(0).toUpperCase() +
                        candidateDetailsNew.status.slice(1)}
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </div>
          ))
        ) : (
          <h3 className="fs-15 mt-3 mb-5 text-center">No candidates found.</h3>
        )}
        {filteredJobs.length > 0 && (
          <ListmoreNews
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
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

export default CandidateDetails;
