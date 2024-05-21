import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

//Import Blog
import BlogImage1 from "../../assets/images/blog/img-01.jpg";
import BlogImage2 from "../../assets/images/blog/img-02.jpg";
import BlogImage3 from "../../assets/images/blog/img-03.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { mainURL, subURL } from "../../utils/URLs";

const Blog = () => {
  const blog = [
    {
      id: 1,
      image: BlogImage1,
      userName: "Dirio Walls",
      date: "01 July, 2021",
      likesCount: "33",
      commnetCount: "08",
      blogTitle: "How apps is the IT world ?",
      blogContent:
        "The final text is not yet avaibookmark-label. Dummy texts have Internet tend been in use by typesetters since century.",
    },
    {
      id: 2,
      image: BlogImage2,
      userName: "Brandon Carney",
      date: "25 June, 2021",
      likesCount: 44,
      commnetCount: 25,
      blogTitle: "Smartest Apps for Business ?",
      blogContent:
        "The final text is not yet avaibookmark-label. Dummy texts have Internet tend been in use by typesetters since century.",
    },
    {
      id: 3,
      image: BlogImage3,
      userName: "William Mooneyhan",
      date: "16 March, 2021",
      likesCount: 68,
      commnetCount: 20,
      blogTitle: "Design your apps in your own way ?",
      blogContent:
        "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
    },
  ];
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get(`${subURL}/trendingnews/`)
      .then((response) => {
        const latestNews = response.data.slice(0, 3);
        setNewsData(latestNews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center ">
                <h3 className="title mb-3">Top Trending News</h3>
              </div>
            </Col>
          </Row>
          <Row>
            {(newsData || []).map((blogDetails, key) => (
              <Col lg={4} md={6} key={key}>
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img
                    
                      src={blogDetails.news_image}
                      alt=""
                   
                      style={{
                        objectFit: "cover",
                        height: "200px",
                        width: "25em",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <Link
                      to={`/readmore/${blogDetails.id}`}
                      className="primary-link"
                    >
                      <h5 className="fs-17">{blogDetails.news_title}</h5>
                    </Link>
                    <p className="text-muted">{blogDetails.news_description}</p>
                    <Link
                      to={`/readmore/${blogDetails.id}`}
                      className="form-text text-primary"
                    >
                      Read more{" "}
                      <i className="mdi mdi-chevron-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        {newsData.length === 0 && (
          <h3 className="fs-15 mt-3 mb-5 text-center">No News found.</h3>
        )}
      </section>
    </React.Fragment>
  );
};

export default Blog;
