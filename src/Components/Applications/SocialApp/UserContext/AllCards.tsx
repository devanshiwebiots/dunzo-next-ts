import { Followers, Following, ImagePath, Posts } from "@/Constant/constant";
import Link from "next/link";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import SocialMediaIcons from "../Common/SocialMediaIcons";
import { SocialUserCardData } from "@/Data/Applications/SocialApp/SocialAppData";
import SVG from "@/CommonComponent/SVG/Svg";
import Image from "next/image";

const AllCards = () => {
  return (
    <Fragment>
      {SocialUserCardData.map((item) => (
        <Col sm="12" md="6" lg="6" xl="4" className="box-col-4" key={item.id}>
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
                    <h3 className="mb-0">{item.totalPost}</h3>
                    <span className="f-light">{Posts}</span>
                  </li>
                  <li>
                    <h3 className="mb-0">{item.follower}</h3>
                    <span className="f-light">{Followers}</span>
                  </li>
                  <li>
                    <h3 className="mb-0">{item.following}</h3>
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
