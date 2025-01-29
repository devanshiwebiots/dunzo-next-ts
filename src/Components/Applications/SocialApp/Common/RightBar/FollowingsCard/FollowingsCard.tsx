import { Card } from "reactstrap";
import FollowingsCardCollapse from "./FollowingsCardCollapse";
import { useState } from "react";
import HeaderWithIcon from "../../HeaderWithIcon";
import { Following } from "@/Constant/constant";

const FollowingsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Following} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FollowingsCardCollapse isFilter={isOpen} />
    </Card>
  );
};

export default FollowingsCard;
