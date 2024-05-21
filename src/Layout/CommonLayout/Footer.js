import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer = [
    {
      id: 1,
      title: "Discover",
      menu: [
        {
          id: 1,
          link: "/aboutus",
          subTitle: "About Us",
        },
        {
          id: 2,
          link: "/contact",
          subTitle: "Contact Us",
        },
        {
          id: 3,
          link: "/login",
          subTitle: "Login",
        },
      ],
    },
    {
      id: 2,
      title: "Core Service",
      menu: [
        {
          id: 1,
          link: "/contractHire",
          subTitle: "Manpower",
        },
        {
          id: 2,
          link: "/recruitment",
          subTitle: "Recruitment",
        },
        {
          id: 3,
          link: "/payroll",
          subTitle: "Payroll",
        },
        {
          id: 4,
          link: "/technical",
          subTitle: "Technical Services",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <section className="bg-footer">
        <style>
          {`
    @media only screen and (max-width: 991px) {
     

      

     

     
      
      .bg-footer {
        background: #2e3538;
        padding: 60px 0;
        position: relative;
        font-size: 14px;
        width: revert;
}
.row>* {
  position: relative;
  word-wrap: break-word;
}

      

   
    `}
        </style>
        <Container>
          <Row>
            <Col lg={2} xs={6} style={{ fontFamily: "Poppins" }}>
              <div className="footer-item mt-4 mt-lg-0">
                <p className="fs-16 text-white mb-4">Address</p>

                <ul className="list-unstyled footer-list mb-0 text-white-50">
                  <li>P.O. Box 876 Konedobu, NCD Papua New Guinea</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} xs={6} style={{ fontFamily: "Poppins" }}>
              <div className="footer-item mt-4 mt-lg-0">
                <p className="fs-16 text-white mb-4">Contact</p>

                <ul className="list-unstyled footer-list mb-0 text-white-50">
                  <li>
                    Tel (+675) 70311391/392/393/394 <br />
                     contact@pacificmanpower.com.pg
                  </li>
                </ul>
              </div>
            </Col>
            {footer.map((footerdetails, key) => (
              <Col lg={2} xs={6} key={key} style={{ fontFamily: "Poppins" }}>
                <div className="footer-item mt-4  mt-lg-0">
                  <p className="fs-16 text-white mb-4">{footerdetails.title}</p>
                  {(footerdetails.menu || []).map((menuInner, key) => (
                    <ul className="list-unstyled footer-list mb-0" key={key}>
                      <li>
                        <Link to={menuInner.link}>
                          <i className="mdi mdi-chevron-right"></i>{" "}
                          {menuInner.subTitle}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Footer;
