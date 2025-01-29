import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { FontSizes } from "@/Constant/constant";
import { FontSideData, FontSize } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Card, CardBody, Col } from "reactstrap";

const FontSizesCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={FontSizes} subTitle={FontSize} headClass="pb-0" />
        <CardBody>
          <div className="gradient-border">
            <div className="font-wrapper border">
              <div className="f-14">Font-size .$f-14</div>
            </div>
            {FontSideData.map((item, index) => (
              <div className="font-wrapper border" key={index}>
                <div className={item}>{`Font-size .${item}`}</div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontSizesCart;
