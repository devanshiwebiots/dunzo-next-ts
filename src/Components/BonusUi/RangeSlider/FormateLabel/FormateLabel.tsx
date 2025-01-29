import { Card, CardBody, Col } from "reactstrap";
import { FormattedLabels } from "@/Constant/constant";
import FormateLabelForm from "./FormateLabelForm";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider/RangSliderData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const FormateLabel = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={FormattedLabels} subTitle={BasicSliderData} />
        <CardBody>
          <FormateLabelForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormateLabel;
