import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col } from 'reactstrap'

const Content = () => {
  return (
    <React.Fragment>
 
    <Col lg={8}>
        <Card className="candidate-details ms-lg-4 mt-4 mt-lg-0">
            <CardBody className="p-4 candidate-personal-detail">
                <div >
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}>   Landowners oppose Lae's coal-fired project</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>Markham Valley biomass landowners from Morobe have resisted the coal-fired project in Lae,
spearheaded by Energy Minister Sam Basil and Lae MP John Rosso. They travelled to Port Moresby this week to hold meetings with PNG Power Ltd and Government departments over the delay with the biomass project to which they have
committed land.
Chairman Sam Meyab, of the Zif Faring Business Group, said yesterday the landowners wanted to show their support for the PNG Biomass project and to confront PPL, Energy Minister Sam Basil and Treasurer Charles Abel over the delay.
"The politicians think coal is the answer," he said. "We landowners of the Markham Valley, people of Papua New Guinea, we do not want coal-
fired power or coal mining in our country.
"We want a clean, renewable, healthy future for our children.
"Coal has no place in PNG.
"We want renewable biomass to power our homes, not dirty coal.
"We want healthy lives, not a polluting coal-powered plant in Lae. "We want our Government to honour its commitments - to us, to the developer, to the country, to the world."
Meyab said the biomass project had all licences and permits, approvals and a signed power- purchasing agreement with PPL.
"We know that the biomass project sponsor Oil Search Ltd wants this project to go ahead," he said.
</p>
<br/>
<div className="learn-more">
                    <Link to="/news" className="form-text text-danger" ><i className="uil uil-angle-left-b"></i>Back to news </Link>
                                        </div>
                </div>
               
             
             
             
            </CardBody>
        </Card>
    </Col>
</React.Fragment>
  )
}

export default Content