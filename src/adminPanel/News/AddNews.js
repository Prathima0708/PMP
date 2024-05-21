import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {  useHistory } from "react-router-dom";
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
var USERID;
const AddNews = () => {
  const history = useHistory();
  const [filename, setFilename] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescp, setNewsDescp] = useState("");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    async function storeData() {
      const formData = new FormData();
      formData.append("news_title", newsTitle);
      formData.append("news_description", newsDescp);
      formData.append("news_image", filename);
      formData.append("user_account_id", userId);

      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/trendingnews/`, formData, {
          headers: headers,
        });

        if (res.status === 201) {
          setModalTitle("Success!");
          setSuccessMessage("Data saved successfully!");
          setShowModal(true);
          setTimeout(() => {
            history.push("/mynews");
          }, 1000);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
        setModalTitle("Failed !");
        setSuccessMessage("Oops !Something went wrong ,please try again");
        setShowModal(true);
      }
    }

    storeData();
    setNewsTitle("");
    setNewsDescp("");
    setFilename("");
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Post a News !</h5>
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
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      News Title
                    </Label>
                    <Input
                      required
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Title"
                      value={newsTitle}
                      onChange={(e) => setNewsTitle(e.target.value)}
                    />
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="newsdescription" className="form-label">
                      News Description
                    </Label>
                    <textarea
                      required
                      className="form-control"
                      id="newsdescription"
                      rows="10"
                      cols="50"
                      placeholder="Enter news Description"
                      value={newsDescp}
                      onChange={(e) => setNewsDescp(e.target.value)}
                      maxLength={50000000} // Set the maximum size limit to 50MB (50,000,000 bytes)
                    ></textarea>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="mb-4">
                    <Label for="newsImage">News Image</Label>
                    <Input
                      required
                      type="file"
                      name="newsImage"
                      id="newsImage"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => setFilename(e.target.files[0])}
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
        </Container>
      </section>
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

export default AddNews;
