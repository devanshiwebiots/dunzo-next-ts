import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { HorizontalList } from "@/Constant/constant";
import { HorizontalData, HorizontalDataList, HorizontalListData } from "@/Data/Uikits/Lists/ListsData";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const HorizontalLists = () => {
  return (
    <Col xl="6" sm="12" className="box-col-6">
      <Card className="height-equal">
        <CommonCardHeader title={HorizontalList} subTitle={HorizontalData} headClass="pb-0" />
        <CardBody>
          <div className="horizontal-list-wrapper dark-list">
            <ListGroup className="fw-bold list-group-horizontal-sm pb-2">
              <ListGroupItem className="border-left-primary">Product</ListGroupItem>
              {HorizontalDataList.map((item, index) => (
                <ListGroupItem key={index}>{item}</ListGroupItem>
              ))}
            </ListGroup>
            {HorizontalListData.map(({ item, color }, index) => (
              <ListGroup className="fw-bold list-group-horizontal-sm pb-2" key={index}>
                {item.map((data, index) => (
                  <ListGroupItem className={`border-left-${index === 0 ? `${color}` : ""}`} key={index}>{data}</ListGroupItem>
                ))}
              </ListGroup>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalLists;