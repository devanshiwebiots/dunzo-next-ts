import { ImagePath } from "@/Constant/constant";
import { GroupChatHeader } from "@/Data/Applications/Chats/ChatsData";
import Image from "next/image";

const GroupImages = () => {
  return (
    <div className="chat-time group-chat">
      <ul>
        {GroupChatHeader.map((data, i) => (
          <li key={i}>
            <Image width={38} height={38} className="img-fluid rounded-circle" src={`${ImagePath}/${data}`} alt="user" priority unoptimized/>
          </li>
        ))}
        <li>
          <div className="custom-name profile-count light-background">
            <p className="f-w-500">9+</p>
          </div>
        </li>
      </ul>
      <div>
        <span>Meeting Department</span>
        <p>35 Members</p>
      </div>
    </div>
  );
};

export default GroupImages;
