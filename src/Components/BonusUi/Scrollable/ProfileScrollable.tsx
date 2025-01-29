import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { Href, ImagePath, ProfileScrollableTitle } from "@/Constant/constant";
import { ProfileScroll, ProfileScrollList } from "@/Data/BonusUi/Scrollable/ScrollableData";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ProfileScrollable = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ProfileScrollableTitle} subTitle={ProfileScroll} />
        <CardBody>
          <ScrollBar className="scroll-demo scroll-b-none" style={{ width: "100%", height: "300px" }}>
            <ListGroup>
              <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary">
                <Image priority width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/3.png`} alt="user" />
                Gloria D. Acheson
              </ListGroupItem>
              {ProfileScrollList.map(({ text, src }, index) => (
                <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary" key={index}>
                  <Image priority width={40} height={40} className="rounded-circle" src={`${ImagePath}/${src}`} alt="user" />
                  {text}
                </ListGroupItem>
              ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileScrollable;
