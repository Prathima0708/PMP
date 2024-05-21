import axios from "axios";
import React, { useEffect, useState } from "react";

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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
var USERID;
const AddGallery = () => {
  const history = useHistory();
  const [filename, setFilename] = useState("");
  const [title, setTitle] = useState("");
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
      formData.append("title", title);
      formData.append("image", filename);
      formData.append("user_account_id", userId);

      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/gallery/`, formData, {
          headers: headers,
        });

        if (res.status === 201) {
          setModalTitle("Success!");
          setSuccessMessage("Data saved successfully!");
          setShowModal(true);
          setTimeout(() => {
            history.push("/mygallery");
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
    setTitle("");
    setFilename("");
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Upload Events !</h5>
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
                      Title
                    </Label>
                    <Input
                      required
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label for="newsImage">Upload Image</Label>
                    <Input
                      required
                      accept=".png, .jpg, .jpeg"
                      type="file"
                      name="newsImage"
                      id="newsImage"
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

export default AddGallery;
