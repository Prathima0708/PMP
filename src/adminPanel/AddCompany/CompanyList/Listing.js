import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import { mainURL, subURL } from "../../../utils/URLs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import ListmoreNews from "../../News/NewsList/ListmoreNews";
import { Container } from "react-bootstrap";
var ID, USERID, USERTYPEID;
const Listing = () => {
  const [modal, setModal] = useState(false);
  const [delId, setDelId] = useState("");

  const openModal = () => setModal(!modal);

  const [companyData, setCompanyData] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState([]);

  const [existingImage, setExistingImage] = useState("");

  const [editModal, setEditModal] = useState(false);
  const openEditModal = () => setEditModal(!editModal);

  const [companyName, setCompanyName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [businessStream, setBusinessStream] = useState("");

  const [companyType, setCompanyType] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyHQ, setCompanyHQ] = useState("");

  const [companyWebsite, setCompanyWebsite] = useState("");
  const [establishmentDate, setEstablishmentDate] = useState("");

  const [filename, setFilename] = useState("");
  const [businessStreamOptions, setBusinessStreamOptions] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [companyNameOrJobTitle, setCompanyNameOrJobTitle] = useState("");

  const [filteredData, setFilteredData] = useState([]);
  const [userTypeId, setUserTypeId] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 3; // Change this to the number of items to display per page
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
      const slicedData = companyData.slice(startIndex, endIndex);
      setFilteredJobs(slicedData);
    }
  };

  const [showViewMoreBtn, setShowViewMore] = useState(false);
  const [filteredJobsTrue, setFilteredJobsTrue] = useState(false);

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
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (filteredData.length === 0 && companyData.length > 0) {
      const slicedData = companyData.slice(startIndex, endIndex);
      setFilteredJobs(slicedData);
    }
  }, [currentPage, filteredData, companyData, itemsPerPage]);

  useEffect(() => {
    axios
      .get(`${subURL}/company_save_details/`)
      .then((response) => {
        setCompanyData(response.data);

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

  useEffect(() => {
    const fetchBusinessStreamOptions = async () => {
      const response = await fetch(`${subURL}/business_stream/`);
      const data = await response.json();

      setBusinessStreamOptions(data);
    };

    fetchBusinessStreamOptions();
  }, []);

  async function getUserTypeID() {
    try {
      USERTYPEID = await localStorage.getItem("usertypeid");

      if (USERTYPEID !== null) {
        setUserTypeId(USERTYPEID);
      }
    } catch (e) {
      console.log(e);
    }
  }
  getUserTypeID();

  useEffect(() => {
    getUserTypeID();
  }, []);

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  function editItem(id) {
    ID = id;

    setEditModal(true);

    const filteredDummuyData = companyData.find((data) => data.id === id);
    setCompanyName(filteredDummuyData.company_name);
    setCompanyType(filteredDummuyData.company_type);
    setCompanySize(filteredDummuyData.company_size);
    setCompanyHQ(filteredDummuyData.company_location);
    setProfileDescription(filteredDummuyData.profile_description);
    setExistingImage(filteredDummuyData.company_image);
    setEstablishmentDate(filteredDummuyData.establishment_date);
    setCompanyWebsite(filteredDummuyData.company_website_url);
    setBusinessStream(filteredDummuyData.business_stream_id);
  }
  function updateHandler() {
    const formData = new FormData();
    formData.append("company_name", companyName);
    formData.append("company_type", companyType);
    formData.append("company_size", companySize);
    formData.append("company_location", companyHQ);
    formData.append("profile_description", profileDescription);
    formData.append("establishment_date", establishmentDate);
    formData.append("company_website_url", companyWebsite);
    formData.append("business_stream_id", businessStream);
    formData.append("user_account_id", userId);

    if (filename) {
      formData.append("company_image", filename);
    }
    async function updateData() {
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };

        const resLogin = await axios.put(
          `${subURL}/company_save_details/${ID}/`,
          formData,
          {
            headers: headers,
          }
        );
        if (resLogin.status === 200) {
          setModalTitle("Sucess!");
          setSuccessMessage("Updated Successfully !");
          setShowModal(true);
          setEditModal(false);
          async function fetchData() {
            try {
              const res = await axios.get(`${subURL}/company_save_details/`);

              const updatedData = res.data;

              // Update the jobs state with the fetched data
              setCompanyData(updatedData);

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
        `${subURL}/company_save_details/${delId}/`,

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
            const res = await axios.get(`${subURL}/company_save_details/`);

            //setFilteredJobs(res.data.slice(0, 3));
            const updatedData = res.data;

            // Update the jobs state with the fetched data
            setCompanyData(updatedData);

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
      console.log(error);
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${subURL}/company_save_details/${companyNameOrJobTitle}/`
    );

    const filteredData = response.data;

    if (filteredData.length === 0) {
      setFilteredJobs([]);
      setCompanyData([]);
    }

    const filteredTotalPages = Math.ceil(filteredData.length / itemsPerPage);

    setTotalPages(filteredTotalPages);
    setFilteredData(filteredData);
    setFilteredJobs(filteredData.slice(0, itemsPerPage));
    setCurrentPage(1);
    setFilteredJobsTrue(true);
    setShowViewMore(true);
    setCompanyNameOrJobTitle("");
  };

  const handleWebsiteChange = (e) => {
    const input = e.target.value;

    // Validate the input as a URL using a regular expression
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+(\.[^ "]+)+$/;
    if (urlRegex.test(input)) {
      setCompanyWebsite(input);
    } else {
      alert("Please enter a valid URL");
      return;
    }
  };

  const resetJobs = async () => {
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
    };

    const res = await axios.get(`${subURL}/company_save_details/`, {
      headers: headers,
    });

    const allJobs = res.data;
    const initialTotalPages = Math.ceil(allJobs.length / itemsPerPage);

    setCompanyData(allJobs);
    setTotalPages(initialTotalPages);
    setCurrentPage(1);
    setFilteredData(allJobs); // Reset filtered data as well
    setFilteredJobs(allJobs.slice(0, itemsPerPage));
    setFilteredJobsTrue(false);
    setShowViewMore(false);
  };
  return (
    <>
      <div className="desc">
        <div className="form-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-30 p-lg-20 mt_60 mt-xl-50">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                  <div className="layer-content">
                    <div className="d-flex justify-content-center ">
                      <Form onSubmit={handleFormSubmit}>
                        <Container>
                          <Row className="filter ">
                            <Col>
                              <FormGroup className="me-2 mt-3 mb-0 ">
                                <Label
                                  for="companyNameOrJobTitle"
                                  className="visually-hidden"
                                >
                                  Company Name
                                </Label>
                                <Input
                                  type="text"
                                  style={{ width: "20em", height: "2.7em" }}
                                  name="companyNameOrJobTitle"
                                  id="companyNameOrJobTitle"
                                  placeholder="Enter Company Name"
                                  value={companyNameOrJobTitle}
                                  onChange={(e) =>
                                    setCompanyNameOrJobTitle(e.target.value)
                                  }
                                />
                              </FormGroup>
                            </Col>

                            <Col className="me-2 mt-3  mb-0">
                              <button
                                type="submit"
                                className="btn btn-primary btn-sm "
                                onClick={handleFormSubmit}
                                style={{ padding: "0.5em" }}
                              >
                                Search
                              </button>
                            </Col>
                            {filteredJobsTrue && (
                              <Col className="me-2 mt-3  mb-0">
                                <button
                                  type="submit"
                                  className="btn btn-info btn-sm "
                                  onClick={resetJobs}
                                  style={{ padding: "0.5em" }}
                                >
                                  Reset
                                </button>
                              </Col>
                            )}
                            <style>
                              {`
  @media only screen and (max-width: 991px) {
   
.filter{
display:block
}
    
 
  `}
                            </style>
                          </Row>
                        </Container>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {filteredJobs.length > 0 ? (
          <Container>
            <Table bordered responsive style={{ fontSize: "14px" }}>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Company Logo</th>
                  <th>Company Name</th>
                  <th>Profile Description</th>
                  <th>Establishment Date</th>
                  <th>URL</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((comp, key) => (
                  <tr key={comp.id}>
                    <td>{key + 1}</td>
                    <td
                      style={{
                        position: "relative",
                        maxWidth: "150px", // Adjust the maximum width as needed
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          paddingTop: "100%", // Maintain aspect ratio (height = width)
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={
                            !showViewMoreBtn
                              ? `${comp?.companyimage}`
                              : `${mainURL}${comp?.companyimage}`
                          }
                          alt="Company Logo"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                    </td>
                    <td style={{ wordWrap: "break-word", maxWidth: "300px" }}>
                      {comp.company_name}
                    </td>
                    <td
                      style={{
                        wordWrap: "break-word",
                        maxWidth: "300px",
                        lineHeight: "1.7em",
                      }}
                    >
                      {comp.profile_description}
                    </td>
                    <td>{comp.establishment_date}</td>
                    <td style={{ wordWrap: "break-word", maxWidth: "500px" }}>
                      {comp.company_website_url}
                    </td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1em",
                        //  width: "7em",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faEdit}
                        color="green"
                        onClick={() => editItem(comp.id)}
                        style={{ cursor: "pointer" }}
                      />

                      <FontAwesomeIcon
                        icon={faTrash}
                        color="red"
                        onClick={() => handleDelete(comp.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        ) : (
          <h5 className="fs-15 mt-4 mb-8 text-center">No companies found</h5>
        )}
      </div>

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
                Edit Company
              </h5>
            </div>
            <ModalBody>
              <div className="job-post-content box-shadow-md rounded-3 p-4">
                <Row className="row">
                  <Col lg={12}>
                    <div className="mb-4">
                      <Label htmlFor="jobtitle" className="form-label">
                        Company Name
                      </Label>
                      <Input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="mb-4">
                      <label htmlFor="newsImage" className="form-label">
                        Company Logo
                      </label>
                      {existingImage && (
                        <img
                          src={existingImage}
                          alt="img"
                          className="img-fluid rounded-3"
                          style={{ margin: "1em" }}
                        />
                      )}
                      <input
                        type="file"
                        name="news_image"
                        id="newsImage"
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => setFilename(e.target.files[0])}
                      />
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
                      <label htmlFor="businessstream" className="form-label">
                        Business Stream
                      </label>
                      <Input
                        required
                        type="select"
                        name="businessStream"
                        id="businessStream"
                        value={businessStream}
                        onChange={(e) => setBusinessStream(e.target.value)}
                      >
                        {businessStreamOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.business_stream_name
                              .charAt(0)
                              .toUpperCase() +
                              option.business_stream_name.slice(1)}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
                      <Label for="companyWebsite">Company Website URL</Label>
                      <Input
                        required
                        type="url"
                        name="companyWebsite"
                        id="companyWebsite"
                        value={companyWebsite}
                        onChange={handleWebsiteChange}
                      />
                    </div>
                  </Col>

                  <Col lg={12}>
                    <div className="mb-4">
                      <Label for="establishmentDate">Establishment Date</Label>
                      <Input
                        required
                        type="date"
                        name="establishmentDate"
                        id="establishmentDate"
                        value={establishmentDate}
                        max={new Date().toISOString().split("T")[0]} // Set the maximum date to today's date
                        min={
                          new Date(
                            new Date().setMonth(new Date().getMonth() - 6)
                          )
                            .toISOString()
                            .split("T")[0]
                        } // Set the minimum date to 6 months ago
                        onChange={(e) => {
                          const selectedDate = new Date(e.target.value);
                          const sixMonthsAgo = new Date(
                            new Date().setMonth(new Date().getMonth() - 6)
                          );
                          if (
                            selectedDate > new Date() ||
                            selectedDate < sixMonthsAgo
                          ) {
                            alert(
                              "Please select a date between today and the last 6 months."
                            );
                            setEstablishmentDate(""); // Clear the input field if the date is invalid
                          } else {
                            setEstablishmentDate(e.target.value);
                          }
                        }}
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="mb-4">
                      <Label htmlFor="jobdescription" className="form-label">
                        Profile Description
                      </Label>
                      <Input
                        required
                        rows={5}
                        type="textarea"
                        name="profileDescription"
                        id="profileDescription"
                        value={profileDescription}
                        onChange={(e) => setProfileDescription(e.target.value)}
                      />
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
                      <Label htmlFor="companySize" className="form-label">
                        Company Size
                      </Label>
                      <Input
                        type="text"
                        name="companySize"
                        id="companySize"
                        value={companySize}
                        onChange={(e) => setCompanySize(e.target.value)}
                        required
                      />
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="mb-4">
                      <Label htmlFor="companyHQ" className="form-label">
                        Company Address
                      </Label>
                      <Input
                        type="textarea"
                        name="companyHQ"
                        id="companyHQ"
                        value={companyHQ}
                        onChange={(e) => setCompanyHQ(e.target.value)}
                        required
                      />
                    </div>
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
                Delete Company ?
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
      {filteredJobs.length > 0 && (
        <ListmoreNews
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Listing;
