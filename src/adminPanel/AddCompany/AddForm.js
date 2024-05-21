import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
} from "reactstrap";
import { subURL } from "../../utils/URLs";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
var USERID;
const AddForm = () => {
  const history = useHistory();
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyHQ, setCompanyHQ] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [businessStream, setBusinessStream] = useState("");

  const [companyWebsite, setCompanyWebsite] = useState("");
  const [establishmentDate, setEstablishmentDate] = useState("");

  const [filename, setFilename] = useState("");
  const [businessStreamOptions, setBusinessStreamOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

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
    const fetchBusinessStreamOptions = async () => {
      const response = await fetch(`${subURL}/business_stream/`);
      const data = await response.json();

      setBusinessStreamOptions(data);
    };

    fetchBusinessStreamOptions();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    async function storeData() {
      const formData = new FormData();
      formData.append("company_name", companyName);
      formData.append("profile_description", profileDescription);
      formData.append("business_stream_id", businessStream);
      formData.append("establishment_date", establishmentDate);
      formData.append("company_website_url", companyWebsite);
      formData.append("companyimage", filename);
      formData.append("company_size", companySize);
      formData.append("company_location", companyHQ);
      formData.append("user_account_id", userId);

      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(
          `${subURL}/company_save_details/`,
          formData,
          { headers: headers }
        );

        if (res.status === 201) {
          setModalTitle("Success!");
          setSuccessMessage("Data saved successfully!");
          setShowModal(true);
          setTimeout(() => {
            history.push("/mycompany");
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
    setCompanyName("");
    setProfileDescription("");
    setBusinessStream("");
    setEstablishmentDate("");
    setCompanyWebsite("");
    setFilename("");
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Add Company Details!</h5>
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
                <Col lg={6}>
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
                      <option value="">Select Business Stream</option>
                      {businessStreamOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.business_stream_name.charAt(0).toUpperCase() +
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
                      type="url"
                      name="companyWebsite"
                      id="companyWebsite"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={6}>
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
                        new Date(new Date().setMonth(new Date().getMonth() - 6))
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

                <Col lg={6}>
                  <div className="mb-4">
                    <Label for="companyImage">Company Logo</Label>
                    <Input
                      type="file"
                      name="companyImage"
                      id="companyImage"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => setFilename(e.target.files[0])}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="jobdescription" className="form-label">
                      Profile Description
                    </Label>
                    <Input
                      rows="5"
                      required
                      type="textarea"
                      name="profileDescription"
                      id="profileDescription"
                      value={profileDescription}
                      onChange={(e) => setProfileDescription(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Button to="#" className="btn btn-blue">
                      Submit <i className="mdi mdi-send"></i>
                    </Button>
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

export default AddForm;
