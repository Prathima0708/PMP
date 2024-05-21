import React from 'react'
import { MetaTags } from "react-meta-tags";
import Section from './Section';
import HistoryPage from '../../../../pages/Company/AboutUs/History/HistoryPage';
import Footer from '../../../Layout/CommonLayout/Footer';

const HistoryPageAdmin = () => {
  return (
    <React.Fragment>
    <MetaTags>
      <title>About Us</title>
    </MetaTags>
    <Section />
   
          <HistoryPage />
          <Footer/>
    
  </React.Fragment>
  )
}

export default HistoryPageAdmin