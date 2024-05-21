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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}>  Hidden Valley pays millions in taxes and royalties</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>HIDDEN Valley mine in Bulolo, Morobe, has so far paid K421 million in taxes and royalties Harmony South East Asia operations chief executive Johannes van Heerden and operation executive manager Charles Devillie revealed this during a Lae Chamber of Commerce and
while contributing K591 million into the regional economy.
Industry breakfast on Oct 9.
A total of K111 million is royalties was paid to:
Landowner groups, K41.7 million;
Local communities, K5 million; Local level governments, K22.2 million;
Bulolo district treasury, K12.8 million;
Morobe provincial government, K27.3 million; and
Future Generation Trust (FGT), K2.2 million.
The K591 million direct benefit streams included:
Total employee salary (excluding tax), K73 million; Royalties and production levy, K24 million; Total procurement (excluding PNG Power Ltd), K404 million; and
Salary and wage tax, K35 million;
Power purchased from PNG Power Ltd, K55 million.
Harmony has achieved excellence in safety standards, local employment and landowner income, education, health and gender programmes.
On average, it converts
US$187 million (K627mil) of foreign exchange a year into kina for the benefit of national
economy.
The total direct employees is between about 1320 managed in tier comprising:
Non-citizens, 4 per cent,;
Nakuwi landowners and Bulolo district, 17 per cent respectively; Morobe province, 12 per cent; and
Rest of PNG, 42 per cent.
Van Heerden said 72 per cent of Harmony's permanent workforce was based in Morobe.
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