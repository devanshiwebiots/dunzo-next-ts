import { Card, CardBody, Col, Row } from "reactstrap";
import { LightThemeLeftSection } from "./LightThemeLeftSection";
import LightThemeRightSection from "./LightThemeRightSection";
import { LinkColorLightTheme } from "@/Constant/constant";
import { LinkColorData } from "@/Data/Uikits/Alert/AlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const LightTheme = () => {
  return (
    <Col xl="12">
      <Card className="custom-theme-light">
        <CommonCardHeader title={LinkColorLightTheme} subTitle={LinkColorData} headClass="pb-0" />
        <CardBody>
          <Row>
            <LightThemeLeftSection /> 
            <LightThemeRightSection />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightTheme;
