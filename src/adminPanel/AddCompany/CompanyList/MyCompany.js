import React, { useEffect } from 'react'
import { MetaTags } from "react-meta-tags";
import Section from './Section';
import { Container } from 'reactstrap';
import Listing from './Listing';
import Footer from '../../Layout/CommonLayout/Footer';

const MyCompany = () => {
  const setColor = (color) => {
    document.getElementById("app-style").href =
      "assets/css/app" + color + ".min.css";
    document.getElementById("bootstrap-style").href =
      "assets/css/bootstrap" + color + ".min.css";
  };
  useEffect(() => {
    document.body.setAttribute("data-layout-mode", "light");
    setColor("-blue"); 
  }, []);
  return (
    <React.Fragment>
      <MetaTags>
        <title>Manage Company</title>
      </MetaTags>
      <Section />
      <section className="section">
        <Container>
       
          <Listing />
        </Container>
      </section>
      <Footer/>
    </React.Fragment>
  );
}

export default MyCompany