import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { DefaultList } from "@/Constant/constant";
import { DefaultData, DefaultListData } from "@/Data/Uikits/Lists/ListsData";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DefaultLists = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={DefaultList} subTitle={DefaultData} headClass="pb-0" />
        <CardBody>
          <ListGroup>
            <ListGroupItem><i className="icofont icofont-arrow-right"></i>Logo Design</ListGroupItem>
            {DefaultListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
