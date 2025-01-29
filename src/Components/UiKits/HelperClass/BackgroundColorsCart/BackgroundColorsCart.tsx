import { BackgroundColors } from "@/Constant/constant";
import { BackgroundData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DarkBackgrounds } from "./DarkBackground";
import { LightBackgrounds } from "./LightBackgrounds";
import { ExtendedBackgroundColors } from "./ExtendedBackgroundColors";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const BackgroundColorsCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BackgroundColors} subTitle={BackgroundData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <DarkBackgrounds />
            <LightBackgrounds />
            <ExtendedBackgroundColors />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BackgroundColorsCart;
