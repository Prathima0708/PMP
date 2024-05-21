import React from "react";
import { MetaTags } from "react-meta-tags";

import NewsContent from "./NewsContent";

const TrendingNews = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Pacific Manpower</title>
      </MetaTags>

      <NewsContent />
    </React.Fragment>
  );
};

export default TrendingNews;
