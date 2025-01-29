import { LargeModals } from "@/Constant/constant";
import React, { useState } from "react";
import { ChevronsRight, CornerUpRight } from "react-feather";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";
import { LargeData } from "@/Data/Uikits/Modal/ModalData";

const LargeModal = () => {
  const [largeScreen, setLargeScreen] = useState(false);
  const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (
    <>
      <Button color="success" onClick={largeScreenToggle}>{LargeModals}</Button>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Large modal" modalBodyClassName="dark-modal">
        <div className="large-modal-header mb-2"><ChevronsRight /><h6>Start with your goals </h6></div>
        <p className="modal-padding-space mb-0">{`No matter how talented you are as a content writer or creator, you will always fail if you don't have a clear set of goals.`}</p>
        <p className="modal-padding-space mb-0">First of all, without goals, there is no way to determine your success. Additionally, you lack direction.</p>
        <p className="modal-padding-space mb-2">Together with your team, respond to the following questions to make sure they are:</p>
        <div className="large-modal-body"><CornerUpRight /><p className="ps-1 mb-2">What must you achieve, and by when?</p></div>
        {LargeData.map((item, index) => (
          <div className="large-modal-body mb-2" key={index}><CornerUpRight />
            <p className="ps-1 mb-0">{item}</p>
          </div>
        ))}
      </CommonModal>
    </>
  );
};

export default LargeModal;
