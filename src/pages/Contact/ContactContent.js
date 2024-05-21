import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
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

import contactImage from "../../assets/images/flat-design-illustration-customer-support_23-2148887720.avif";
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
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  async function getUserID() {
    try {
      USERID = localStorage.getItem("userid");

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

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }
    if (name === "" || email === "" || message === "") {
      alert("Please enter all fields.");
      return;
    }
  
    try {
      setLoading(true);
  
      const formData = {
        name: name,
        email: email,
        message: message,
      };
  
    
const authFormData={
  username:'pacific',
  password:'pacificmanpower@1123'
}
      const authRes=await axios.post('https://pacificmanpower.com.pg/pmp/spacificmanpower/auth-token/',authFormData)
      console.log(authRes.data.token)
      let headers = {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization':`Token ${authRes.data.token}`
      };
      const res = await axios.post(`${subURL}/contactus/`, formData, {
        headers: headers,
      //  headers:{'Authorization':`Token ${authRes.data.token}`}
      });

      
  
      // if (res.status === 201) {
      //   setModalTitle("Success");
      //   setSuccessMessage("Sent Message Successfully !");
      //   setShowModal(true);
      // } 
      //else {
      //   console.log("error");
      // }
    } catch (e) {
      console.log(e);
      if (e.response?.status === 500) {
        setModalTitle("Success");
        setSuccessMessage("Sent Message Successfully !");
        setShowModal(true);
      } 
      
      if (e.response?.status === 502) {
        setModalTitle("Success");
        setSuccessMessage("Sent Message Successfully !");
        setShowModal(true);
      } 
      // setModalTitle("Failed !");
      // setSuccessMessage("Oops !Something went wrong ,please try again");
      // setShowModal(true);
    } finally {
      setModalTitle("Success");
        setSuccessMessage("Sent Message Successfully !");
        setShowModal(true);
      setLoading(false);
  
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <React.Fragment>
      <section className="section" >
        <Container>
          <Row className="align-items-center">
            <Col lg={6} style={{ lineHeight: "2em", marginBottom: "5em" }}>
              <div className="section-title ">
                <h3 className="title">Get in touch</h3>
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
                      className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                       {loading ? (
          <>
            <Spinner animation="border" size="sm" />
            <span className="visually-hidden">Loading...</span>
          </>
        ) : (
          <>
            Send Message <i className="uil uil-message ms-1"></i>
          </>
        )}
                      {" "}
                      {/* Send Message <i className="uil uil-message ms-1"></i> */}
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
                    <div className="row mt-5" style={{border:'1px solid #AEB6BF'}}>
                <div className="col-md-6">
                  <div className="mt-4 mb-3" >
                    <div className="d-flex text-muted align-items-center mt-2">
                      <div className="flex-grow-1 ms-2">
                        <h6 className="mb-0">Address</h6>
                      </div>
                    </div>
                    <div className="d-flex text-muted align-items-center mt-2">
                      <div
                        className="flex-grow-1 ms-2"
                        style={{ lineHeight: "2em" }}
                      >
                        Level 2 ,Century 21 Building
                        <br /> Kunai Street, Hohola. 
                        <br /> Port Moresby
                        <br /> Papua New Guinea
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6" >
                  <div className="mt-4 mb-3 postal" style={{paddingLeft:'5em'}}>
                    <div className="d-flex text-muted align-items-center mt-2">
                      <div className="flex-grow-1 ms-2">
                        <h6 className="mb-0">Postal Address</h6>
                      </div>
                    </div>
                    <div className="d-flex text-muted align-items-center mt-2">
                      <div
                        className="flex-grow-1 ms-2"
                        style={{ lineHeight: "2em" }}
                      >
                        P O Box 876,
                        <br /> Konedobu, NCD,
                        <br /> Papua New Guinea
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </Form>
              </div>
              <style>
                {
                  `
                  @media only screen and (max-width: 991px) {
                    .title{
                      margin-top:39px !important;
                    }
                    .postal{
                      padding-left:0px !important;
                    }
                  }
                  `
                }
              </style>
            </Col>
            <Col lg={5} className="ms-auto order-first order-lg-last">
              <div className="text-center">
                <img src={contactImage} alt="" className="img-fluid" style={{height:'30em'}} />
              </div>
              <div className="" style={{marginLeft:'2em',}}>
                <div className="d-flex text-muted align-items-center "></div>
                <div className="d-flex text-muted align-items-center ">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-envelope"></i>
                  </div>
                  <div class="flex-grow-1 ms-2 ">
                    <p class="mb-0">
                      <a
                        href="mailto:contact@pacificmanpower.com.pg "
                        style={{ color: "gray" }}
                      >
                        contact@pacificmanpower.com.pg
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-phone-alt"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">+675 70311391/392/393/394</p>
                  </div>
                </div>
              </div>

            
            </Col>
          </Row>
        </Container>
      </section>
      <div className="map">
        
        <iframe title="Century 21 Siule Real Estate" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.646047939789!2d147.18202607472446!3d-9.452402699035376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x690230d66a231109%3A0x3839ddb26222ec2d!2sCentury%2021%20Siule%20Real%20Estate!5e0!3m2!1sen!2sin!4v1691751920366!5m2!1sen!2sin" 
         height="350"
          style={{ border: `0`, width: `100%` }}
          allowfullscreen=""
          loading="lazy"></iframe>
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
