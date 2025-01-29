import { RoundedPillsWithIcons } from "@/Constant/constant";
import { RoundedPillData, RoundedPillContext } from "@/Data/Uikits/TagAndPills/TagAndPillsData";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const RoundedPillsWithIconsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={RoundedPillsWithIcons} subTitle={RoundedPillData} headClass="pb-0" />
        <CommonTagAndPillsCardBody number={RoundedPillContext} />
      </Card>
    </Col>
  );
};

export default RoundedPillsWithIconsCart;
