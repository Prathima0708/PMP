import React from "react";
import { Link } from "react-router-dom";

//import UserImage
import userImage3 from "../../../assets/images/user/img-03.jpg";

const BlogColumn = () => {
  return (
    <React.Fragment>
      <div className="mt-4">
        <h5 className="mb-3">Pacific Manpower Group (400 staff)</h5>
        <p style={{ lineHeight: "2.3em" }}>
          Provides specialist Contract hire and Recruitment services to the
          industry throughout PNG, including Visas, work permits, and passport
          services for both National and Expatriates. PMP also operates a
          Project Services team at the Puma Refinery.
        </p>
      </div>

      <div className="mt-4">
        <h5 className="mb-3"> Gavipumaku Limited (160 staff)</h5>
        <p style={{ lineHeight: "2.3em" }}>
          Provides Transport Solution to NBPOL in Kimbe and WNB Province. PMP
          supports Gavipumaku Limited in a partnership arrangement.
        </p>
      </div>
    </React.Fragment>
  );
};

export default BlogColumn;
