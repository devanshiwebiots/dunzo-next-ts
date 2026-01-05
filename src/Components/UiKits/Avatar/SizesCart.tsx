import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ImagePath, Sizes } from "@/Constant/constant";
import { SizeData, SizeImages } from "@/Data/Uikits/Avatar/AvatarData";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

export const SizesCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader title={Sizes} subTitle={SizeData} headClass="pb-0" />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image priority width={100} height={100} className="img-100 rounded-circle" src={`${ImagePath}/avtar/3.jpg`} alt="image" unoptimized/>
            </div>
            {SizeImages.map((item, index) => (
              <div className="avatar" key={index}>
                <Image priority width={item.size} height={item.size} className={`${item.className} rounded-circle`} src={`${ImagePath}${item.src}`} alt="image" unoptimized/>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
