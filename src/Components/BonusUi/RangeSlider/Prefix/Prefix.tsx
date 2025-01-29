import { Card, CardBody, Col } from "reactstrap";
import { Prefixes } from "@/Constant/constant";
import PrefixForm from "./PrefixForm";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider/RangSliderData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const Prefix = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={Prefixes} subTitle={BasicSliderData} />
        <CardBody className="mt-3 mb-3">
          <PrefixForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Prefix;
