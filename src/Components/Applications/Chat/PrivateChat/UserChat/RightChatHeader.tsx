import { ImagePath } from "@/Constant/constant";
import { useAppSelector } from "@/Redux/Hooks";
import ContactEdit from "./ContactEdit";
import Image from "next/image";

const RightChatHeader = () => {
  const {selectedUser} = useAppSelector((state)=> state.chat)
  
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <div className="chat-time">
          <div className="active-profile">
            <Image width={42} height={42} className="img-fluid rounded-circle" src={`${ImagePath}/${selectedUser?.image ? `${selectedUser?.image}` : "avtar/3.jpg"}`} alt="user" priority unoptimized/>
            <div className="status bg-success" />
          </div>
          <div>
            <span>{selectedUser?.name ? selectedUser?.name : "Cameron Williamson"}</span>
            <p>Online</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert">
            <i className="icon-info-alt" />
          </div>
          <ContactEdit dropClass="chat-alert"  />
        </div>
      </div>
    </div>
  );
};

export default RightChatHeader;
