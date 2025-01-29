import { BadgesAsPartButtons, Messages } from "@/Constant/constant";
import { Mail } from "react-feather";
import { Badge, Button, Card, CardBody, Col } from "reactstrap";
import { DynamicBadgesAsPartButtons } from "./DynamicBadgesAsPartButtons";
import { BadgeButtonData } from "@/Data/Uikits/TagAndPills/TagAndPillsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const BadgesAsPartButtonsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BadgesAsPartButtons} subTitle={BadgeButtonData} headClass="pb-0" />
        <CardBody>
          <div className="badge-spacing flex-column align-items-start">
            <Button color="primary" className="d-flex align-items-center">
              {Messages}
              <Badge color="light" className="rounded-circle badge-light btn-p-space text-dark ms-2"><Mail /></Badge>
            </Button>
            <DynamicBadgesAsPartButtons />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgesAsPartButtonsCart;
