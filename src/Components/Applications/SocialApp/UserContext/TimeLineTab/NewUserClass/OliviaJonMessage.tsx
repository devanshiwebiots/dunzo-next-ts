import { ImagePath } from "@/Constant/constant";
import Image from "next/image";

const OliviaJonMessage = () => {
  return (
    <div className="other-msg">
      <div className="d-flex">
        <Image priority width={50} height={50} className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={`${ImagePath}/user/3.png`} unoptimized/>
        <div className="flex-grow-1">
          <span>Olivia Jon&nbsp;<span>15 Days Ago <i className="fa fa-reply font-primary" /></span>
          </span>
          <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
        </div>
      </div>
    </div>
  );
};

export default OliviaJonMessage;
