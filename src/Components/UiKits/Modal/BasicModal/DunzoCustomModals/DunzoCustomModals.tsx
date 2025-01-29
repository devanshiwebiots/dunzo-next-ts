import { Card, CardBody, Col, Row } from "reactstrap";
import { ModalOne } from "./ProfileModal/ModalOne";
import ModalTwo from "./ResultModal/ModalTwo";
import ModalThird from "./BalanceModal/ModalThird";
import { DunzoCustomModal } from "@/Constant/constant";
import { CustomModalData } from "@/Data/Uikits/Modal/ModalData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DunzoCustomModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DunzoCustomModal} subTitle={CustomModalData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <ModalOne />
            <ModalTwo />
            <ModalThird />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DunzoCustomModals;
