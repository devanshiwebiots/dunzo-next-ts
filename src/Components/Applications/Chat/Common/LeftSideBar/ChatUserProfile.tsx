import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";
import { ImagePath } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { changeChat, createNewChatAsync } from "@/Redux/Reducers/ChatSlice";
import { AllMemberType } from "@/Types/ChatType";
import Image from "next/image";
import { Badge } from "reactstrap";

const ChatUserProfile = () => {
  const { members, selectedUser, currentUser, chats } = useAppSelector((state) => state.chat);
  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;
  const dispatch = useAppDispatch();
  const changeChatClick = (selectUser: number) => {
    const currentUserId = currentUser?.id;
    const currentChat = chats.find((x:{users:number[]}) => currentUser?.id !== undefined && x.users.includes(currentUser?.id) && x.users.includes(selectUser));
    if (currentChat) {
      dispatch(changeChat(selectUser));
    } else {
      dispatch(createNewChatAsync({ currentUserId, selectUser, chats }));
    }
  };
  return (
    <>
      {members && members.length > 0 ? (
        <ul className="chats-user overflow-y-auto custom-scrollbar">
          {members
            .filter((x: AllMemberType) => x.id !== currentUser?.id)
            .map((item: AllMemberType, id: number) => (
              <li className={`common-space ${activeChat === item.id ? "active" : ""}`} key={id} onClick={() => changeChatClick(item.id)}>
                <div className="chat-time">
                  <div className="active-profile">
                    <Image width={42} height={42} className="img-fluid rounded-circle" src={`${ImagePath}/${item.image}`} alt="user" priority />
                    <div className={`status bg-${item.online}`} />
                  </div>
                  <div>
                    <span>{item.name}</span>
                    <p>{item.status}</p>
                  </div>
                </div>
                <div>
                  <p>{item.time} </p>
                  {item.badge && (<Badge color="success">15</Badge>)}
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <SearchNotFoundClass word="Contact" />
      )}
    </>
  );
};

export default ChatUserProfile;
