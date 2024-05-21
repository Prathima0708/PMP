import React, { useEffect, useState } from "react";

import { Card, CardBody, Col } from "reactstrap";

import axios from "axios";
import { mainURL, subURL } from "../../../utils/URLs";
var USERNAME, USERID;

const LeftSideContent = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userData, setUserData] = useState("");


  useEffect(()=>{
    getUserName()
    getUserID();
  },[userId])


  const getUserName=async()=>{
    try {
      USERNAME = localStorage.getItem("username");

      if (USERNAME !== null) {
        setUserName(USERNAME);
      }
    } catch (e) {
      console.log(e);
    }
  }
 
 

  async function getUserID() {
    try {
      const USERID = localStorage.getItem("userid");
      console.log('Retrieved user ID from local storage:', USERID);
      if (USERID !== null) {
        setUserId(USERID);
        console.log('Set user ID state:', USERID);
      }
    } catch (e) {
      console.log('Error retrieving user ID:', e);
    }
  }




  useEffect(() => {
    async function fetchUserId() {
      try {
        const res = await axios.get(`${subURL}/user_save_account/${userId}`);
        console.log('admin data', res.data);
  
        // Set both admin data and user profile
        setUserData(res.data);
      setUserImage(res.data.user_image);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    }
  
    // Ensure userId is not empty before fetching data
    if (userId) {
      fetchUserId();
    }
  }, [userId]);

  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="profile-sidebar me-lg-4">
          <CardBody className="p-4">
            <div className="text-center pb-4 border-bottom">
              <img
                src={`${mainURL}${userImage}`}
                alt="user"
                className="avatar-lg img-thumbnail rounded-circle mb-4"
              />
              <h5 className="mb-0">  {userData?.first_name}</h5>
            </div>

            <div className="mt-4">
              <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
              <div className="profile-contact">
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex">
                      <label>Email</label>
                      <div>
                        <p className="text-muted text-break mb-0">
                          {userData?.email_address}
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <div className="d-flex">
                      <label>Phone Number</label>
                      <div>
                        <p className="text-muted mb-0">
                          {userData?.contact_number}
                        </p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
