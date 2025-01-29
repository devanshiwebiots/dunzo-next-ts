import { Close, SaveChanges } from "@/Constant/constant";
import { CommonModalType } from "@/Types/UikitsType";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const CommonModal:React.FC<CommonModalType> = ({ fade, backdrop, centered, fullscreen, size, isOpen, toggle, title, onClosed, sizeTitle, fullTitle, modalBodyClassName, children } ) => {
  return (
    <Modal fade={fade} backdrop={backdrop} centered={centered} fullScreen={fullscreen} size={size} isOpen={isOpen} toggle={toggle} onClosed={onClosed}>
      {(title || sizeTitle || fullTitle) && (
        <div className="modal-header" onClick={toggle}>
          {title && <h5>{title}</h5>}
          {sizeTitle && <h4>{sizeTitle}</h4>}
          {fullTitle && <h1 className="fs-5">{fullTitle}</h1>}
          <Button close></Button>
        </div>
      )}
      <ModalBody className={modalBodyClassName ? modalBodyClassName : ""}>{children}</ModalBody>
      {(title || fullTitle) && (
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>{Close}</Button>
          <Button color="primary">{SaveChanges}</Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default CommonModal;
