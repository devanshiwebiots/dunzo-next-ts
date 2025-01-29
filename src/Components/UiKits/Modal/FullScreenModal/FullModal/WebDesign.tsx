import { WebDesigner, WebDesigns } from "@/Constant/constant";
import { FullScreenModalList } from "@/Data/Uikits/Modal/ModalData";
import { ArrowRightCircle, ChevronsRight } from "react-feather";
import { Media } from "reactstrap";

const WebDesign = () => {
  return (
    <>
      <div className="large-modal-header mb-2"><ChevronsRight />
        <h6>{WebDesigns}</h6>
      </div>
      <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
      <h6>{WebDesigner}</h6>
      <div className="d-flex mt-2">
        <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal"/></div>
        <div className="ms-2">
          <p className="mb-0">For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience.</p>
        </div>
      </div>
      {FullScreenModalList.map((item, index) => (
        <div className={`d-flex mt-2`} key={index}>
          <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal"/></div>
          <div className="flex-grow-1 ms-2"><p className="mb-0">{item}</p></div>
        </div>
      ))}
    </>
  );
};

export default WebDesign;
