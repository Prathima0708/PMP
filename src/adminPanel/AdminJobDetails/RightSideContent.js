import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  Card,
  CardBody,
  Button,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { subURL } from "../../utils/URLs";
import axios from "axios";

const RightSideContent = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const [compImage, setCompanyImage] = useState("");

  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchAppliedStatus = async () => {
      const res = await axios.get(`${subURL}/post_job/${id}/`);

      setJobDetails(res.data);
      setCompanyImage(res.data[0]?.company_id?.companyimage);
    };

    fetchAppliedStatus();
  }, [id]);

  const [userId, setUserId] = useState();

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [jobId, setJobId] = useState("");

  useEffect(() => {
    const fetchAppliedStatus = async () => {
      const res = await axios.get(`${subURL}/post_job/${id}/`);

      setJobDetails(res.data);
    };

    fetchAppliedStatus();
  }, [id]);
  const navigateHandler = (id) => {
    history.push(`/myprofile`);
  };

  async function applyforJob() {
    setModal(false);

    const formData = {
      user_account_id: userId,
      job_post_id: jobId,
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
        async function fetchData() {
          const reqmodel = {
            user_account_id: userId,
          };
          let headers = {
            "Content-Type": "application/json; charset=utf-8",
          };

          try {
            const res = await axios.post(`${subURL}/notAplliedJob/`, reqmodel, {
              headers: headers,
            });

            setJobDetails(res.data);
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
      <div className="side-bar ms-lg-4">
        <Card className="job-overview">
          <CardBody className="p-4">
            <h6 className="fs-17">Job Overview</h6>
            <ul className="list-unstyled mt-4 mb-0">
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-user icon bg-soft-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Job Title</h6>
                    <p className="text-muted mb-0">{jobDetails?.job_title}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-star-half-alt icon bg-soft-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Experience</h6>
                    <p className="text-muted mb-0">
                      {" "}
                      {jobDetails?.experince_type_id?.experince_type?jobDetails?.experince_type_id?.experince_type : "Not Applicable" }
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-soft-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Location</h6>
                    <p className="text-muted mb-0">
                      {jobDetails?.job_location_id?.country ? jobDetails?.job_location_id?.country :"Not Applicable"}
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-history icon bg-soft-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Date Posted</h6>
                    <p className="text-muted mb-0">
                      {jobDetails?.createdDate?.substring(0, 10)}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>

        {/* <Card className="company-profile mt-4">
          <CardBody className="p-4">
            <h6 className="fs-17">Company Details</h6>
            <div className="text-center">
              <img
                src={jobDetails?.company_id?.companyimage}
                alt=""
                className="img-fluid rounded-3"
              />

              <div className="mt-4">
                <h6 className="fs-17 mb-1">
                  {jobDetails?.company_id?.company_name}
                </h6>
                <p className="text-muted">
                  Since {jobDetails?.company_id?.establishment_date}
                </p>
              </div>
            </div>
            <ul className="list-unstyled mt-4">
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-globe text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Website</h6>
                    <p className="text-muted fs-14 text-break mb-0">
                      {jobDetails?.company_id?.company_website_url}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card> */}

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
                  <button onClick={applyforJob} className="btn btn-danger w-50">
                    No, Apply for job
                  </button>
                  <div className="mx-2"></div>{" "}
                  <button
                    onClick={() => navigateHandler(jobDetails.id)}
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

export default RightSideContent;
