import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  Col,
  Container,
  Row,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

//Import Images
import contactImage from "../../assets/images/contact.png";
import axios from "axios";
import { subURL } from "../../utils/URLs";
import emailjs from "@emailjs/browser";
var USERID;
const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

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

  const validateEmail = (email) => {
    // Regular expression for email validation
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
    if (name === "" || email === "" || message === "") {
      alert("Please enter all fields.");
      return;
    }
    async function storeData() {
      const formData = {
        user_account_id: userId,
        name: name,
        email: email,

        message: message,
      };

      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const res = await axios.post(`${subURL}/contactus/`, formData, {
          headers: headers,
        });

        if (res.status === 201) {
          setModalTitle("Success");
          setSuccessMessage("Sent Message Successfully !");
          setShowModal(true);
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

    

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center mt-5">
            <Col lg={6} style={{ lineHeight: "2em" }}>
              <div className="section-title mt-4 mt-lg-0">
                <h3 className="title" style={{ fontStyle: "Ubuntu" }}>
                  Get in touch
                </h3>
                <p className="text-muted">
                  Start working with PacificManpower that can provide everything
                  you need to generate awareness, drive traffic, connect.
                </p>
                <Form
                  method="post"
                  className="contact-form mt-4"
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
              </div>
            </Col>
            <Col lg={5} className="ms-auto order-first order-lg-last">
              <div className="text-center">
                <img src={contactImage} alt="" className="img-fluid" />
              </div>
              <div className="mt-4 pt-3">
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">
                      P.O. Box 876 Konedobu, NCD Papua New Guinea
                    </p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-envelope"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">contact@pacificmanpower.com.pg</p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-phone-alt"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">Ph: +675 70311391/392/393/394</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="map">
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509157.364974411!2d-123.79641389801948!3d37.193115265681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1628684675253!5m2!1sen!2sin"
          height="350"
          style={{ border: `0`, width: `100%` }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
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

export default ContactContent;
