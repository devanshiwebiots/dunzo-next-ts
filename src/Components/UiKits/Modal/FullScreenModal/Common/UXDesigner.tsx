import { UXDesigners } from "@/Constant/constant";
import { CommonUxList } from "@/Data/Uikits/Modal/ModalData";
import { ArrowRightCircle } from "react-feather";

const UXDesigner = () => {
  return (
    <>
      <h6>{UXDesigners}</h6>
      {CommonUxList.map((item, index) => (
        <div className="d-flex mt-3" key={index}>
          <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal"/></div>
          <div className="flex-grow-1 ms-2"><p className="mb-0">{item}</p></div>
        </div>
      ))}
    </>
  )
};

export default UXDesigner;