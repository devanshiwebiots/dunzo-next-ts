import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { FlushList } from "@/Constant/constant";
import { FlushData, FlushListData } from "@/Data/Uikits/Lists/ListsData";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const FlushLists = () => {
  return (
    <Col xl="4" md="12">
      <Card>
        <CommonCardHeader title={FlushList} subTitle={FlushData} headClass="pb-0" />
        <CardBody>
          <ListGroup flush>
            <ListGroupItem><i className="icofont icofont-arrow-right"></i>PRODUCT</ListGroupItem>
            {FlushListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushLists;
