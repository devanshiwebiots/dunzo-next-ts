import { Card, CardBody, Col } from "reactstrap";
import TopRightToast from "./TopRightToast";
import BottomRightToast from "./BottomRightToast";
import TopLeftToast from "./TopLeftToast";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { LiveToasts } from "@/Constant/constant";
import { LiveToastData } from "@/Data/BonusUi/Toast/ToastData";
import BottomLeftToast from "./BottomLeftToast";

const LiveToast = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LiveToasts} subTitle={LiveToastData} />
        <CardBody className="position-relative common-flex">
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveToast;
