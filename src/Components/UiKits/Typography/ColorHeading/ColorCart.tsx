import { Card, Col } from "reactstrap";
import { ColorHeadingBody } from "./ColorHeadingBody";
import { ColoredHeadings } from "@/Constant/constant";
import { HeadingData } from "@/Data/Uikits/Typography/TypographyData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const ColorCart = () => {
  return (
    <Col xxl="6">
      <Card className="height-equal">
        <CommonCardHeader title={ColoredHeadings} subTitle={HeadingData} headClass="pb-0" />
        <ColorHeadingBody />
      </Card>
    </Col>
  );
};

export default ColorCart;
