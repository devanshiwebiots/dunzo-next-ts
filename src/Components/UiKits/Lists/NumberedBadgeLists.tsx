import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { NumberedBadgeList } from "@/Constant/constant";
import { NumberBadgeData, NumberBadgeDataList } from "@/Data/Uikits/Lists/ListsData";
import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const NumberedBadgeLists = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={NumberedBadgeList} subTitle={NumberBadgeData} headClass="pb-0" />
        <CardBody>
          <ListGroup numbered>
            <ListGroupItem className="d-flex justify-content-between align-items-start flex-wrap">
              <div className="ms-2 me-auto">Stella Nowland</div>
              <Badge color="warning" pill className="p-2">Freelance</Badge>
            </ListGroupItem>
            {NumberBadgeDataList.map(({ title, color, text }, index) => (
              <ListGroupItem className="d-flex justify-content-between align-items-start flex-wrap" key={index}>
                <div className="ms-2 me-auto">{title}</div>
                <Badge color={color} pill className="p-2">{text}</Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NumberedBadgeLists;
