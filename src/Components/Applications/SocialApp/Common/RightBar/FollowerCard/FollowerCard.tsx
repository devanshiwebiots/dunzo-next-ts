import { Card } from "reactstrap";
import { useState } from "react";
import FollowerCardCollapse from "./FollowerCardCollapse";
import HeaderWithIcon from "../../HeaderWithIcon";
import { Followers } from "@/Constant/constant";

const FollowerCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Followers} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FollowerCardCollapse isFilter={isOpen} />
    </Card>
  );
};

export default FollowerCard;
