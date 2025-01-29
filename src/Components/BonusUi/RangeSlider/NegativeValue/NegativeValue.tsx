import { Card, CardBody, Col } from "reactstrap";
import { NegativeValues } from "@/Constant/constant";
import NegativeValueForm from "./NegativeValueForm";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider/RangSliderData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const NegativeValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={NegativeValues} subTitle={BasicSliderData} />
        <CardBody>
          <NegativeValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NegativeValue;
