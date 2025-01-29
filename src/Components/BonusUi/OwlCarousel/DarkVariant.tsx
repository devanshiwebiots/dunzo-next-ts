import { DarkVariants } from "@/Constant/constant";
import { DarkVariantData, DarkVariantDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DarkVariant = () => {
  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={DarkVariants} subTitle={DarkVariantData} />
        <CardBody>
          <CommonCarousel dark data={DarkVariantDataList} control caption lightCaption indecators />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkVariant;
