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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}>  Record production levels help Oil Search return strong result </h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>OIL Search reported a strong third-quarter result, delivering the company's highest quarterly revenue since the fourth quarter of 2014, and approached the end of 2018 in a robust
financial position.
Managing director Peter Botten said total oil and gas production was 7.5 million barrels of oil
equivalent (mmboe), a significant improvement on the previous two quarters and in line with
levels achieved prior to the earthquake in February.
"This took production for the nine months to Sept 30 to 17.8 mmboe," he said. "Oil Search's operated production increased 69 per cent during the quarter, to 0.8 mmboe,
largely reflecting the resumption of production from the Moran and Agogo fields and a full quarter of contribution from the other fields. "Production from our operated oil and gas fields is expected to ramp up progressively as
remedial work continues and flow lines in remote locations, damaged by the earthquake, are
restored, enabling wells to be brought back online." Botten said the PNG LNG Project achieved record production levels following modifications undertaken on the Hides gas conditioning plant and maintenance work on the LNG trains in
March while production was shut-in due to the earthquake. "The project averaged 8.9MTPA (million tonnes per annum) in the third quarter, 9MTPA in September and reached daily rates of 9.2MTPA, the highest quarterly, monthly and daily annualised production rates achieved since the project came onstream in 2014," Botten said. "Current production is approximately 30 per cent above nameplate capacity and has been achieved with little additional expenditure, delivering significant incremental value to all
project stakeholders.
"These production levels are underpinned by the project's strong reserve position, which was upgraded materially following recertification of the PNG LNG fields in 2016. No significant downtime is scheduled for plant maintenance in the second half of the year. In August, the PNG LNG plant site celebrated five years without a lost time incident, equivalent to 13 million work hours, a highly commendable milestone, reflecting the operator's robust safety culture." Botten said that during the quarter, the company benefited from higher global oil and gas prices, achieving an average realised oil and condensate price of US$76.17 (K255.42) per barrel, up 5 per cent on the second quarter and an average realised LNG and gas price of US$10.45/mmBtu, 18 per cent higher than in the previous period.
"This, together with a rebound in production and sales volumes, drove an 81 per cent increase in total revenue to US$474.9 million (K1592.45)," he said.
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