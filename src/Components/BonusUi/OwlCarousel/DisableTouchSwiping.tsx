import { DisableTouchSwipingTitle } from "@/Constant/constant";
import { DisableTouchData, DisableTouchDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DisableTouchSwiping = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={DisableTouchSwipingTitle} subTitle={DisableTouchData} />
        <CardBody>
          <CommonCarousel data={DisableTouchDataList} control/>
        </CardBody>
      </Card>
    </Col>
  )
};

export default DisableTouchSwiping;
