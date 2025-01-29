import { SubtractiveBorder } from "@/Constant/constant";
import { SubtractiveData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Col } from "reactstrap";

export const SubtractiveBorders = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h6 className="mb-3">{SubtractiveBorder}</h6>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-light border border-0"> </div>.border-0
        </div>
        {SubtractiveData.map((item ,index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box bg-light border ${item}`}> </div>.{item}
          </div>
        ))}
      </div>
    </Col>
  );
};
