import { WithCaption } from "@/Constant/constant";
import { WithCaptionData, WithCaptionDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const WithCaptions = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithCaption} subTitle={WithCaptionData} />
        <CardBody className="mt-2 mb-3">
          <CommonCarousel data={WithCaptionDataList} control indecators caption ride="carousel"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithCaptions;
