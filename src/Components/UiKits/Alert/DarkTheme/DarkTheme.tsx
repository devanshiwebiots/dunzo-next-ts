import { LinkColorDarkTheme } from "@/Constant/constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DarkThemeLeftSection } from "./DarkThemeLeftSection";
import { DarkThemeRightSection } from "./DarkThemeRightSection";
import { LinkColorData } from "@/Data/Uikits/Alert/AlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const DarkTheme = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={LinkColorDarkTheme} subTitle={LinkColorData} headClass="pb-0" />
        <CardBody>
          <Row>
            <DarkThemeLeftSection />
            <DarkThemeRightSection />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
