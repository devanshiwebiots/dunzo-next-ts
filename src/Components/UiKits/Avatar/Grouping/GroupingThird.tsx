import { ImagePath } from "@/Constant/constant";
import { GroupingImageThird } from "@/Data/Uikits/Avatar/AvatarData";
import Image from "next/image";

export const GroupingThird = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <Image priority width={40} height={40} className="img-40 rounded-circle" src={`${ImagePath}/user/3.jpg`} alt="image" unoptimized/>
        </li>
        {GroupingImageThird.map((item, index) => (
          <li className="d-inline-block" key={index}>
            <Image priority width={40} height={40} className="img-40 rounded-circle" src={`${ImagePath}${item}`} alt="image" unoptimized/>
          </li>
        ))}
      </ul>
    </div>
  );
};