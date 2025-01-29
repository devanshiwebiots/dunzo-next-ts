import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ListsWithRadio, Meditations } from "@/Constant/constant";
import { ListRadioData, ListRadioDataList } from "@/Data/Uikits/Lists/ListsData";
import { Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

const ListsWithRadios = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ListsWithRadio} subTitle={ListRadioData} headClass="pb-0" />
        <CardBody>
          <ListGroup>
            <ListGroupItem>
              <Input className="me-1 active checkbox-danger" type="radio" defaultChecked name="radio"/>
              <Label check className="mb-0">{Meditations}</Label>
            </ListGroupItem>
            {ListRadioDataList.map(({ color, text,id }, index) => (
              <ListGroupItem key={index}>
                <Input className={`me-1 checkbox-${color}`} type="radio" id={`secondRadio-${id}`} name="radio"/>
                <Label check className="mb-0" htmlFor={`secondRadio-${id}`}>{text}</Label>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListsWithRadios;
