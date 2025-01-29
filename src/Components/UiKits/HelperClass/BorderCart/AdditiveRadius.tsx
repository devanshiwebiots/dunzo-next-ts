import { AdditivesRadius } from "@/Constant/constant";
import { RadiusData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Col } from "reactstrap";

export const AdditiveRadius = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100 border">
        <h6 className="mb-3">{AdditivesRadius}</h6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-radius radius-wrapper rounded"></div>.rounded
        </div>
        {RadiusData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-radius radius-wrapper ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  );
};
