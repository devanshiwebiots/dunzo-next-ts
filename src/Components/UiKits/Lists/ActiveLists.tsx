import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ActiveData, ActiveListData } from "@/Data/Uikits/Lists/ListsData";
import { ActiveList } from "@/Constant/constant";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const ActiveLists = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={ActiveList} subTitle={ActiveData} headClass="pb-0" />
        <CardBody>
          <ListGroup>
            <ListGroupItem className="active bg-warning-light"><i className="icofont icofont-arrow-right"></i>UI Kits</ListGroupItem>
            {ActiveListData.map((item, index) => (
            <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
          ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveLists;
