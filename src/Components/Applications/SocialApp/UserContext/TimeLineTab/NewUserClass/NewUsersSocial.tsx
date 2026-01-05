import { ELANAHeading, ImagePath } from "@/Constant/constant";
import Image from "next/image";
import { MoreVertical } from "react-feather";

const NewUsersSocial = () => {
  return (
    <div className="new-users-social">
     <div className="d-flex">
        <Image priority width={58} height={58} className="rounded-circle image-radius m-r-15" src={`${ImagePath}/user/1.jpg`} alt="user121" unoptimized/>
        <div className="flex-grow-1">
          <h3 className="mb-0 f-w-700">{ELANAHeading}</h3>
          <p>January, 12,2024</p>
        </div>
        <span className="pull-right mt-0">
          <MoreVertical />
        </span>
      </div>
    </div>
  );
};

export default NewUsersSocial;
