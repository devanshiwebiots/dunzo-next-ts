import { ImagePath } from "@/Constant/constant";
import { GroupingImageTwo } from "@/Data/Uikits/Avatar/AvatarData";
import Image from "next/image";

export const GroupingSecond = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <Image priority width={60} height={60} className="img-60 rounded-circle" src={`${ImagePath}/avtar/16.jpg`} alt="image" />
        </li>
        {GroupingImageTwo.map(({ className1, className2, src, size }, index) => (
          <li className="d-inline-block" key={index}>
            <Image priority width={size} height={size} className={`${className1 && className1} ${className2 && className2} h-auto`} src={`${ImagePath}${src}`} alt="image" />
          </li>
        ))}
      </ul>
    </div>
  );
};
