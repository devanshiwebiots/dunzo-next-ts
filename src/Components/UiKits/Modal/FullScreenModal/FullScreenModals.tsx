import { FullScreenModal } from "@/Constant/constant";
import { FullScreenModalData } from "@/Data/Uikits/Modal/ModalData";
import { Card, CardBody, Col } from "reactstrap";
import FullModal from "./FullModal/FullModal";
import FullScreenBelowSm from "./FullScreenBelowSm/FullScreenBelowSm";
import FullScreenBelowMd from "./FullScreenBelowMd/FullScreenBelowMd";
import FullScreenBelowLg from "./FullScreenBelowLg/FullScreenBelowLg";
import FullScreenBelowXl from "./FullScreenBelowXl/FullScreenBelowXl";
import FullScreenBelowXxl from "./FullScreenBelowXxl/FullScreenBelowXxl";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const FullScreenModals = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={FullScreenModal} subTitle={FullScreenModalData} headClass="pb-0" />
        <CardBody className="badge-spacing">
          <FullModal />
          <FullScreenBelowSm />
          <FullScreenBelowMd />
          <FullScreenBelowLg />
          <FullScreenBelowXl />
          <FullScreenBelowXxl />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FullScreenModals;