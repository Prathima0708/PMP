// import React from "react";
// import { Button, Card, CardBody, Col, Row } from "reactstrap";

// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import { mainURL, subURL } from "../../../utils/URLs";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import { jobsList } from "../../../utils/Jobs";

// const JobDetailsDescription = () => {
//   const { id } = useParams();
//   const [jobDetails, setJobDetails] = useState(null);
//   const [qualifications, setQualifications] = useState([{}]);
//   const [compImage, setCompanyImage] = useState("");
//   const [fetchSkills, setFetchSkills] = useState([]);
//   const job = jobsList.find(job => job.id === parseInt(id));
//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const res = await axios.get(`${subURL}/post_job/${id}/`);
//         setJobDetails(res.data);

//         const parsedQualifications = JSON.parse(res.data.job_qualification);
//         setQualifications(parsedQualifications);

//         setCompanyImage(res.data?.company_id?.companyimage);
//       } catch (error) {
//         // Handle error here, e.g., show an error message or redirect
//       }
//     };

//     fetchJobDetails();
//   }, [id]);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       const res = await axios.get(`${subURL}/fetchJobSkills/${id}/`);

//       setFetchSkills(res.data);
//     };

//     fetchSkills();
//   }, [id]);

//   function shareOnFacebook(jobTitle, jobUrl) {
//     // Encode the job title and job URL for the Facebook sharing URL
//     const encodedTitle = encodeURIComponent(jobTitle);
//     const encodedUrl = encodeURIComponent(jobUrl);

//     // Construct the Facebook sharing URL with the job URL as the query parameter
//     const url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;

//     // Open a new window or redirect the current window to the Facebook sharing URL
//     window.open(url, "_blank");
//   }

//   function shareOnTwitter(jobTitle, jobUrl) {
//     // Encode the job title and job URL for the Twitter sharing URL
//     const encodedTitle = encodeURIComponent(jobTitle);
//     const encodedUrl = encodeURIComponent(jobUrl);

//     // Construct the Twitter sharing URL with the job title and URL as query parameters
//     const url = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

//     // Open a new window or redirect the current window to the Twitter sharing URL
//     window.open(url, "_blank");
//   }

//   function emailAFriend(jobTitle, jobUrl) {
//     // Encode the job title and job URL for the email
//     const encodedTitle = encodeURIComponent(jobTitle);
//     const encodedUrl = encodeURIComponent(jobUrl);

//     // Construct the mailto link with the email subject and body
//     const mailtoLink = `mailto:?subject=${encodedTitle}&body=Check out this job: ${encodedUrl}`;

//     // Open the default email client with a new message containing the subject and body
//     window.location.href = mailtoLink;
//   }

//   return (
//     <React.Fragment>
//       <Card className="job-detail overflow-hidden">
//         <CardBody className="p-4">
//           <>
//             <div>
//               <Row>
//                 <Col md={8}>
//                   <h5 className="mb-1">{job?.job_title}</h5>
//                   <ul className="list-inline text-muted mb-0"></ul>
//                 </Col>
//               </Row>
//             </div>

          

//             {job?.job_description && (
//               <div className="mt-4">
//                 <h5 className="mb-3">Purpose of the job</h5>
//                 <div className="job-detail-desc">
//                   <p className="text-muted mb-0">
//                     {job?.job_description}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* {jobDetails?.job_qualification && (
//               <div className="mt-4">
//                 <h5 className="mb-3">Qualifications </h5>
//                 <div className="job-detail-desc mt-2">
//                   <ul className="job-detail-list list-unstyled mb-0 text-muted">
//                     {jobDetails?.job_qualification?.map((qualification) => (
//                       <li key={qualification.id}>
//                         {" "}
//                         <i className="uil uil-circle"></i>
//                         {qualification.value}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )} */}

//             {job?.job_qualification && (
//               <div className="mt-4">
//                 {job.job_qualification.some(
//                   (qualification) => qualification.value !== null
//                 ) && <h5 className="mb-3">Qualifications</h5>}
//                 <div className="job-detail-desc mt-2">
//                   <ul className="job-detail-list list-unstyled mb-0 text-muted">
//                     {job.job_qualification.map(
//                       (qualification) =>
//                         qualification.value !== null && (
//                           <li key={qualification.id}>
//                             <i className="uil uil-circle"></i>
//                             {qualification.value}
//                           </li>
//                         )
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             )}

