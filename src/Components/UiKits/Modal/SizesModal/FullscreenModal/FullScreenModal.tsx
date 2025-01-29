import { FullScreenModals, WebDesigns } from "@/Constant/constant";
import { FullScreenData } from "@/Data/Uikits/Modal/ModalData";
import { Fragment, useState } from "react";
import { ChevronsRight } from "react-feather";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const FullScreenModal = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenToggle = () => setFullScreen(!fullScreen);

  return (
    <>
      <Button color="secondary" onClick={fullScreenToggle}>{FullScreenModals}</Button>
      <Modal fullscreen fade isOpen={fullScreen} toggle={fullScreenToggle}>
        <ModalHeader toggle={fullScreenToggle}>
          <h4 className="modal-title">Extra large modal</h4>
        </ModalHeader>
        <ModalBody className="dark-modal">
        <div className="large-modal-header mb-2"><ChevronsRight />
          <h6>{WebDesigns} </h6>
        </div>
        <p className="modal-padding-space">We build specialized websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
        {FullScreenData.map(({ title, text }, index) => (
          <Fragment key={index}>
            <div className="large-modal-header mb-2">
              <ChevronsRight />
              <h6>{title}</h6>
            </div>
            <p className="modal-padding-space">{text}</p>
          </Fragment>
        ))}
        </ModalBody>
      </Modal>
    </>
  );
};

export default FullScreenModal;