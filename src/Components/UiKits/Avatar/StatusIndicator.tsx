import { Card, CardBody, Col } from "reactstrap";
import { ImagePath, StatusIndicator } from "@/Constant/constant";
import { StatusData, StatusIndicators } from "@/Data/Uikits/Avatar/AvatarData";
import Image from "next/image";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const StatusIndicatorCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader title={StatusIndicator} subTitle={StatusData} headClass="pb-0" />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image priority width={100} height={100} className="img-100 rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="image" />
              <div className="status bg-success"></div>
            </div>
            {StatusIndicators.map(({ className, src,color,size}, index) => (
              <div className="avatar" key={index}>
                <Image priority width={size} height={size} className={`${className} rounded-circle`} src={`${ImagePath}${src}`} alt="image" />
                <div className={`status bg-${color}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusIndicatorCart;