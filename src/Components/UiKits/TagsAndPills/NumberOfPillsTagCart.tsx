import { NumberOfPillsTags } from "@/Constant/constant";
import { RoundedContext, RoundedData } from "@/Data/Uikits/TagAndPills/TagAndPillsData";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const NumberOfPillsTagCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={NumberOfPillsTags} subTitle={RoundedData} headClass="pb-0" />
        <CommonTagAndPillsCardBody data={RoundedContext} />
      </Card>
    </Col>
  )
};

export default NumberOfPillsTagCart;