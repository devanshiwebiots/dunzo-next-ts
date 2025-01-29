import { Href, ImagePath } from "@/Constant/constant";
import { FriendData } from "@/Data/Applications/SocialApp/SocialAppData";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import Image from "next/image";
import Link from "next/link";
import { CardBody, Collapse } from "reactstrap";
 
const ActivityFeedCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {FriendData.map((data, index) => (
          <div className="d-flex" key={index}>
            <Image width={50} height={50} className="img-50 rounded-circle m-r-15" src={`${ImagePath}/user/${data.imageName}`} alt="user" priority/>
            <div className="flex-grow-1">
              <span className="d-block">{data.title}</span>
              <p>{`Commented on Shaun Park's`} <Link href={Href}>Photo</Link></p>
              <span className="light-span">{data.time} Ago</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default ActivityFeedCollapse;
