import { Card, CardBody, Col, Row } from "reactstrap";
import { UnorderedLists } from "./UnorderLists";
import { ListingTypography } from "@/Constant/constant";
import { ListingData } from "@/Data/Uikits/Typography/TypographyData";
import { OrderList } from "./OrderList";
import { DescriptionList } from "./OrderListSecond";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const ListingCard = () => {
  return (
    <Col sm="12" className="listing">
      <Card>
        <CommonCardHeader title={ListingTypography} subTitle={ListingData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <UnorderedLists />
            <OrderList />
            <DescriptionList />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListingCard;
