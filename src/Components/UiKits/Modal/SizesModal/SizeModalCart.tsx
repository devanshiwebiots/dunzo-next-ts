import { SizesModal } from "@/Constant/constant";
import { SizeDataList } from "@/Data/Uikits/Modal/ModalData";
import { Card, CardBody, Col } from "reactstrap";
import FullScreenModal from "./FullscreenModal/FullScreenModal";
import ExtraLargeModal from "./ExtraLargeModal/ExtraLargeModal";
import LargeModal from "./LargeModal/LargeModal";
import SmallModal from "./SmallModal/SmallModal";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const SizeModalCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={SizesModal} subTitle={SizeDataList} headClass="pb-0" />
        <CardBody className="badge-spacing">
          <FullScreenModal />
          <ExtraLargeModal />
          <LargeModal />
          <SmallModal />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizeModalCart;
