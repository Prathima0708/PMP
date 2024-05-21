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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}> New owner expected for Crowne Plaza</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>One of Port Moresby's four-star hotels, the Crowne Plaza, is expected to change ownership at The hotel, with bigger shares owned by Nambawan Super Ltd, has been on the market to sell
the end of this week.
for a period of time.
In a statement dated Sept 19, a contract for the sale of Crowne Plaza Hotel had been signed.
Kumul Hotels Ltd and InterContinental Hotels Group (IHG) have had a long and fruitful
relationship, however, through discussions with the hotel and for IHG to cease management.
key stakeholders a decision was made to sell
Crowne Plaza Port Moresby hotel manager Brent St Hill and IHG PNG area general manager Robert Coates yesterday confirmed there would be a new owner of the hotel come this Friday. As of the completion of the sale, the management agreement between Kumul Hotels and IHG
will also come to an end.
This means that subject to the sale completion by Nov 2, the Crowne Plaza Port Moresby will no longer be owned by Kumul Hotels Ltd and will no longer be managed by InterContinental Hotels Group.
The sale of the Crowne Plaza will allow Kumul Hotels Ltd to focus on its flagship, the Holiday
Inn brand.
In an earlier statement two years ago, Crowne Plaza's parent company, Kumul Hotels Ltd,
had said it was a "strategic decision by shareholders to rationalise the company's capital and consolidate its hotel investments in Port Moresby". Deloitte PNG has been appointed by the board of Kumul Hotels Limited as the lead advisers
on the sale of the Crowne Plaza Port Moresby Hotel.
James Kruse, of Deloitte PNG, said they were working with Jones Lang Lasalle in Australia who had been engaged to manage the international marketing with a focus on Asia and the
Pacific region. The hotel is situated in the heart of Port Moresby's central business district and
boasts 157 guestrooms and suites, a gymnasium, business centre, executive club lounge, restaurants and meeting and conference facilities.
From its prominent hilltop position, the hotel also enjoys sweeping views over the Coral Sea and Fairfax Harbour.
The Crowne Plaza property is currently operating as a fully dedicated hotel, however, it can also be converted into a retail precinct, several floors of serviced offices, and remaining floors retained as hotel rooms serviced apartments.
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