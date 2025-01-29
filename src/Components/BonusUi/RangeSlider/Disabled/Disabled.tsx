import { Card, CardBody, Col } from "reactstrap";
import { Disable } from "@/Constant/constant";
import DisabledForm from "./DisabledForm";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider/RangSliderData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const Disabled = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={Disable} subTitle={BasicSliderData} />
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Disabled;
