import { AddFriend, Href, ImagePath } from "@/Constant/constant";
import { FollowerData } from "@/Data/Applications/SocialApp/SocialAppData";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import Image from "next/image";
import Link from "next/link";
import { CardBody, Collapse } from "reactstrap";

const FollowerCardCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-list filter-cards-view">
        {FollowerData.map((data, index) => (
          <div className="d-flex" key={index}>
            <Image width={50} height={50} className="img-50 img-fluid m-r-20 rounded-circle" alt="img" src={`${ImagePath}/user/${data.imageName}`} priority/>
            <div className="flex-grow-1">
              <span className="d-block">{data.name}</span>
              <Link href={Href}>{AddFriend}</Link>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default FollowerCardCollapse;
