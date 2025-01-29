import { BadgeTagsWithIcons } from "@/Constant/constant";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { IconContext, IconData } from "@/Data/Uikits/TagAndPills/TagAndPillsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const BadgeTagsWithIconsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BadgeTagsWithIcons} subTitle={IconData} headClass="pb-0" />
        <CommonTagAndPillsCardBody number={IconContext} />
      </Card>
    </Col>
  )
};

export default BadgeTagsWithIconsCart;