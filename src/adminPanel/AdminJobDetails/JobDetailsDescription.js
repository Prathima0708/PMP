import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { mainURL, subURL } from "../../utils/URLs";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const JobDetailsDescription = () => {
  const history = useHistory();

  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [compImage, setCompanyImage] = useState("");
  const [fetchSkills, setFetchSkills] = useState([]);

  useEffect(() => {
    const fetchAppliedStatus = async () => {
      const res = await axios.get(`${subURL}/post_job/${id}/`);

      setJobDetails(res.data);

      setCompanyImage(res.data?.company_id?.companyimage);
    };

    fetchAppliedStatus();
  }, [id]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await axios.get(`${subURL}/fetchJobSkills/${id}/`);

      setFetchSkills(res.data);
    };

    fetchSkills();
  }, [id]);
  const handleBackClick = () => {
    history.goBack();
  };
  return (
    <React.Fragment>
      <Card className="job-detail overflow-hidden">
        {/* <div>
          <div
            className="image-wrapper"
            style={{ maxWidth: "20em", maxHeight: "15em" }}
          >
            <img
              src={`${mainURL}${compImage}`}
              alt="img"
              className="img-fluid"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
        </div> */}
        <CardBody className="p-4">
          <>
            <div>
              <Row>
                <Col md={8}>
                  <h5 className="mb-1">
                    {jobDetails?.job_title.charAt(0).toUpperCase() +
                      jobDetails?.job_title.slice(1)}
                  </h5>
                  <ul className="list-inline text-muted mb-0"></ul>
                </Col>
              </Row>
            </div>

            <div className="mt-4">
              <Row className="g-2">
                <Col lg={6}>
                  <div className="border rounded-start p-3">
                    <p className="text-muted mb-0 fs-13">Experience</p>
                    <p className="fw-medium fs-15 mb-0">
                      {jobDetails?.experince_type_id?.experince_type}
                    </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="border p-3">
                    <p className="text-muted fs-13 mb-0">Employee type</p>
                    <p className="fw-medium mb-0">
                      {jobDetails?.job_type_id?.job_type
                        .charAt(0)
                        .toUpperCase() +
                        jobDetails?.job_type_id?.job_type.slice(1)}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="mt-4">
              <h5 className="mb-3">Job Description</h5>
              <div className="job-detail-desc">
                <p className="text-muted mb-0">{jobDetails?.job_description}</p>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="mb-3">Qualifications </h5>
              {jobDetails?.job_qualification ? (
                <div className="job-detail-desc mt-2">
                  <ul className="job-detail-list list-unstyled mb-0 text-muted">
                    {jobDetails?.job_qualification?.map((qualification) => (
                      <li key={qualification.id}>
                        {" "}
                        <i className="uil uil-circle"></i>
                        {qualification.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No qualifications found.</p>
              )}
            </div>
          </>

          <div className="mt-4">
            <h5 className="mb-3">Skills Required</h5>
            <div className="job-details-desc">
              {fetchSkills.length > 0 ? (
                <div className="d-flex flex-wrap">
                  {fetchSkills.map((skill) => (
                    <span key={skill.id} className="badge bg-primary me-2 mb-2">
                      {skill.skill_set_id.skill_set_name}
                    </span>
                  ))}
                </div>
              ) : (
                <p>No skills found.</p>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
      <Col lg={12}>
        <div className="pt-5">
          <button className="btn btn-primary" onClick={handleBackClick}>
            Back
          </button>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default JobDetailsDescription;