// {job?.key_responsibilities && (
//               <div className="mt-4">
//                 {job.key_responsibilities.some(
//                   (qualification) => qualification.value !== null
//                 ) && <h5 className="mb-3">Key Responsibilities</h5>}
//                 <div className="job-detail-desc mt-2">
//                   <ul className="job-detail-list list-unstyled mb-0 text-muted">
//                     {job.key_responsibilities.map(
//                       (qualification) =>
//                         qualification.value !== null && (
//                           <li key={qualification.id}>
//                             <i className="uil uil-circle"></i>
//                             {qualification.value}
//                           </li>
//                         )
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             )}

//           </>

//           <div className="mt-4 pt-3">
//             <ul className="list-inline mb-0">
             
//               <li className="list-inline-item mt-1">
//               <a
//   href="mailto:contact@pacificmanpower.com.pg"
//   className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2"
// >
//   Apply Now <i className="mdi mdi-chevron-double-right"></i>
// </a>

//               </li>

           
//             </ul>
//           </div>

//           {/* <div className="mt-4 pt-3">
//             <ul className="list-inline mb-0">
//               <li className="list-inline-item mt-1">Share this job:</li>
//               <li className="list-inline-item mt-1">
//                 <Button
//                   to="#"
//                   className="btn btn-blue btn-hover"
//                   onClick={() =>
//                     shareOnFacebook(
//                       jobDetails?.job_title,
//                       `https://pacificmanpower.com.pg/jobdetails/${id}`
//                     )
//                   }
//                 >
//                   <i className="uil uil-facebook-f"></i> Facebook
//                 </Button>
//               </li>

//               <li className="list-inline-item mt-1">
//                 <Button
//                   to="#"
//                   className="btn btn-success btn-hover"
//                   onClick={() =>
//                     shareOnTwitter(
//                       jobDetails?.job_title,
//                       `https://pacificmanpower.com.pg/jobdetails/${id}`
//                     )
//                   }
//                 >
//                   <i className="uil uil-twitter"></i> Twitter
//                 </Button>
//               </li>
//               <li className="list-inline-item mt-1">
//                 <Button
//                   to="#"
//                   className="btn btn-danger btn-hover"
//                   onClick={() =>
//                     emailAFriend(
//                       jobDetails?.job_title,
//                       `https://pacificmanpower.com.pg/jobdetails/${id}`
//                     )
//                   }
//                 >
//                   <i className="uil uil-mailbox"></i> Email a friend
//                 </Button>
//               </li>
//             </ul>
//           </div> */}
//         </CardBody>
//       </Card>
//     </React.Fragment>
//   );
// };

// export default JobDetailsDescription;











