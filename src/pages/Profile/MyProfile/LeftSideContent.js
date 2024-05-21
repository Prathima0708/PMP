import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col } from "reactstrap";

//Import images
import profileImage from "../../../assets/images/profile.jpg";
import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";
var USERNAME, USERID;
const LeftSideContent = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userData, setUserData] = useState("");
  const [userCV, setUserCV] = useState("");
  async function getUserName() {
    try {
      USERNAME = await localStorage.getItem("username");

      if (USERNAME !== null) {
        setUserName(USERNAME);
      }
    } catch (e) {
      console.log(e);
    }
  }
  getUserName();

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
      const res = await axios.get(`${subURL}/user_save_account/${userId}`);

      setUserData(res.data);
      setUserImage(res.data.user_image);
    }
    fetechUserId();
  }, [userId]);

  useEffect(() => {
    async function fetechUserDetails() {
      const res = await axios.get(`${subURL}/seeker_profile/${userId}`);
      setUserCV(res.data.uploaded_cv);
    }
    fetechUserDetails();
  }, [userId]);

  const fetchContentType = (url) => {
    return axios
      .head(url)
      .then((response) => {
     
        return response.headers["content-type"];
      })
      .catch((error) => console.log(error));
  };

  const forceDownload = (response, title, contentType) => {
   
    if (!response || !response.data) {
      console.error("Response or response data is undefined");
      return;
    }
    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: contentType })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title);
    document.body.appendChild(link);
    link.click();
  };

  const downloadWithAxios = (url, title, contentType) => {
    axios({
      method: "get",
      url,
      responseType: "blob",
      headers: {
        Accept: contentType,
      },
    })
      .then((response) => {
        forceDownload(response, title, contentType);
      })
      .catch((error) => console.log(error));
  };
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="profile-sidebar me-lg-4">
          <CardBody className="p-4">
            <div className="text-center pb-4 border-bottom">
              <img
                src={`${mainURL}${userImage}`}
                alt="img"
                className="avatar-lg img-thumbnail rounded-circle mb-4"
              />
              <h5 className="mb-0">{userName}</h5>
            </div>

            <div className="mt-4 border-bottom pb-4">
              <h5 className="fs-17 fw-bold mb-3">Documents</h5>
              <ul className="profile-document list-unstyled mb-0">
                <li>
                  <div className="profile-document-list d-flex align-items-center mt-4 ">
                    <div className="icon flex-shrink-0">
                      <i className="uil uil-file"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fs-16 mb-0">Download Resume</h6>
                      {/* <p className="text-muted mb-0">1.25 MB</p> */}
                    </div>
                    <div className="ms-auto">
                      {/* <Link to="#" download className="fs-20 text-muted"> */}
                      <i
                        className="uil uil-import"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          const fileUrl = `${mainURL}${userCV}`;
                          fetchContentType(fileUrl)
                            .then((contentType) => {
                              downloadWithAxios(
                                fileUrl,
                                userCV.split("/").pop(),
                                contentType
                              );
                            })
                            .catch((error) => {
                              console.error(
                                "Error fetching content type:",
                                error
                              );
                            });
                        }}
                      ></i>
                      {/* </Link> */}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
              <div className="profile-contact">
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex">
                      <label>Email</label>
                      <div>
                        <p className="text-muted text-break mb-0">
                          {userData.email_address}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>Phone Number</label>
                      <div>
                        <p className="text-muted mb-0">
                          {userData.contact_number}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
