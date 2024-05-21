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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}> Trukai says Aust rice tour a useful lesson for PNG</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>The recent tour of the Riverina rice-growing region of Australia has been hailed a success by the participating delegates from Papua New Guinea.
The tour provided PNG delegates the opportunity to see how commercial rice farming was done in Australia.
Trukai Industries Ltd chief executive Greg Worthington-Eyre acknowledged Minister for Commerce and Industry Wera Mori, Vice-Minister for Agriculture and Livestock Henry Ame and Western Governor Taboi Awi Yoto for attending the informational tour. Most of them said they were now well informed of the paddy-to-plate process for rice and that commercial rice-farming was not something that could happen overnight in PNG but over time with positive collaboration of the Government and private sector.
The delegates also visited irrigation sites in Riverina to see how farmers were using innovation to develop the agricultural industry.
Worthington-Eyre said the rice operations of the Riverina district in New South Wales "is vast,
100 per cent vertically-integrated and world-class in its quality". He was pleased that the tour there last week had added value to their understanding of large-scale commercial rice production.
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