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
  Table,
} from "reactstrap";
import { subURL } from "../../utils/URLs";

import ListmoreNews from "../News/NewsList/ListmoreNews";
var USERID;
const AddSkillsForm = () => {
  const [skillName, setSkillName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [skillSetOptions, setSkillSetOptions] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 10; // Change this to the number of items to display per page
  const totalPages = Math.ceil(skillSetOptions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = skillSetOptions?.slice(startIndex, endIndex);
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

  useEffect(() => {
    axios
      .get(`${subURL}/skillset/`)
      .then((response) => {
        setSkillSetOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    async function storeData() {
      const formData = {
        skill_set_name: skillName,
        user_account_id: userId,
      };

      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const res = await axios.post(`${subURL}/skillset/`, formData, {
          headers: headers,
        });

        if (res.status === 200) {
          setModalTitle("Success!");
          setSuccessMessage("Data saved successfully!");

          setShowModal(true);
          async function fetchData() {
            try {
              const res = await axios.get(`${subURL}/skillset/`);

              setSkillSetOptions(res.data);
            } catch (error) {
              console.log(error);
            } finally {
            }
          }
          fetchData();
        } else {
          console.log("error");
        }
      } catch (e) {
        if (e.response.status === 400) {
          setModalTitle("Failed !");
          setSuccessMessage("Skill already Exists!");
          setShowModal(true);
        } else {
          setModalTitle("Failed !");
          setSuccessMessage("Oops !Something went wrong ,please try again");
          setShowModal(true);
        }

        console.log(e);
      }
    }

    storeData();
    setSkillName("");
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-soft-primary p-3">
                <h5 className="mb-0 fs-17">Add Skills!</h5>
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
                      Skill Name
                    </Label>
                    <Input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={skillName}
                      onChange={(e) => setSkillName(e.target.value)}
                      required
                    />
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Button to="#" className="btn btn-gradient-primary btn-hover ms-sm-1 mt-2">
                      Submit <i className="mdi mdi-send"></i>
                    </Button>
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
                </Col>
              </Row>
            </div>
          </form>
          <div className="desc">
            <Table bordered>
              {filteredData.length > 0 && (
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Skill Name</th>
                  </tr>
                </thead>
              )}
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((skill, key) => (
                    <tr key={skill.id}>
                      <td>{key + 1}</td>
                      <td>{skill.skill_set_name}</td>
                    </tr>
                  ))
                ) : (
                  <h3 className="fs-15 mt-3 mb-5 text-center">
                    No skills found.
                  </h3>
                )}
              </tbody>
            </Table>
            {filteredData.length > 0 && (
              <ListmoreNews
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
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
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AddSkillsForm;
