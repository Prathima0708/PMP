import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const TkiHistoryPage = () => {
  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="mb-5">
              <h6 className="fs-17 fw-semibold mb-4">TKI History</h6>

              <p className="text-muted">
                Tawap Kamen Investments Ltd (TKI) was founded in Tabubil,
                Western Province in 1989. It began as a Labour Hire Company
                however in response to ongoing customer requirements the company
                grew to incorporate Construction, Civil Works, Technical
                Services, Concrete Works, Timber Milling, Joinery, Cabinet
                Making, Security Services and Plant Hire. Hence, the company is
                collectively known as the TKI Group of Companies.
              </p>
              <p className="text-muted">
                This provides us with Harmonious business relationships in
                resource areas, while allowing us to build a national brand and
                operation
              </p>
              <p className="text-muted">
                Over the last decade TKI successfully completed a number of
                major projects in Tabubil, Ok Tedi Mining Limited (OTML)
                Mine/Mill Area, Kiunga and in the rural areas surrounding these
                centers. The Company is also a leading contractor in the ongoing
                maintenance and renovation of OTML employee residences, offices
                and various support buildings.
              </p>
              <p className="text-muted">
                Some of the major projects undertaken have included:
              </p>
              <ul className="text-muted list-unstyled about-list">
                <li> Major Upgrade of the Kiunga Hospital</li>
                <li>
                  {" "}
                  Construction of four three-bedroom houses for the Tabubil
                  Community School under the OTML Tax Credit Scheme
                </li>
                <li>
                  Numerous Security Fencing Projects (including Tabubil Airport
                  and Hospital Fencing)
                </li>
                <li>Renovation of a number of Government houses in Kiunga;</li>
                <li> Drainage works for the OTML Agriculture Department</li>
                <li>
                  {" "}
                  Super Value Store (SVS) Tabubil mezzanine office floor project
                </li>
                <li>
                  {" "}
                  Civil and drainage works along the Ok Ma Road in Tabubil
                </li>
                <li>
                  {" "}
                  Construction of Workshop Shed (Structural-Purlin) OTML Tunnel
                  Project
                </li>
                <li>
                  {" "}
                  Construction of 38 Houses in Kiunga under the OTML Tax Credit
                  Scheme
                </li>
                <li>
                  {" "}
                  Construction of 18 Houses for the National Housing Corporation
                  (NHC) at Gerehu, NCD
                </li>
              </ul>
              <p className="text-muted">
                In mid 2006 TKI began recruiting Managers, Supervisors,
                Qualified Tradesmen, Administration and Support Staff with a
                plan to provide a complete professional package to suit the
                needs of prospective clients/customers. With this increase in
                qualified personnel TKI is able to maintain a high standard of
                training in the latest industry developments and prides itself
                on recommending appropriate solutions to the specific needs of
                the client.
              </p>
              <p className="text-muted">
                The company can now confidently provide such services as
                designing and constructing packages for residential housing as
                well as the fabrication and construction of light steel frame
                buildings (commercial and industrial). All of this is done to
                conform to current standard practices including Building Board
                approvals.
              </p>
              <p className="text-muted">
                Occupation Health and Safety has been of the most paramount
                importance while undertaking all projects. TKI Management and
                its employees are highly trained to be aware of identifying
                hazards and risks, analyzing these and putting safe workable
                procedures in place is all part of our Safety Policy Management
                Plan. We work to have all of TKI projects carried out in a safe
                environment.
              </p>
              <p className="text-muted">
                As a Landowner Company, we are here to support the Landowners
                who are shareholders of the Company, namely Mr. Nokim Faiwolok,
                Chief of Bultem Village, Mr. Kupsy Walap, Chief of Ok Tedi Tau,
                Mr. Biul Kirokim, Councilor of Finalbin Village, a Consortium of
                Villages from the Telefomin District and Mr. Stanley Ipu who has
                assisted with managing the Company for the Landowners. We have
                declared dividends every year to our Shareholders and have
                ploughed back profits into the Company. The company is
                financially sound and eager to tackle any challenges.
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default TkiHistoryPage;
