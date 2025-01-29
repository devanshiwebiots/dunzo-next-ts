import WedDesigners from "./WedDesigner";
import { useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";
import { ScrollingContent } from "@/Constant/constant";
import { UXDesigner } from "./UXDesigner";

const ScrollingModal = () => {
  const [scrollingModal, setScrollingModal] = useState(false);
  const scrollModalToggle = () => setScrollingModal(!scrollingModal);
  
  return (
    <>
      <Button color="success" onClick={scrollModalToggle}>{ScrollingContent}</Button>
      <CommonModal fade={true} isOpen={scrollingModal} toggle={scrollModalToggle} title="Scrolling Modal">
        <WedDesigners />
        <UXDesigner />
      </CommonModal>
    </>
  );
};

export default ScrollingModal;
