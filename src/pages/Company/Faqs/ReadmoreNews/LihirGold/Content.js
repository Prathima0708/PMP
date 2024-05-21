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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}>   Lihir Gold mine's contribution to government and landowners</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>Lihir Gold mine's contribution to government and landowners rounded off at K269 million as of the close of its 2018 financial year in June.
Newcrest's gold mine at Lihir makes a substantial contribution to PNG government revenue through payment of taxes, royalties, and expenditure on approved infrastructure projects. For the year ending 30 June 2018 (FY2018), Lihir paid around K88 million in royalties. New Ireland provincial govt, K39m
Lihir paid a further K181 million in taxes to the PNG government, which included K11 million in community infrastructure under the government's Infrastructure Tax Credit Scheme
(ITCS).
Operator Newcrest stated that with any large operation like Lihir, significant running costs are incurred, including investments in infrastructure, equipment, labour, maintenance, consumables, flights, accommodation, food, and fuel and energy.
"This translates into another significant contribution to the PNG economy: approximately
K766 million in payments to PNG suppliers in FY2018.
In 2017, Lihir also used tax credits relating to its ITCS investments to settle its company
liability tax bill.
Current forecasts indicate that Lihir will again pay corporate tax in coming years, subject to market and operating conditions (including gold prices).
"Since August 2010, Newcrest has invested more than US$3 billion (K7.2 billion) in capital
expenditure into Lihir.
"These investments are one of the key drivers that have resulted in a real turn-around in Lihir's operations, returning Lihir to positive free cash flow in FY2014. "In addition to taxes, royalties and infrastructure, Lihir creates economic value for PNG in
many ways."
In FY2018, Lihir operations engaged 5000 Papua New Guinean employees and contractors,
plus many more jobs created for suppliers and external contractors. Generated significant flow-on benefits for the PNG economy, including K202 million in salaries and wages to Papua New Guineans
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