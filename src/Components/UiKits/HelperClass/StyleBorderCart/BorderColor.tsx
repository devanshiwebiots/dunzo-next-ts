import { BorderColor } from "@/Constant/constant";
import { BorderColorData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Col } from "reactstrap";

export const BorderColors = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h6 className="mb-3">{BorderColor}</h6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box border-primary border"></div>
          <span>.border-primary</span>
        </div>
        {BorderColorData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box ${item} border`}></div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  );
};
