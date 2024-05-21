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
                    <h6 className="fs-17 fw-semibold mb-3 " style={{backgroundColor:'#F7F9F9',padding:'1em', fontFamily: 'Ubuntu', letterSpacing:'2px',fontSize:'20px'}}>     New gas deals showing promise</h6>
                    <p className="text-muted mb-2" style={{lineHeight:'2.3em',fontFamily:'Noto Sans',fontSize:'16px',color:'black'}}>Discussions are continuing between the PNG LNG Project, the P'nyang (PRL3) and Papua LNG
(PRL15) joint ventures on the proposed development of three new LNG trains at the PNG LNG
plant site, says Oil Search managing director Peter Botten.
Two are underwritten by Papua LNG and one by the PNG LNG and P'nyang gas fields, Botton
said in a third-quarter report released yesterday.
"Formal negotiations are continuing between Papua LNG and PNG LNG on the terms for
access to the PNG LNG plant site," Botten said.
"The parties continue to mature the technical definition for the developments, explore options
for managing Feed studies, advance project financing and progress the remaining agreements required to enable integration of the projects.
"Discussions between the P'nyang and Papua LNG joint ventures and the State negotiation team on key terms for the gas agreements also made progress, with the joint ventures
providing project and economic information to the State negotiation team.
"We are aiming to have the key terms agreed by the November Apec economic leaders'
meeting, subject to progress over the next few weeks."
Botten said PNG LNG had entered into two mid-term sale and purchase agreements with PetroChina and BP during the quarter, broadening the customer base for LNG from Papua
New Guinea and increasing total contracted volumes to about 7.5 million tonnes per annum (MTPA). Botten said under the PetroChina agreement, the project will supply 0.45MTPA of LNG for three years, while the BP agreement involves the supply of about 0.45MTPA of LNG for three years and about 0.9MTPA for two years thereafter. Sales under the PetroChina and BP
agreements started in July and August, respectively.
These agreements are in addition to the 6.6MTPA already committed under long-term contracts to JERA, Osaka Gas, Sinopec and CPC.
ExxonMobil, on behalf of the PNG LNG Project participants, is negotiating the sale of the final mid-term tranche of 0.45MTPA, which is expected to be completed in the near term. He said there are continuous engagement with LNG buyers in key Asian markets, on potential of LNG development in the country.
offtake agreements from the company's share of high-heating value LNG from the next phase
"There has been significant interest from LNG customers, with formal negotiations with
selected parties expected to commence early in 2019," Botten said. He said that during the quarter, the Government, in collaboration with its partners, made significant progress on resolving outstanding issues related to the identification and verification of landowner beneficiaries from the PNG LNG Project.
"Of the 15 licences covering PNG LNG Project areas, 13 licences are either receiving or close to receiving benefits, with more than US$250 million (K838 million) of landowner benefits held in trust pending the completion of landowner identification and verification," Botten said. "Further substantial efforts are being put into ensuring that the remaining licences are "Oil Search continues to support the Government to ensure a speedy release of these funds
progressed to completion.
to the rightful beneficiaries."
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