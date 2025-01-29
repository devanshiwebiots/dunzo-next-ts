import { SlideOnly } from "@/Constant/constant";
import { SlidesOnlyData, SlidesOnlyDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const SlidesOnly = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={SlideOnly} subTitle={SlidesOnlyData} />
        <CardBody>
          <CommonCarousel data={SlidesOnlyDataList} interval="2000"  />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SlidesOnly;
