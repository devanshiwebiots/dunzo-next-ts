import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ImagePath, Ratio } from "@/Constant/constant";
import { RatioData, Ratios } from "@/Data/Uikits/Avatar/AvatarData";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const RatioCart = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={Ratio} subTitle={RatioData} headClass="pb-0" />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar ratio">
              <Image priority width={100} height={100} className="b-r-8 img-100" src={`${ImagePath}/avtar/11.jpg`} alt="image" unoptimized/>
            </div>
            {Ratios.map(({ className, src, size}, index) => (
              <div className="avatar ratio" key={index}>
                <Image priority width={size} height={size} className={`b-r-8 ${className}`} src={`${ImagePath}${src}`} alt="image" unoptimized/>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RatioCart;
