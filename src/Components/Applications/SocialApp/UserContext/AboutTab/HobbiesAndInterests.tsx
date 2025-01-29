import { Card, Col, CardHeader, CardBody, Row } from "reactstrap";
import { MoreVertical } from "react-feather";
import { HobbiesAndInterest } from "@/Constant/constant";
import { HobbiesData } from "@/Data/Applications/SocialApp/SocialAppData";

const HobbiesAndInterests = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header">
          <h3>{HobbiesAndInterest}<span className="pull-right"><MoreVertical /></span></h3>
        </CardHeader>
        <CardBody>
          {HobbiesData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm="6">
                <div className="your-details">
                  <span className="mb-2 d-block">{data.heading1}</span>
                  <p>{data.paragraph1}</p>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="mb-2 d-block">{data.heading2}</span>
                  <p>{data.paragraph2}</p>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HobbiesAndInterests;
