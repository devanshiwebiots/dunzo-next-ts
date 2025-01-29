import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { GridForColumn } from "@/Constant/constant";
import { ColumnData, GridColumnDetails } from "@/Data/Uikits/Grid/GridData";
import { Card, CardBody, Col, Row } from "reactstrap";

const GridColumnCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={GridForColumn} subTitle={ColumnData} headClass="pb-0" />
        <CardBody className="grid-showcase">
          <Row>
            <Col md="1" className="text-center"><span>col-md-1</span></Col>
            {GridColumnDetails.map(({ size, item }, index) => (
              <Col md={size} className={`${item} text-center`} key={index}><span>{item}</span></Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumnCart;
