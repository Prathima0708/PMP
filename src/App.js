import React from "react";
import Routes from "./Routes/index";

//import Custom Style scss
import "./assets/scss/themes.scss";
import { useState } from "react";
import { useEffect } from "react";
var USERID;

function App() {
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

  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
