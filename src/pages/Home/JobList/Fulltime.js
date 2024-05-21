import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Modal,
  ModalBody,
  Button,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";
var USERID;
const Fulltime = () => {
  
  const history = useHistory();
  const [fullTimeJobs, setFullTimeJobs] = useState([]);
  const [modal, setModal] = useState(false);
  const [userId, setUserId] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [compImage, setCompanyImage] = useState("");

  const openModal = () => setModal(!modal);

  const navigateHandler = (id) => {
    history.push(`/myprofile`);
  };

  useEffect(() => {
    axios
      .get(`${subURL}/filteredjobbyfulltime/fulltime/`)
      .then((response) => {
        setFullTimeJobs(response.data.slice(0, 3));
        setCompanyImage(response.data[0].company_id?.companyimage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  async function applyforJob(id) {
    setModal(false);
    const formData = {
      user_account_id: userId,
      job_post_id: id,
      status: "pending",
      userstatus: true,
    };

    try {
      let headers = {
        "Content-Type": "application/json; charset=utf-8",
      };
      const res = await axios.post(`${subURL}/applyjob/`, formData, {
        headers: headers,
      });

      if (res.status === 201) {
        setModalTitle("Success");
        setSuccessMessage("Applied for job Successfully !");
        setShowModal(true);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 404) {
        setModalTitle("Failed !");
        setSuccessMessage("Please add your profile details first!");
        setShowModal(true);
        setTimeout(() => {
          history.push("/myprofile");
        }, 1500);
      } else {
        setModalTitle("Failed !");
        setSuccessMessage("Oops !Something went wrong ,please try again");
        setShowModal(true);
      }
    }
  }

  return (
    <React.Fragment>
      {fullTimeJobs.map((fullTimeJobdetails, key) => (
        <div
          key={key}
          className={
            fullTimeJobdetails.addclassNameBookmark === true
              ? "job-box bookmark-post card mt-4"
              : "job-box card mt-4"
          }
        >
          <div className="bookmark-label text-center">
            <Link to="#" className="text-white align-middle">
              <i className="mdi mdi-star"></i>
            </Link>
          </div>
          <div className="p-4">
            <Row className="align-items-center">
              <Col md={2}>
                <div className="text-center mb-4 mb-md-0">
                  <img
                    src={`${mainURL}${fullTimeJobdetails.company_id.companyimage}`}
                    alt="img"
                    className="img-fluid rounded-3"
                  />
                </div>
              </Col>

              <Col md={3}>
                <div className="mb-2 mb-md-0">
                  <h5 className="fs-18 mb-1">
                    <Link
                      to={`/jobdetails/${fullTimeJobdetails.id}`}
                      className="text-dark"
                    >
                      {fullTimeJobdetails.job_title}
                    </Link>
                  </h5>
                  <p className="text-muted fs-14 mb-0">
                    {fullTimeJobdetails.company_id.company_name}
                  </p>
                </div>
              </Col>

              <Col md={3}>
                <div className="d-flex mb-2">
                  <div className="flex-shrink-0">
                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                  </div>
                  <p className="text-muted mb-0">
                    {fullTimeJobdetails.job_location_id.country}
                  </p>
                </div>
              </Col>

              <Col md={2}>
                <div>
                  <p className="text-muted mb-2">
                    Salary: {fullTimeJobdetails.salary}
                  </p>
                </div>
              </Col>

              <Col md={2}>
                <div>
                  <span className={"badge bg-soft-success fs-13 mt-1 mx-1"}>
                    {fullTimeJobdetails.job_type_id.job_type
                      .charAt(0)
                      .toUpperCase() +
                      fullTimeJobdetails.job_type_id.job_type.slice(1)}
                  </span>
                </div>
              </Col>
            </Row>
          </div>
          <div className="p-3 bg-light">
            <Row>
              <Col md={4}>
                <div>
                  <p className="text-muted mb-0">
                    <span className="text-dark">Experience :</span>{" "}
                    {fullTimeJobdetails.experince_type_id?.experince_type}
                  </p>
                </div>
              </Col>

              <Col lg={6} md={5}>
                {}
                <div>
                  <p className="text-muted mb-0">
                    <span className="text-dark">
                      {fullTimeJobdetails.job_description === null
                        ? ""
                        : "Job Description :"}
                    </span>
                    {fullTimeJobdetails.job_description.length > 20
                      ? fullTimeJobdetails.job_description.slice(0, 10) + "..."
                      : fullTimeJobdetails.job_description}
                  </p>
                </div>
              </Col>
            </Row>
          </div>

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
                      Do you want to update your profile ?
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

                  <div className="d-flex justify-content-between ml-3 ">
                    <button
                      
                      onClick={() => applyforJob(fullTimeJobdetails.id)}
                      className="btn btn-danger w-50"
                    >
                      No, Apply for job
                    </button>
                    <div className="mx-2"></div>{" "}
                    <button
                      onClick={() => navigateHandler(fullTimeJobdetails.id)}
                      className="btn btn-primary w-50"
                    >
                      Yes, Update
                    </button>
                  </div>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
      ))}

      {fullTimeJobs.length === 0 ? (
        <h3 className="fs-15 mt-3 mb-5 text-center">No jobs found.</h3>
      ) : (
        <div className="text-center mt-4 pt-2">
          <Link to="/joblist" className="btn btn-primary">
            View More <i className="uil uil-arrow-right"></i>
          </Link>
        </div>
      )}

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

export default Fulltime;
