import { Href, ImagePath } from "@/Constant/constant";
import Link from "next/link";
import { Card, Col, Row } from "reactstrap";
import NavBarMain from "./NavBarMain";
import UserProfileIcon from "./UserProfileIcon";
import { SocialAppCallBackType } from "@/Types/SocialAppType";
import Image from "next/image";

const UserProfile :React.FC<SocialAppCallBackType> = ({ callback }) => {
  return (
    <Row>
      <Col sm="12" className="box-col-12">
        <Card className="hovercard text-center">
          <div className="cardheader socialheader" />
          <div className="user-image">
            <div className="avatar">
              <Image priority width={1600} height={470} alt="user" src={`${ImagePath}/user/1.jpg`} />
            </div>
            <div className="icon-wrapper">
              <Link href={Href}><i className="icofont icofont-pencil-alt-5" /></Link>
            </div>
            <UserProfileIcon />
          </div>
          <div className="info market-tabs p-0">
            <NavBarMain callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
