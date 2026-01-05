import { ImagePath } from "@/Constant/constant";
import { GroupingImageOne } from "@/Data/Uikits/Avatar/AvatarData";
import Image from "next/image";

export const GroupingFirst = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <Image priority width={100} height={100} className="img-100 b-r-8" src={`${ImagePath}/avtar/4.jpg`} alt="image" unoptimized/>
        </li>
        {GroupingImageOne.map(({ className, src, size }, index) => (
          <li className="d-inline-block" key={index}>
            <Image priority width={size} height={size} className={`${className} h-auto`} src={`${ImagePath}${src}`} alt="image" unoptimized/>
          </li>
        ))}
      </ul>
    </div>
  );
};
