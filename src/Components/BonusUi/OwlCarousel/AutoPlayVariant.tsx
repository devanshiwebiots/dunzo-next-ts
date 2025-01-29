import { AutoPlayVariants } from "@/Constant/constant";
import { AutoPlayData, AutoPlayDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const AutoPlayVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={AutoPlayVariants} subTitle={AutoPlayData} />
        <CardBody>
          <CommonCarousel data={AutoPlayDataList} indecators interval="1500"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlayVariant;
