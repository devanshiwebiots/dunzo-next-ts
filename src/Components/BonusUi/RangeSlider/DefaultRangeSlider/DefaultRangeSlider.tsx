import { Card, CardBody, Col } from "reactstrap";
import { DefaultRangeSliders } from "@/Constant/constant";
import { DefaultRangeSliderForm } from "./DefaultRangeSliderForm";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider/RangSliderData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DefaultRangeSlider = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={DefaultRangeSliders} subTitle={BasicSliderData} />
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRangeSlider;
