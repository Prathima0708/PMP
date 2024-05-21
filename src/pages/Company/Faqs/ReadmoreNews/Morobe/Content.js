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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}>     Morobe Show</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>The 57th Morobe Show in Lae over the weekend was hailed a success for PNG's leading rice distributor, Trukai Industries Ltd, as it took out the best exhibit and the grand winner of the
2018 Morobe Agricultural Show.
Trukai Industries Ltd Chief Executive Officer Greg Worthington-Eyre said Trukai has always
been a great supporter of the most celebrated annual show and it was a rewarding
experience for the entire Trukai team.
Mr Worthington-Eyre said the annual
show has
always been
a great avenue to showcase the
endless opportunities PNG has in agriculture and Trukai was delighted to have been a keen
supporter of this event as a major sponsor over many years.
"This year we placed more emphasis on our commitment towards developing a local rice industry for PNG by setting up an informational hub with various displays surrounding our exciting and innovative projects in rice, cattle and livestock.
"We also showcased our 100 percent home grown Hamamas rice and the feedback from the show-goers was overwhelming and we are satisfied knowing Papua New Guineans are proud of their own rice," he said.
Mr Worthington-Eyre also congratulated all other exhibitors and sponsors of the show for making it a great experience for all who attended.
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