import { LightBackground } from "@/Constant/constant";
import { LightBackgroundData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Col } from "reactstrap";

export const LightBackgrounds = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h6 className="mb-3">{LightBackground}</h6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box alert-light-primary"> </div>.alert-light-primary
        </div>
        {LightBackgroundData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box ${item}`}> </div>.{item}
          </div>
        ))}
      </div>
    </Col>
  );
};