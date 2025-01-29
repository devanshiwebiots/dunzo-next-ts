import { WithIndicator } from "@/Constant/constant";
import { WithIndicatorData, WithIndicatorDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const WithIndicators = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithIndicator} subTitle={WithIndicatorData} />
        <CardBody>
          <CommonCarousel data={WithIndicatorDataList} control indecators ride="carousel" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIndicators;
