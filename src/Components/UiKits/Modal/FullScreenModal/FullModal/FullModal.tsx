import React, { Fragment, useState } from "react";
import WebDesign from "./WebDesign";
import UXDesigner from "./UXDesigner";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Close, FullScreenModal, Save } from "@/Constant/constant";

const FullModal = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenToggle = () => setFullScreen(!fullScreen);

  return (
    <>
      <Button color="secondary-2x" outline onClick={fullScreenToggle}>{FullScreenModal}</Button>
      <Modal fullscreen fade isOpen={fullScreen} toggle={fullScreenToggle}>
        <ModalHeader toggle={fullScreenToggle}>
          <h4 className="modal-title">Fullscreen modal</h4>
        </ModalHeader>
        <ModalBody className="custom-scrollbar">
          <WebDesign />
          <UXDesigner />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={fullScreenToggle}>{Close}</Button>
          <Button color="primary">{Save}</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FullModal;
