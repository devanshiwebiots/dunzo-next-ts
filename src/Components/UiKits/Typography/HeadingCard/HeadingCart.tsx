import { HeadingsBody } from "./HeadingsBody";
import { Card, Col } from "reactstrap";
import { Headings } from "@/Constant/constant";
import { HeadingData } from "@/Data/Uikits/Typography/TypographyData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const HeadingCart = () => {
  return (
    <Col xxl="6">
      <Card className="height-equal">
        <CommonCardHeader title={Headings} subTitle={HeadingData} headClass="pb-0" />
        <HeadingsBody />
      </Card>
    </Col>
  );
};
