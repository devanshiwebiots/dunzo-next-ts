import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { DynamicScrollableContent } from "./DynamicScrollableContent";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { Href, ImagePath, ScrollableContents } from "@/Constant/constant";
import { ScrollableContentData } from "@/Data/BonusUi/Scrollable/ScrollableData";
import Image from "next/image";

const ScrollableContent = () => {
  return (
    <Col xxl="4" md="12">
      <Card>
        <CommonCardHeader title={ScrollableContents} subTitle={ScrollableContentData} />
        <CardBody>
          <ScrollBar className="scroll-demo scroll-b-none" style={{ width: "100%", height: "300px" }}>
            <ListGroup className="main-lists-content">
              <ListGroupItem tag="a" className="list-group-item-action active list-hover-primary" href={Href}>
                <div className="list-wrapper gap-0">
                  <Image priority width={55} height={55} className="list-img" src={`${ImagePath}/user/9.jpg`} alt="profile" />
                  <div className="list-content">
                    <h6>Molly Boake</h6>
                    <p>MollyBoake@rhyta.com</p><small>5 days ago</small></div>
                </div>
              </ListGroupItem>
              <DynamicScrollableContent />
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableContent;
