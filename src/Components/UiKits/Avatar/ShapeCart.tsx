import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ImagePath, ShapesTitle } from "@/Constant/constant";
import { Shapes, ShapesData } from "@/Data/Uikits/Avatar/AvatarData";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const ShapeCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader title={ShapesTitle} subTitle={ShapesData} headClass="pb-0" />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image priority width={100} height={100} className="img-100 b-r-8" src={`${ImagePath}/avtar/4.jpg`} alt="image" />
            </div>
            {Shapes.map(({ className, src, size }, index) => (
              <div className="avatar" key={index}>
                <Image priority width={size} height={size} className={`${className} b-r-30`} src={`${ImagePath}${src}`} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShapeCart;
