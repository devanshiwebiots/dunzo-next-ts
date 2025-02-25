import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { FontWeight } from "@/Constant/constant";
import { FontWeightDataList, FontWeightDetails } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Card, CardBody, Col } from "reactstrap";

const FontWeightCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={FontWeight} subTitle={FontWeightDataList} headClass="pb-0" />
        <CardBody>
          <div className="helper-common-box">
            <div className="f-w-100">You can set light font weight heading .f-w-100</div>
          </div>
          {FontWeightDetails.map((item, index) => (
            <div className="helper-common-box" key={index}>
              <div className={item}>{`You can set light font weight heading .${item}`}</div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeightCart;
