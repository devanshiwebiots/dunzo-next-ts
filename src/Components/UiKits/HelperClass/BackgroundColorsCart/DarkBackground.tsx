import { DarkBackground } from "@/Constant/constant";
import { DarkBackgroundData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Col } from "reactstrap";

export const DarkBackgrounds = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h6 className="mb-3">{DarkBackground}</h6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-primary"></div>.bg-primary
        </div>
        {DarkBackgroundData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  );
};
