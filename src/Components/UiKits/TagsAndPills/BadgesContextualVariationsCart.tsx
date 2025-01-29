import { BadgesContextualVariations } from "@/Constant/constant";
import { BadgeData, BadgesContext } from "@/Data/Uikits/TagAndPills/TagAndPillsData";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const BadgesContextualVariationsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BadgesContextualVariations} subTitle={BadgeData} headClass="pb-0" />
        <CommonTagAndPillsCardBody data={BadgesContext} />
      </Card>
    </Col>
  );
};

export default BadgesContextualVariationsCart;
