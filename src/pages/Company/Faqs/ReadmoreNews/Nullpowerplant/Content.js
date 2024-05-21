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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}>    NulPower Plant 80% complete</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>The NiuPower gas fired plant being built outside the PNG LNG Plant site outside of Port Moresby is 80 per cent complete and set for completion in December this year. In a site visit yesterday by Deputy Prime Minister Charles Abel and joint venture partners Kumul Petroleum Holdings limited and Oil Search of the almost US$100 million project. All stakeholders were impressed with the progress achieved so far, with recent developments seeing the fuel gas pipeline built already by supplier ExxonMobil PNG and is currently
undergoing final testing.
Oil Search managing director Peter Botten maintained the project will produce the cheapest power on offer in Port Moresby to save current electricity supplier PNG Power a substantial amount of money in 2019 and beyond when it supplies an additional 58 megawatts of
electricity onto the Port Moresby electricity grid.
He said while there is a power purchase agreement with PNG Power, it is still ongoing in terms of connecting to its high voltage lines, but maintained delivery was still be on track. "We are very much on track to meet the deadline for commissioning later this year and on full production in the first quarter hopefully in February," Mr Botten said.
Kumul Petroleum Holdings managing director Wapu Sonk said the transformation from
concept to delivery was very encouraging.
"We started with just a barren stretch of land but with US$100 million investment by two PNG Companies holding hands together and working on a power plant more can be done. "It is very encouraging to see it being pulled together," Mr Sonk said.
The Power plant has been one of the largest private investments made by the State Owned custodian of the petroleum and gas sector.
NiuPower project director Michael Krause stated the project construction has been smooth for the most part with weather being good to the heavy build dealing with large pieces of
machinery.
"The equipment being brought in is always difficult and the (six) engines we have installed were manufactured in Finland and shipped all over the world.
"Each of the engines weighs 133 tonnes so the transportation of the engines from the factories to the ships, from the ships up to where the site is installation into the engine hall is He said the biggest task 18 kilometre cabling around the site.
a difficult and critical task.
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