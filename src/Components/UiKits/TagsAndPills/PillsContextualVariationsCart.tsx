import { PillsContextualVariations } from "@/Constant/constant";
import { PillsContext, PillsData } from "@/Data/Uikits/TagAndPills/TagAndPillsData";
import { Card, Col } from "reactstrap";
import CommomTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const PillsContextualVariationsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={PillsContextualVariations} subTitle={PillsData} headClass="pb-0" />
        <CommomTagAndPillsCardBody data={PillsContext} pill />
      </Card>
    </Col>
  );
};

export default PillsContextualVariationsCart;