import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

//Import Image
import subscribeImg from "../../assets/images/subscribe.png";
import axios from "axios";
import { subURL } from "../../utils/URLs";
var USERID;
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userId, setUserId] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showError, setShowError] = useState(false);

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

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  
    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return;
    }
    if(email===""){
      alert('Please enter an email address.');
      return;
    }
    try {
      const formData = {
        email: email,
      };
  
      let headers = {
        "Content-Type": "application/json; charset=utf-8",
      };
  
      const res = await axios.post(`${subURL}/subscribe/`, formData, {
        headers: headers,
      });
  
      if (res.status === 201) {
        setModalTitle("Success");
        setSuccessMessage("Subscribed Successfully!");
        setShowModal(true);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
  
      setModalTitle("Failed!");
      setSuccessMessage("Oops! Something went wrong, please try again");
      setShowModal(true);
    }
  
    setEmail("");
  };
  
  return (
    <React.Fragment>
      <section
        className="bg-subscribe"
        id="subscribe"
        style={{ fontFamily: "Poppins" }}
      >
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <div className="text-center text-lg-start">
                <h4 className="text-white">Get New Jobs Notification!</h4>
                <p className="text-white-50 mb-0">
                  Subscribe & get all related jobs notification.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-4 mt-lg-0">
                <form className="subscribe-form" onSubmit={handleSubmit}>
                  <div className="input-group justify-content-center justify-content-lg-end">
                  <Input
                        type="email"
                        className="form-control"
                        id="emailControlInput2"
                        placeholder="Enter your email"
                        value={email}
        onChange={handleChangeEmail}
                        required
                      />
                    {!isValidEmail && (
        <div className="invalid-feedback">Please enter a valid email address.</div>
      )}
                    <button
                      className="btn btn-gradient-primary btn-hover ms-sm-1"
                      type="submit"
                      id="subscribebtn"
                      onClick={handleSubmit}
                    >
                      Subscribe
                    </button>
                    <style>
                  {`
      .btn-gradient-primary {
        background-image: linear-gradient(to left,  #0066CC,#38B0F9);
  color: white;
  border: none;
  transition: transform 0.3s ease;
      }
      
      .btn-gradient-primary:hover {
        transform: scale(1.1); 
        background-image: linear-gradient(to left,  #38B0F9,#0066CC);
        color: white;
      }
      
      `}
                </style>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="email-img d-none d-lg-block">
          <img src={subscribeImg} alt="" className="img-fluid" />
        </div>
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

export default Subscribe;
