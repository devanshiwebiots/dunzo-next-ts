import { Button, Card, CardBody, Col } from "reactstrap";
import { useState } from "react";
import { OpenFirstModal, ToggleBetweenModal } from "@/Constant/constant";
import { ToggleModalList } from "@/Data/Uikits/Modal/ModalData";
import CommonModal from "../Common/CommonModal";
import { ToggleParentModal } from "./ToggleParentModal";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const ToggleBetweenModals = () => {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };

  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={ToggleBetweenModal} subTitle={ToggleModalList} headClass="pb-0" />
        <CardBody className="badge-spacing">
          <Button color="dark" onClick={toggle}>{OpenFirstModal}</Button>
          <CommonModal centered fade={true} isOpen={modal} toggle={toggle}>
            <ToggleParentModal nestedModal={nestedModal} closeAll={closeAll} toggle={toggle} toggleNested={toggleNested} toggleAll={toggleAll}/>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToggleBetweenModals;