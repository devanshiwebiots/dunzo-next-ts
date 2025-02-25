import SVG from "@/CommonComponent/SVG/Svg";
import { Followers, Following, ImagePath, Posts } from "@/Constant/constant";
import { SocialUserCardData } from "@/Data/Applications/Users/UsersData";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import SocialMediaIcons from "./SocialMediaIcons";

const AllCards = () => {

  return (
    <Fragment>
      {SocialUserCardData.map((item) => (
        <Col sm="6" xxl="3" xl="4" className="col-ed-4 box-col-4" key={item.id}>
          <Card className="social-profile">
            <CardBody>
              <div className="social-img-wrap">
                <div className="social-img">
                  <Image priority width={68} height={68} className="img-fluid" src={`${ImagePath}/${item.avatar}`} alt="user" />
                </div>
                <div className="edit-icon">
                  <SVG iconId="profile-check" />
                </div>
              </div>
              <div className="social-details">
                <h5 className="mb-1"><Link href="/app/social_app">{item.name}</Link></h5>
                <span className="f-light">{item.email}</span>
                <SocialMediaIcons />
                <ul className="social-follow">
                  <li>
                    <h5 className="mb-0">{item.totalPost}</h5>
                    <span className="f-light">{Posts}</span>
                  </li>
                  <li>
                    <h5 className="mb-0">{item.follower}</h5>
                    <span className="f-light">{Followers}</span>
                  </li>
                  <li>
                    <h5 className="mb-0">{item.following}</h5>
                    <span className="f-light">{Following}</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default AllCards;
