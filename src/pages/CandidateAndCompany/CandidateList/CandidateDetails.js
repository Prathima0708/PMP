import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardBody, Col, Row } from "reactstrap";

//Import images

import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";
import ListmoreNews from "../../../adminPanel/News/NewsList/ListmoreNews";
var USERID;
const CandidateDetails = () => {
  const [candidateData, setCandidateData] = useState([]);

  const [userImage, setUserImage] = useState(null);
  const [userId, setUserId] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 5; // Change this to the number of items to display per page
  const totalPages = Math.ceil(candidateData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = candidateData.slice(startIndex, endIndex);

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
      const res = await axios.get(
        `${subURL}/applyjobfilteredTrueUseraccount/${userId}/True/`
      );
    

      setCandidateData(res.data);
      setUserImage(res.data[0]?.job_post_id?.company_id?.companyimage);
    }
    fetechUserId();
  }, [userId]);
 
  return (
    <React.Fragment>
      <div className="candidate-list">
        {candidateData.length === 0 ? (
          <h3 className="fs-18 mt-3 mb-5 text-center">No data found</h3>
        ) : (
          <>
            {filteredData.map((candidateDetailsNew, key) => (
              <div
                key={key}
                className={
                  candidateDetailsNew.addclassNameBookmark === true
                    ? "candidate-list-box bookmark-post card mt-4"
                    : "candidate-list-box card mt-4"
                }
              >
                <CardBody className="p-4">
                  <Row className="align-items-center">
                    <div className="col-auto">
                      <div className="candidate-list-images">
                        <Link to="#">
                          <img
                            src={`${mainURL}${candidateDetailsNew.job_post_id.company_id.companyimage}`}
                            alt="img"
                            className="avatar-md img-thumbnail rounded-circle"
                          />
                        </Link>
                      </div>
                    </div>
                    <Col lg={5}>
                      <div className="candidate-list-content mt-3 mt-lg-0">
                        <h6 className="fs-19 mb-0">
                          <Link
                            className="primary-link"
                            to="#"
                          
                          >
                            {candidateDetailsNew.job_post_id.job_title}
                          </Link>
                        </h6>
                        <p className="text-muted mb-2">
                          {" "}
                          {candidateDetailsNew.job_description}
                        </p>
                        <ul className="list-inline mb-0 text-muted">
                          <li className="list-inline-item">
                            {
                              candidateDetailsNew.job_post_id.company_id
                                .company_name
                            }
                          </li>
                          <li className="list-inline-item">
                            <i className="uil uil-wallet"></i>{" "}
                            {
                              candidateDetailsNew.job_post_id.job_type_id
                                .job_type
                            }
                          </li>
                        </ul>
                      </div>
                    </Col>

                    <Col lg={3}>
                      <span className="badge bg-soft-secondary fs-14 mt-1">
                        {candidateDetailsNew.status.charAt(0).toUpperCase() +
                          candidateDetailsNew.status.slice(1)}
                      </span>
                    </Col>
                    <Col lg={3}>
                      <div className="mt-3 ">
                        <span>
                          Applied date:{" "}
                          {candidateDetailsNew.apply_date?.substring(0, 10)}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            ))}
          </>
        )}
        <ListmoreNews
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  );
};

export default CandidateDetails;
