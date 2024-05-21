import React, { useEffect, useState } from "react";

import { Button, Card, CardBody, Col } from "reactstrap";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";

const LeftSideContent = () => {
  const [userImage, setUserImage] = useState("");
  const [userData, setUserData] = useState("");
  const [userCV, setUserCV] = useState("");
  const { id } = useParams();
  useEffect(() => {
    async function fetechUserId() {
      const res = await axios.get(`${subURL}/user_save_account/${id}`);

      setUserData(res.data);
      setUserImage(res.data.user_image);
    }
    fetechUserId();
  }, [id]);

  useEffect(() => {
    async function fetechUserDetails() {
      const res = await axios.get(`${subURL}/seeker_profile/${id}`);
      setUserCV(res.data.uploaded_cv);
    }
    fetechUserDetails();
  }, [id]);

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
        <Card className="side-bar">
          <CardBody className="p-4">
            <div className="candidate-profile text-center">
              <img
                src={`${mainURL}${userImage}`}
                alt=""
                className="avatar-lg rounded-circle"
              />
              <h6 className="fs-18 mb-0 mt-4">
                {userData.first_name} {userData.last_name}
              </h6>
            </div>
          </CardBody>

          <CardBody className="candidate-profile-overview border-top p-4">
            <div className="mt-3">
              <Button
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
                      console.error("Error fetching content type:", error);
                    });
                }}
                className="btn btn-blue btn-hover w-100 mt-2"
              >
                <i className="uil uil-import"></i> Download CV
              </Button>
            </div>
          </CardBody>

          <CardBody className="candidate-contact-details p-4 border-top">
            <h6 className="fs-17 fw-semibold mb-3">Contact Details</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-soft-primary flex-shrink-0">
                    <i className="uil uil-envelope-alt"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Email</h6>
                    <p className="text-muted mb-0">{userData.email_address}</p>
                  </div>
                </div>
              </li>
              {/* <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-soft-primary flex-shrink-0">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Address</h6>
                    <p className="text-muted mb-0">Dodge City, Louisiana</p>
                  </div>
                </div>
              </li> */}
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-soft-primary flex-shrink-0">
                    <i className="uil uil-phone"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Phone</h6>
                    <p className="text-muted mb-0">{userData.contact_number}</p>
                  </div>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
