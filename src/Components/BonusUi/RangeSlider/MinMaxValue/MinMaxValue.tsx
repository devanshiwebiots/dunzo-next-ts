import { Card, CardBody, Col } from "reactstrap";
import { MinMaxValues } from "@/Constant/constant";
import MinMaxValueForm from "./MinMaxValueForm";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider/RangSliderData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const MinMaxValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MinMaxValues} subTitle={BasicSliderData} />
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MinMaxValue;
