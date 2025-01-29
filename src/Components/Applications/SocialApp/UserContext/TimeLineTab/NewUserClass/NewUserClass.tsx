import { ImagePath } from "@/Constant/constant";
import { Card, CardBody, Col } from "reactstrap";
import CommentsBox from "./CommentsBox";
import LikeContent from "./LikeContent";
import NewUsersSocial from "./NewUsersSocial";
import SocialChat from "./SocialChat";
import Image from "next/image";

const NewUserClass = () => {
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <NewUsersSocial />
          <Image priority width={752} height={472} className="img-fluid" alt="timeline" src={`${ImagePath}/social-app/timeline-1.png`}/>
          <div className="timeline-content">
            <p>{`The only way to do something in depth is to work hard. I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul.`}</p>
            <LikeContent />
            <SocialChat />
            <CommentsBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUserClass;
