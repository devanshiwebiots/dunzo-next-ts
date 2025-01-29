import { Card, CardBody, Col } from "reactstrap";
import { StaticBlockQuot } from "./StaticBlockQuote";
import { Blockquote } from "@/Constant/constant";
import { BlockQuoteData } from "@/Data/Uikits/Typography/TypographyData";
import { DynamicBlockQuote } from "./DynamicBlockquote";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const BlockQuotCart = () => {
  return (
    <Col sm="12">
      <Card className="overflow-hidden">
        <CommonCardHeader title={Blockquote} subTitle={BlockQuoteData} headClass="pb-0" />
        <CardBody>
          <StaticBlockQuot />
          <DynamicBlockQuote />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlockQuotCart;
