import React, { Suspense, useEffect } from "react";

import TopBar from "../CommonLayout/TopBar";
import NavBar from "../CommonLayout/NavBar";
import Subscribe from "../CommonLayout/Subscribe";
import Footer from "../CommonLayout/Footer";
import StyleSwitcher from "../CommonLayout/StyleSwitcher";
import ScrolltoTop from "../../components/ScrolltoTop";

const Layout = (props) => {
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
      <Suspense>
        <div>
          <TopBar />
          <NavBar />
          <div className="main-content">
            <div className="page-content">{props.children}</div>
          </div>
          <Subscribe />
          <ScrolltoTop />
          <Footer />
          <StyleSwitcher />
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Layout;
