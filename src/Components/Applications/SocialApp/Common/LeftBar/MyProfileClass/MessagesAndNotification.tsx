import { Badge } from "reactstrap";
import { MyPage } from "@/Constant/constant";

const MessagesAndNotification = () => {
  return (
    <div className="flex-grow-1">
      <h3 className="font-primary">{MyPage}</h3>
      <span className="d-block">
        <span>
          <i className="fa fa-comments-o"></i>
          <span className="px-2">Messages<Badge pill color="light" className="ms-2">9</Badge></span>
        </span>
      </span>
      <span className="d-block">
        <span>
          <i className="fa fa-bell-o"> </i>
          <span className="px-2">Notification<Badge pill color="light" className="ms-2">9</Badge></span>
        </span>
      </span>
    </div>
  );
};

export default MessagesAndNotification;
