import { WithControl } from "@/Constant/constant";
import { WithControlData, WithControlDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const WithControls = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithControl} subTitle={WithControlData} />
        <CardBody>
          <CommonCarousel data={WithControlDataList} control interval="2000" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithControls;