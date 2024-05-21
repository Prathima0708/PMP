import React from 'react'
import Section from './Section'
import { MetaTags } from "react-meta-tags";
import Team from '../../../../pages/Company/Team/Team';
import Footer from '../../../Layout/CommonLayout/Footer';

const AdminKeyStaff = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Key Staff</title>
      </MetaTags>
      <Section />
    
      <Team/>
      <Footer />
    </React.Fragment>
  )
}

export default AdminKeyStaff