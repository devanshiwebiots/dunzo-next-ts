import { ImagePath } from "@/Constant/constant";
import { Card, Col } from "reactstrap";
import FollowerCard from "./FollowerCard/FollowerCard";
import FollowingsCard from "./FollowingsCard/FollowingsCard";
import FriendsCard from "./FriendsCard";
import LatestPhotos from "./LatestPhotos/LatestPhotos";
import ProfileIntroCard from "./ProfileIntroCard/ProfileIntroCard";
import Image from "next/image";

const RightBar = () => {
  return (
    <>
      <div className="row">
        <Col xl="12" lg="4" md="6" sm="12" className="xl-50 box-col-6">
          <ProfileIntroCard />
        </Col>
        <Col xl="12" lg="4" md="6" sm="12" className="xl-50 box-col-6">
          <FollowerCard />
        </Col>
        <Col xl="12" lg="4" md="6" sm="12" className="xl-50 box-col-6">
          <FollowingsCard />
        </Col>
        <Col xl="12" lg="4" md="6" sm="12" className="xl-50 box-col-6">
          <LatestPhotos />
        </Col>
        <Col xl="12" lg="4" md="6" sm="12" className="xl-50 box-col-6">
          <FriendsCard />
        </Col>
        <Col xl="12" lg="4" md="6" sm="12" className="xl-50 box-col-6">
          <Card>
            <Image width={381} height={254} className="img-fluid rounded-3 w-100" src={`${ImagePath}/social-app/timeline-4.png`} alt="timeline" priority unoptimized/>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default RightBar;
