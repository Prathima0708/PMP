import React, { useEffect } from "react";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

import axios from "axios";
import { subURL } from "../../../utils/URLs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ListmoreNews from "./ListmoreNews";
var ID, USERID;
const Listing = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);

  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const openEditModal = () => setEditModal(!editModal);
  const [newsData, setNewsData] = useState([]);
  const [filename, setFilename] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescp, setNewsDescp] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
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
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 3; // Change this to the number of items to display per page
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredNewsData = newsData.slice(startIndex, endIndex);

  const [delId, setDelId] = useState("");
  const [existingImage, setExistingImage] = useState("");
  useEffect(() => {
    axios
      .get(`${subURL}/trendingnews/`)
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleDelete(id) {
    setDelId(id);
    setModal(true);
  }
  function editItem(id) {
    ID = id;

    setEditModal(true);

    const filteredDummuyData = newsData.find((data) => data.id === id);

    setNewsTitle(filteredDummuyData.news_title);
    setNewsDescp(filteredDummuyData.news_description);

    setExistingImage(filteredDummuyData.news_image);
  }

  function updateHandler() {
    const formData = new FormData();
    formData.append("news_title", newsTitle);
    formData.append("news_description", newsDescp);

    if (filename) {
      formData.append("news_image", filename);
    }

    formData.append("user_account_id", userId);

    async function updateData() {
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };

        const resLogin = await axios.put(
          `${subURL}/trendingnews/${ID}/`,
          formData,
          {
            headers: headers,
          }
        );
        if (resLogin.status === 200) {
          setModalTitle("Success !");
          setSuccessMessage("Updated Successfully!");
          setShowModal(true);
          setEditModal(false);
          async function fetchData() {
            try {
              const res = await axios.get(`${subURL}/trendingnews/`);

              setNewsData(res.data);
            } catch (error) {
              console.log(error);
            } finally {
            }
          }
          fetchData();
        }
      } catch (error) {
        setModalTitle("Failed !");
        setSuccessMessage("Oops !Something went wrong ,please try again");
        setShowModal(true);
        console.log(error);
      }
    }
    updateData();
  }

  async function deleteItem() {
    try {
      let headers = {
        "Content-Type": "application/json; charset=utf-8",
      };

      const resLogin = await axios.delete(
        `${subURL}/trendingnews/${delId}/`,

        {
          headers: headers,
        }
      );
      if (resLogin.status === 204) {
        setModalTitle("Success!");
        setSuccessMessage("Deleted Successfully!");
        setShowModal(true);
        setModal(false);
        async function fetchData() {
          try {
            const res = await axios.get(`${subURL}/trendingnews/`);

            setNewsData(res.data);
          } catch (error) {
            console.log(error);
          } finally {
          }
        }
        fetchData();
      }
    } catch (error) {
      setModalTitle("Failed !");
      setSuccessMessage("Oops !Something went wrong ,please try again");
      setShowModal(true);
      console.log(error);
    }
  }
  const readmore = (id) => {
    history.push(`/mynews/${id}`);
  };
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          {filteredNewsData.length > 0 ? (
            filteredNewsData.map((item, key) => (
              <Card className="job-box card mt-4" key={key}>
                <CardBody className="p-4">
                  <Row>
                    <Col lg={1}>
                      <img
                        src={item.news_image}
                        alt="img"
                        className="img-fluid rounded-3"
                      />
                    </Col>

                    <Col lg={9}>
                      <div className="mt-3 mt-lg-0">
                        <h5 className="fs-17 mb-1">{item.news_title}</h5>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <p className="text-muted fs-14 mb-0">
                              {item.news_description.length > 20
                                ? item.news_description.slice(0, 30) + "..."
                                : item.news_description}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Col>

                    <Col lg={2} className="align-self-center">
                      <ul className="list-inline mt-3 mb-0">
                        <li
                          className="list-inline-item"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Edit"
                        >
                          <Link
                            to="#"
                            className="avatar-sm bg-soft-success d-inline-block text-center rounded-circle fs-18"
                            onClick={() => editItem(item.id)}
                          >
                            <i className="uil uil-edit"></i>
                          </Link>
                        </li>
                        <li
                          className="list-inline-item"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                        >
                          <Link
                            onClick={() => handleDelete(item.id)}
                            to="#"
                            className="avatar-sm bg-soft-danger d-inline-block text-center rounded-circle fs-18"
                          >
                            <i className="uil uil-trash-alt"></i>
                          </Link>
                        </li>
                        <li
                          className="list-inline-item"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Preview"
                        >
                          <Link
                            to="#"
                            className="avatar-sm bg-soft-success d-inline-block text-center rounded-circle fs-18"
                            onClick={() => readmore(item.id)}
                          >
                            <i className="uil uil-eye"></i>
                          </Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            ))
          ) : (
            <h3 className="fs-15 mt-3 mb-5 text-center">No News found.</h3>
          )}
        </Col>
        {filteredNewsData.length > 0 && (
          <ListmoreNews
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Row>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Delete News ?
              </h5>
            </div>
            <ModalBody>
              <div>
                <h6 className="text-danger">
                  Are you sure you want to delete News ?
                </h6>
              </div>
            </ModalBody>
            <div className="modal-footer">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-primary btn-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={deleteItem}
              >
                Yes, delete
              </button>
            </div>
          </Modal>
        </div>
      </div>

      <div
        className="modal fade"
        id="editmodal"
        tabIndex="-1"
        aria-labelledby="editmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal
            isOpen={editModal}
            toggle={toggleEditModal}
            centered
            tabIndex="-1"
          >
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit News
              </h5>
            </div>
            <ModalBody>
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
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="newsImage" className="form-label">
                    News Image
                  </label>
                  {existingImage && (
                    <img
                      src={existingImage}
                      alt="img"
                      className="img-fluid rounded-3"
                      style={{ margin: "1em" }}
                    />
                  )}
                  <input
                    type="file"
                    name="news_image"
                    id="newsImage"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => setFilename(e.target.files[0])}
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="jobtitle" className="form-label">
                    News Description
                  </Label>
                  <Input
                    required
                    rows="10"
                    cols="50"
                    type="textarea"
                    className="form-control"
                    id="jobtitle"
                    value={newsDescp}
                    onChange={(e) => setNewsDescp(e.target.value)}
                  />
                </div>
              </Col>

              <div className="modal-footer">
                <button
                  type="button"
                  onClick={openEditModal}
                  className="btn btn-primary btn-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-danger btn-sm"
                  onClick={updateHandler}
                >
                  Update
                </button>
              </div>
            </ModalBody>
          </Modal>
        </div>
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

export default Listing;
