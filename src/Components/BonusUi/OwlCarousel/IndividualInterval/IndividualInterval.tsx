import { IndividualCarouselItemIntervals } from "@/Constant/constant";
import { ItemIntervalData } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import IndividualIntervalBody from "./IndividualIntervalBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const IndividualInterval = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={IndividualCarouselItemIntervals} subTitle={ItemIntervalData} />
        <CardBody>
          <IndividualIntervalBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndividualInterval;
