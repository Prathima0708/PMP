import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { subURL } from "../../utils/URLs";
var USERID;
const RecruitmentContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

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
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }
    async function storeData() {
      const formData = {
        user_account_id: userId,
        name: name,
        email: email,

        message: message,
      };
      if (name === "" || email === "" || message === "") {
        alert("Please enter all fields.");
        return;
      }

      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const res = await axios.post(`${subURL}/recemail/`, formData, {
          headers: headers,
        });

        if (res.status === 201) {
          setModalTitle("Success");
          setSuccessMessage("Sent Message Successfully !");
          setShowModal(true);
          setName("");
          setEmail("");
          setMessage("");
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
   
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <h5 className="mb-3"> Recruitment Service</h5>

              <div className="section-title mt-4 mt-lg-3">
                <p className="text-muted" style={{ lineHeight: "2em" }}>
                  If you are a Recruitment Agency or your business requires a
                  Recruitment Service and would like to seek the assistance from
                  Pacific Manpower, please contact us today on the following
                  form. Complete the details below and we shall get back to
                  within the next working day.
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <h5 className="mb-3"> Postal Address</h5>
                  <p className="text-muted" style={{ lineHeight: "2em" }}>
                    PO Box 876,
                    <br /> Konedobu, NCD,
                    <br /> Papua New Guinea
                  </p>
                </div>
                <div style={{ flex: 1 }}>
                  <h5 className="mb-3"> Head Office</h5>
                  <p className="text-muted" style={{ lineHeight: "2em" }}>
                    Level 3 Burns Haus,
                    <br />
                    20 Champion Parade,
                    <br /> Downtown, Port Moresby
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Form
                method="post"
                className="contact-form "
                name="myForm"
                id="myForm"
                onSubmit={handleSubmit}
              >
                <span id="error-msg"></span>
                <Row>
                  <Col lg={12}>
                    <div className="mb-3">
                      <Label htmlFor="nameInput" className="form-label">
                        Name
                      </Label>
                      <Input
                        required
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="mb-3">
                      <Label htmlFor="emailInput" className="form-label">
                        Email
                      </Label>
                      <Input
                        required
                        type="email"
                        className="form-control"
                        id="emaiol"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                  </Col>

                  <Col lg={12}>
                    <div className="mb-3">
                      <Label htmlFor="meassageInput" className="form-label">
                        Your Message
                      </Label>
                      <textarea
                        required
                        className="form-control"
                        placeholder="Enter your message"
                        name="comments"
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </Col>
                </Row>
                <div className="text-end">
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Send Message <i className="uil uil-message ms-1"></i>
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
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

export default RecruitmentContent;
