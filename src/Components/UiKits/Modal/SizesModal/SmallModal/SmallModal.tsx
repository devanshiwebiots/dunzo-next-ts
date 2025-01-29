import { SmallModals } from "@/Constant/constant";
import React, { Fragment, useState } from "react";
import { ChevronsRight } from "react-feather";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";
import { SmallData } from "@/Data/Uikits/Modal/ModalData";

const SmallModal = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const smallScreenToggle = () => setSmallScreen(!smallScreen);

  return (
    <>
      <Button color="primary" onClick={smallScreenToggle}>{SmallModals}</Button>
      <CommonModal size="sm" isOpen={smallScreen} toggle={smallScreenToggle} sizeTitle="Small modal" modalBodyClassName="dark-modal">
        <div className="large-modal-header mb-2"><ChevronsRight /><h6>Web Design </h6></div>
        <p className="modal-padding-space mb-0">We build specialized websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
        {SmallData.map(({ title, text }, index) => (
          <Fragment key={index}>
            <div className="large-modal-header mb-2"><ChevronsRight /><h6 className="ps-1">{title}</h6></div>
            <p className="modal-padding-space">{text}</p>
          </Fragment>
        ))}
      </CommonModal>
    </>
  );
};

export default SmallModal;
