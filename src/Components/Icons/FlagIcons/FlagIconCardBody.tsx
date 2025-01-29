import { FlagIconData } from "@/Data/Icons/IconsData";
import { FlagIconType } from "@/Types/IconType";
import { CardBody, Col, Media, Row } from "reactstrap";

export const FlagIconCardBody:React.FC<FlagIconType> = ({ getITag }) => {
  return (
    <CardBody>
      <Row className="icon-lists flag-icons">
        {FlagIconData.map((icon, index) => (
          <Col sm="6" xl="4" xs="12" key={index} onClick={() => getITag(icon.abbreviation)}>
            <div className="d-flex">
              <i className={`flag-icon flag-icon-${icon.abbreviation}`}></i>
              <div className="flex-grow-1 align-self-center">
                <h5 className="text-uppercase">{icon.abbreviation}</h5>
                <h6 className="pb-1">{icon.name}</h6>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};
