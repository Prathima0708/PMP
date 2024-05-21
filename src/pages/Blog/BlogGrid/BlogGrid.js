import React from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "../../../pages/Blog/BlogGrid/Section";
import BlogText from "../../Blog/BlogGrid/BlogText";
import PopularPost from "../../Blog/BlogGrid/PopularPost";
import BlogCategory from "../../Blog/BlogGrid/BlogCategory";
import TextWidget from "../../Blog/BlogGrid/TextWidget";
import Archives from "../../Blog/BlogGrid/Archives";
import Tags from "../../Blog/BlogGrid/Tags";
import SocialConnect from "../../Blog/BlogGrid/SocialConnect";
import MetaTags from "react-meta-tags";

const BlogGrid = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Gallery</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
          <div className="blog-post">
            <BlogText />
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogGrid;
