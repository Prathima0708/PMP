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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}>    Newcrest has contributed US$377 million</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>Newcrest has contributed US$377 million to its national account through acquisition of K1.18 billion of currency in the 2018 financial year.
This makes the company one of the largest contributors of foreign exchange in the country. Newcrest stated that like all international industries, the foreign exchange shortage in PNG has had a negative impact on the extractives industry, but the industry continued to make positive contribution to the national account through its significant purchases of local goods and services in kina.
It said reliable access to foreign exchange is vital to its operations, particularly for suppliers. "Sometimes, they have no choice but to source goods and services from overseas, and when they do, they need access to foreign currency to buy these goods.
"Without reliable access to that foreign currency, our suppliers either can't purchase goods
overseas or are delayed in doing so.
"This can have a negative impact on our operations and on our local suppliers," it stated. Despite this the company maintained its preference to buy its goods and services from local suppliers and contractors in PNG.
In 2018, the Lihir mine's purchases of local goods and services amounted to K766 million Newcrest operates offshore bank accounts in foreign currency to receive export proceeds from the sale of gold and silver, to enable financing of the operations as and when needed, and to pay its offshore liabilities.
This arrangement ensures Lihir receives competitive pricing for its gold production by selling it to the international market, can obtain financing at competitive interest rates, and can
source goods and services internationally that aren't available within PNG. "Any excess funds are repatriated to our onshore kina denominated accounts. "Newcrest strives to comply with all legal requirements and obligations, including regulations and directives on foreign currency dealing and foreign currency accounts," it stated.
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