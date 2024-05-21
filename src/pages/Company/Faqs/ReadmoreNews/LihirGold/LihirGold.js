import React from 'react'
import { MetaTags } from 'react-meta-tags'
import { Container, Row } from 'reactstrap'
import Section from '../Section'
import Content from './Content'

const LihirGold = () => {
  return (
    <React.Fragment>
    <MetaTags>
    <title>Readmore News</title>
    </MetaTags>
    <Section/>
    <section className="section">
    <Container >
    <Row>
   
    <Content/>  
    </Row>   
    </Container>
    </section> 
</React.Fragment>
  )
}

export default LihirGold