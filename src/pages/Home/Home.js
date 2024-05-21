import React from "react";
import Jobcatogaries from "../Home/jobCatogaries";
import JobList from "./LatestJobs/JobList/jobList";
import HowItWorks from "./HowItWorks";
import Cta from "./Cta";
import Testimonal from "./Testimonal";
import Blog from "../Home/Blog";
import Client from "./Client";
import { filteredJobs } from "./SubSection/JobSearch";
import { MetaTags } from "react-meta-tags";
import Team from "../Company/Team/Team";
import BlogDetails from "../Blog/BlogDetails/BlogDetails";
import OurServicesTitle from "../OurServices/OurServicesTitle";
import HomeAboutus from "./HomeAboutus";
import Services from "../Company/Services/Services";
const Home = () => {
  return (
    <React.Fragment>
   
      {/* <Jobcatogaries /> */}
      {/* <JobList /> */}
      <HomeAboutus />
      {/* <Team /> */}
      {/* <BlogDetails /> */}
      {/* <OurServicesTitle /> */}
      <Services />
      <JobList />
      {/* <Jobcatogaries /> */}
      {/* <HowItWorks /> */}
      <Testimonal />
      {/* <Blog /> */}
    </React.Fragment>
  );
};

export default Home;
