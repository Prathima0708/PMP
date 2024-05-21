import React from "react";
import { Container, Col, Row } from "reactstrap";
import Section from "../BlogDetails/Section";
import BlogTitle from "../BlogDetails/BlogTitle";
import BlogCategory from "../BlogGrid/BlogCategory";
import PopularPost from "../BlogGrid/PopularPost";
import TextWidget from "../BlogGrid/TextWidget";
import Archives from "../BlogGrid/Archives";
import Tags from "../BlogGrid/Tags";
import SocialConnect from "../BlogGrid/SocialConnect";
import BlogSwiper from "../BlogDetails/BlogSwiper";
import BlogColumn from "../BlogDetails/BlogColumn";
import BlogComments from "../BlogDetails/BlogComments";
import BlogForm from "../BlogDetails/BlogForm";
import BlogPost from "../BlogDetails/BlogPost";
import MetaTags from "react-meta-tags";

const BlogDetails = () => {
  return (
    <React.Fragment>
      {/* <MetaTags>
        <title>Blog Details | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section /> */}
      <section className="section">
        <Container>
          <BlogTitle />
          <Row>
            <Col lg={7}>
              <div className="">
                <BlogSwiper />
               
              
              </div>
            </Col>
            <Col lg={5} md={5}>
            
              <BlogColumn />
                
              
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
