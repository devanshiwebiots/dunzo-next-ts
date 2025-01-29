import { Button, Card, CardBody, Col } from "reactstrap";
import CommonModal from "../Common/CommonModal";
import { useState } from "react";
import { StaticForm } from "./StaticForm";
import { DunzoLogin, StaticBackdropModalBtn, StaticBackdropModals } from "@/Constant/constant";
import { StaticModalData } from "@/Data/Uikits/Modal/ModalData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const StaticBackdropModal = () => {
  const [staticModal, setStaticModal] = useState(false);
  const staticModalToggle = () => setStaticModal(!staticModal);
  
  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={StaticBackdropModals} subTitle={StaticModalData} headClass="pb-0" />
        <CardBody>
          <Button color="primary" onClick={staticModalToggle}>{StaticBackdropModalBtn}</Button>
          <CommonModal backdrop="static"  modalBodyClassName="social-profile text-start" fade={true} isOpen={staticModal} toggle={staticModalToggle}>
            <div className="modal-toggle-wrapper">
              <h3>{DunzoLogin}</h3>
              <p>Fill in your information below to continue.</p>
              <StaticForm staticModalToggle={staticModalToggle} />
            </div>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StaticBackdropModal;
