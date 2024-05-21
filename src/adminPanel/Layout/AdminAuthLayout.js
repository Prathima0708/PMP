import React from "react";
import { withRouter } from "react-router-dom";

const AdminAuthLayout = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(AdminAuthLayout);
