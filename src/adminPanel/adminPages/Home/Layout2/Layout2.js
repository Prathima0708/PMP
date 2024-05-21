import React, { useEffect } from 'react';
import Home from '../Home';
import Section from '../Layout2/Section';
import MetaTags from "react-meta-tags";

const Layout2 = () => {
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
            <title>Pacific Manpower </title>            
            </MetaTags>
            <Section/>
            <Home/>
        </React.Fragment>
    )
}
export default Layout2
