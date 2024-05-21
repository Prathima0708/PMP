import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Input, Label, Row, Modal, ModalBody, Button } from "reactstrap";

//Images Import
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";
import jobImage5 from "../../../assets/images/featured-job/img-05.png";
import jobImage6 from "../../../assets/images/featured-job/img-06.png";
import jobImage7 from "../../../assets/images/featured-job/img-07.png";
import axios from "axios";
import { subURL } from "../../../utils/URLs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
var USERID;
const JobVacancyList = () => {
  const history = useHistory();
  const [jobs, setJobs] = useState([]);
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const [userId, setUserId] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigateHandler = (id) => {
   
    history.push(`/myprofile`);
  };

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
      <div>
        {jobs.map((jobVacancyListDetails, key) => (
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
                    <Link to="/companydetails">
                      <img
                        src={jobVacancyListDetails.companyImg}
                        alt=""
                        className="img-fluid rounded-3"
                      />
                    </Link>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-2 mb-md-0">
                    <h5 className="fs-18 mb-0">
                      <Link to="/jobdetails" className="text-dark">
                        {jobVacancyListDetails.jobDescription}
                      </Link>
                    </h5>
                    <p className="text-muted fs-14 mb-0">
                      {jobVacancyListDetails.companyName}
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {jobVacancyListDetails.location}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div className="d-flex mb-0">
                    <div className="flex-shrink-0">
                      <i className="uil uil-clock-three text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {" "}
                      {jobVacancyListDetails.jobPostTime}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <span
                      className={
                        jobVacancyListDetails.fullTime === true
                          ? "badge bg-soft-success fs-13 mt-1 mx-1"
                          : jobVacancyListDetails.partTime === true
                          ? "badge bg-soft-danger fs-13 mt-1 mx-1"
                          : jobVacancyListDetails.freeLance === true
                          ? "badge bg-soft-purple fs-13 mt-1 mx-1"
                          : jobVacancyListDetails.internship === true
                          ? "badge bg-soft-blue fs-13 mt-1"
                          : ""
                      }
                    >
                      {jobVacancyListDetails.timing}
                    </span>
                    {(jobVacancyListDetails.badges || []).map(
                      (badgeInner, key) => (
                        <span
                          className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                          key={key}
                        >
                          {badgeInner.badgeName}
                        </span>
                      )
                    )}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="p-3 bg-light">
              <Row className="justify-content-between">
                <Col md={4}>
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">Experience :</span>
                      {jobVacancyListDetails.experience}
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
                        //onClick={() => setModal(false)}
                        // onClick={applyforJob}
                        onClick={() => applyforJob(jobVacancyListDetails.id)}
                        className="btn btn-danger w-50"
                      >
                        No, Apply for job
                      </button>
                      <div className="mx-2"></div>{" "}
                      <button
                        onClick={() =>
                          navigateHandler(jobVacancyListDetails.id)
                        }
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
      </div>
    </React.Fragment>
  );
};

export default JobVacancyList;
