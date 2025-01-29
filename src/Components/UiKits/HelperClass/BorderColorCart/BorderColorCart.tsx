import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { BorderColor } from "@/Constant/constant";
import { BorderColorDataList, BorderColorDetail } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Card, CardBody, Col } from "reactstrap";

const BorderColorCart = () => {
  return (
    <Col xs="12">
      <Card className="custom-gradient-card">
        <CommonCardHeader title={BorderColor} subTitle={BorderColorDetail} headClass="pb-0" />
        <CardBody>
          <div className="gradient-border">
            <div className="d-flex align-items-center mb-2 gap-2">
              <div className="helper-box b-primary border fill-wrapper"> </div>.b-primary
            </div> 
            {BorderColorDataList.map((item, index) => (
              <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                <div className={`helper-box ${item} border fill-wrapper`}> </div>.{item}
              </div> 
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderColorCart;