import { Grouping } from "@/Constant/constant";
import { GroupingData } from "@/Data/Uikits/Avatar/AvatarData";
import { Card, CardBody, Col } from "reactstrap";
import { GroupingFirst } from "./GroupingFirst";
import { GroupingSecond } from "./GroupingSecond";
import { GroupingThird } from "./GroupingThird";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const GroupingCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={Grouping} subTitle={GroupingData} headClass="pb-0" />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <GroupingFirst />
              <GroupingSecond />
              <GroupingThird />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupingCart;
