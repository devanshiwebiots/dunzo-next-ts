import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { FontStyle } from "@/Constant/constant";
import { FontData, FontStyleDetail } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Card, CardBody, Col } from "reactstrap";

const FontStyleCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={FontStyle} subTitle={FontData} headClass="pb-0" />
        <CardBody>
          <p className="f-s-normal">This is a <strong>.f-s-normal</strong> font-style</p>
          {FontStyleDetail.map((item, index) => (
            <p className={item} key={index}>This is a <strong>{item}</strong> font-style</p>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontStyleCart;
