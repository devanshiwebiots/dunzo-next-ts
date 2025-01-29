import { CustomBorderRadiusClass } from "@/Constant/constant";
import { BorderClass } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Col } from "reactstrap";

export const BorderRadius = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h6 className="mb-3">{CustomBorderRadiusClass}</h6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box b-r-0 bg-light border"></div>
          <span>.b-r-0</span>
        </div>
        {BorderClass.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box ${item} bg-light border`}></div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  );
};
