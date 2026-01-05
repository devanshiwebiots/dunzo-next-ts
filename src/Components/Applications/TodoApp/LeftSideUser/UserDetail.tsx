import { ImagePath } from "@/Constant/constant";
import Image from "next/image";

const UserDetail = () => {
  return (
      <div className="d-flex align-items-center">
        <div className="media-size-email">
          <Image priority width={52} height={52} className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="image" unoptimized/>
        </div>
        <div className="flex-grow-1">
          <h3>Mark Jecno</h3>
          <p>Markjecno@gmail.com</p>
        </div>
      </div>
  );
};

export default UserDetail;
