import { Href, ImagePath, MollyBoake, ScrollableList } from "@/Constant/constant";
import { ScrollableData } from "@/Data/Uikits/Lists/ListsData";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { DynamicScrollableLists } from "./DynamicScrollableLists";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import Image from "next/image";

const ScrollableLists = () => {
  return (
    <Col xxl="4">
      <Card>
        <CommonCardHeader title={ScrollableList} subTitle={ScrollableData} headClass="pb-0" />
        <CardBody>
          <ListGroup className="main-lists-content scrollbar-wrapper custom-scrollbar">
            <ListGroupItem tag="a" className="list-group-item-action active list-hover-primary" href={Href}>
              <div className="list-wrapper gap-0">
                <Image priority width={55} height={55} className="list-img" src={`${ImagePath}/user/9.jpg`} alt="profile" />
                <div className="list-content">
                  <h6>{MollyBoake}</h6>
                  <p>MollyBoake@rhyta.com</p>
                  <small>5 days ago</small>
                </div>
              </div>
            </ListGroupItem>
            <DynamicScrollableLists />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableLists;
