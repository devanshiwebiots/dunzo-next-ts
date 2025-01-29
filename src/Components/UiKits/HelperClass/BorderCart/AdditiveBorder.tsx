import { AdditiveBorder } from "@/Constant/constant";
import { AdditiveData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Col } from "reactstrap";

export const AdditiveBorders = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h6 className="mb-3">{AdditiveBorder}</h6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-light border"></div>.border
        </div>
        {AdditiveData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box bg-light ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  );
};
