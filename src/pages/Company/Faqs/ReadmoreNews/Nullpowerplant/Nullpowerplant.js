import React from 'react'
import { MetaTags } from 'react-meta-tags'
import { Container, Row } from 'reactstrap'
import Content from './Content'
import Section from './Section'

const NullPowerPlant = () => {
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

export default NullPowerPlant