import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const JobDetailsDescription = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [qualifications, setQualifications] = useState([{}]);
  const [compImage, setCompanyImage] = useState("");
  const [fetchSkills, setFetchSkills] = useState([]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(`${subURL}/post_job/${id}/`);
        setJobDetails(res.data);

        const parsedQualifications = JSON.parse(res.data.job_qualification);
        setQualifications(parsedQualifications);

        setCompanyImage(res.data?.company_id?.companyimage);
      } catch (error) {
        // Handle error here, e.g., show an error message or redirect
      }
    };

    fetchJobDetails();
  }, [id]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await axios.get(`${subURL}/fetchJobSkills/${id}/`);

      setFetchSkills(res.data);
    };

    fetchSkills();
  }, [id]);

  function shareOnFacebook(jobTitle, jobUrl) {
    // Encode the job title and job URL for the Facebook sharing URL
    const encodedTitle = encodeURIComponent(jobTitle);
    const encodedUrl = encodeURIComponent(jobUrl);

    // Construct the Facebook sharing URL with the job URL as the query parameter
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;

    // Open a new window or redirect the current window to the Facebook sharing URL
    window.open(url, "_blank");
  }

  function shareOnTwitter(jobTitle, jobUrl) {
    // Encode the job title and job URL for the Twitter sharing URL
    const encodedTitle = encodeURIComponent(jobTitle);
    const encodedUrl = encodeURIComponent(jobUrl);

    // Construct the Twitter sharing URL with the job title and URL as query parameters
    const url = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

    // Open a new window or redirect the current window to the Twitter sharing URL
    window.open(url, "_blank");
  }

  function emailAFriend(jobTitle, jobUrl) {
    // Encode the job title and job URL for the email
    const encodedTitle = encodeURIComponent(jobTitle);
    const encodedUrl = encodeURIComponent(jobUrl);

    // Construct the mailto link with the email subject and body
    const mailtoLink = `mailto:?subject=${encodedTitle}&body=Check out this job: ${encodedUrl}`;

    // Open the default email client with a new message containing the subject and body
    window.location.href = mailtoLink;
  }

  return (
    <React.Fragment>
      <Card className="job-detail overflow-hidden">
        <CardBody className="p-4">
          <>
            <div>
              <Row>
                <Col md={8}>
                  <h5 className="mb-1">{jobDetails?.job_title}</h5>
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
                      {jobDetails?.experince_type_id?.experince_type
                        .charAt(0)
                        .toUpperCase() +
                        jobDetails?.experince_type_id?.experince_type.slice(1)}
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

            {jobDetails?.job_description && (
              <div className="mt-4">
                <h5 className="mb-3">Job Description</h5>
                <div className="job-detail-desc">
                  <p className="text-muted mb-0">
                    {jobDetails?.job_description}
                  </p>
                </div>
              </div>
            )}

            {/* {jobDetails?.job_qualification && (
              <div className="mt-4">
                <h5 className="mb-3">Qualifications </h5>
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
              </div>
            )} */}

            {jobDetails?.job_qualification && (
              <div className="mt-4">
                {jobDetails.job_qualification.some(
                  (qualification) => qualification.value !== null
                ) && <h5 className="mb-3">Qualifications</h5>}
                <div className="job-detail-desc mt-2">
                  <ul className="job-detail-list list-unstyled mb-0 text-muted">
                    {jobDetails.job_qualification.map(
                      (qualification) =>
                        qualification.value !== null && (
                          <li key={qualification.id}>
                            <i className="uil uil-circle"></i>
                            {qualification.value}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-4">
              <h5 className="mb-3">Skills Required</h5>
              <div className="job-details-desc">
                {fetchSkills.length > 0 ? (
                  <div className="d-flex flex-wrap">
                    {fetchSkills.map((skill) => (
                      <span
                        key={skill.id}
                        className="badge bg-primary me-2 mb-2"
                      >
                        {skill.skill_set_id.skill_set_name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">No skills found.</p>
                )}
              </div>
            </div>
          </>

          <div className="mt-4 pt-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mt-1">Share this job:</li>
              <li className="list-inline-item mt-1">
                <Button
                  to="#"
                  className="btn btn-blue btn-hover"
                  onClick={() =>
                    shareOnFacebook(
                      jobDetails?.job_title,
                      `https://pacificmanpower.com.pg/jobdetails/${id}`
                    )
                  }
                >
                  <i className="uil uil-facebook-f"></i> Facebook
                </Button>
              </li>

              <li className="list-inline-item mt-1">
                <Button
                  to="#"
                  className="btn btn-success btn-hover"
                  onClick={() =>
                    shareOnTwitter(
                      jobDetails?.job_title,
                      `https://pacificmanpower.com.pg/jobdetails/${id}`
                    )
                  }
                >
                  <i className="uil uil-twitter"></i> Twitter
                </Button>
              </li>
              <li className="list-inline-item mt-1">
                <Button
                  to="#"
                  className="btn btn-danger btn-hover"
                  onClick={() =>
                    emailAFriend(
                      jobDetails?.job_title,
                      `https://pacificmanpower.com.pg/jobdetails/${id}`
                    )
                  }
                >
                  <i className="uil uil-mailbox"></i> Email a friend
                </Button>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default JobDetailsDescription;
