import React, { Suspense } from "react";
import { userRoutes, authRoutes, adminRoutes, defaultRoute } from "./allRoutes";
import { Route, BrowserRouter as Router } from "react-router-dom";

/* Layout */
import CommonLayout from "../Layout/CommonLayout/index";
import AuthLayout from "../Layout/AuthLayout";

import AdminAuthLayout from "../adminPanel/Layout/AdminAuthLayout";
import { useState } from "react";
import { useEffect } from "react";
import SignIn from "../pages/ExtraPages/SignIn";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Error404 from "../pages/ExtraPages/Error404";
var USERID;
const Index = () => {
  const availableAuthRoutesPath = authRoutes.map((r) => r["path"]);
  const availablePublicRoutesPaths = userRoutes.map((r) => r["path"]);
  const availableAdminRoutesPaths = adminRoutes.map((r) => r["path"]);

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

  const Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={Loader()}>
          <Switch>
            <Route path="/login" component={SignIn} exact={true} />

            <Route path={availableAuthRoutesPath}>
              <AuthLayout>
                <Switch>
                  {authRoutes.map((route, idx) => (
                    <Route
                      path={route.path}
                      component={route.component}
                      key={idx}
                      exact={true}
                    />
                  ))}
                  <Route component={Error404} />
                </Switch>
              </AuthLayout>
            </Route>

            <Route path={availableAdminRoutesPaths}>
              <AdminAuthLayout>
                <Switch>
                  {adminRoutes.map((route, idx) => (
                    <Route
                      path={route.path}
                      component={route.component}
                      key={idx}
                      exact={true}
                    />
                  ))}
                  <Route component={Error404} />
                </Switch>
              </AdminAuthLayout>
            </Route>

            <Route path={availablePublicRoutesPaths}>
              <CommonLayout>
                <Switch>
                  {userRoutes.map((route, idx) => (
                    <Route
                      path={route.path}
                      component={route.component}
                      key={idx}
                      exact={true}
                    />
                  ))}
                  <Route component={Error404} />
                </Switch>
              </CommonLayout>
            </Route>

            <Route component={Error404} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default Index;

