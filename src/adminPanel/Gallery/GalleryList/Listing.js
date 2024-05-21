import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import ListmoreNews from "../../News/NewsList/ListmoreNews";
import { Link } from "react-router-dom";

import axios from "axios";
import { subURL } from "../../../utils/URLs";

const Listing = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);

  const [galleryData, setGalleryData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 3; // Change this to the number of items to display per page
  const totalPages = Math.ceil(galleryData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredNewsData = galleryData.slice(startIndex, endIndex);

  const [delId, setDelId] = useState("");

  useEffect(() => {
    axios
      .get(`${subURL}/gallery/`)
      .then((response) => {
        setGalleryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleDelete(id) {
    setDelId(id);
    setModal(true);
  }

  async function deleteItem() {
    try {
      let headers = {
        "Content-Type": "application/json; charset=utf-8",
      };

      const resLogin = await axios.delete(
        `${subURL}/gallery/${delId}/`,

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
            const res = await axios.get(`${subURL}/gallery/`);

            setGalleryData(res.data);
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

  return (
    <React.Fragment>
      <Row>
        <Col lg={8}>
          <div className="mb-4 mb-lg-0">
            <h6 className="mb-0"> My Gallery </h6>
          </div>
        </Col>
      </Row>
      {filteredNewsData.length > 0 ? (
        filteredNewsData.map((item, key) => (
          <Card className="job-box card mt-4" key={key}>
            <CardBody className="p-4">
              <Row>
                <Col lg={3}>
                  <img
                    src={item.image}
                    alt="img"
                    className="img-fluid rounded-3"
                  />
                </Col>

                <Col lg={4}>
                  <div className=" mb-0 m-5">
                    <h5 className="fs-17 ">{item.title}</h5>
                  </div>
                </Col>

                <Col lg={5} className="align-self-center">
                  <Link
                    onClick={() => handleDelete(item.id)}
                    to="#"
                    className="avatar-sm bg-soft-danger d-inline-block text-center rounded-circle fs-18"
                  >
                    <i className="uil uil-trash-alt"></i>
                  </Link>
                </Col>
              </Row>
            </CardBody>
          </Card>
        ))
      ) : (
        <h3 className="fs-15 mt-3 mb-5 text-center">No events uploaded.</h3>
      )}

      {filteredNewsData.length > 0 && (
        <ListmoreNews
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </React.Fragment>
  );
};

export default Listing;
