import { WebDesigner, WebDesigns } from "@/Constant/constant";
import { CommonWebData } from "@/Data/Uikits/Modal/ModalData";
import { ArrowRightCircle, ChevronsRight } from "react-feather";

const WebDesign = () => {
  return (
    <>
      <div className="large-modal-header mb-2"><ChevronsRight /><h6>{WebDesigns}</h6></div>
      <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
      <h6>{WebDesigner}</h6>
      {CommonWebData.map(({ title, className ,pClassName}, index) => (
        <div className={`d-flex ${className}`} key={index}>
          <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal"/></div>
          <div className="flex-grow-1 ms-2"><p className={`mb-0 ${pClassName && pClassName}`}>{title}</p></div>
        </div>
      ))}
    </>
  );
};

export default WebDesign;
