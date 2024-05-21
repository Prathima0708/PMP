

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const ListmoreNews = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5; // Maximum number of page numbers to display

    // Calculate the range of page numbers to display
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

    // Adjust the startPage if the endPage is at the maximum limit
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          className={`page-item${currentPage === i ? " active" : ""}`}
          key={i}
        >
          <Link className="page-link" to="#" onClick={() => handlePageClick(i)}>
            {i}
          </Link>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <Row>
      <Col lg={12} className="mt-4 pt-2">
        <nav aria-label="Page navigation example">
          <div className="pagination job-pagination mb-0 justify-content-center">
            <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
              <Link
                className="page-link"
                to="#"
                tabIndex="-1"
                onClick={() => handlePageClick(currentPage - 1)}
              >
                <i className="mdi mdi-chevron-double-left fs-15"></i>
              </Link>
            </li>
            {renderPageNumbers()}
            <li
              className={`page-item${
                currentPage === totalPages ? " disabled" : ""
              }`}
            >
              <Link
                className="page-link"
                to="#"
                onClick={() => handlePageClick(currentPage + 1)}
              >
                <i className="mdi mdi-chevron-double-right fs-15"></i>
              </Link>
            </li>
          </div>
        </nav>
      </Col>
    </Row>
  );
};

export default ListmoreNews;


