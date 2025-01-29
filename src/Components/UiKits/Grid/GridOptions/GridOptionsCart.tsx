import { GridOptions } from "@/Constant/constant";
import { GridData } from "@/Data/Uikits/Grid/GridData";
import { Card, CardBody, Col, Table } from "reactstrap";
import { GridOptionTableHead } from "./GridOptionTableHead";
import { GridOptionTableBody } from "./GridOptionTableBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const GridOptionsCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={GridOptions} subTitle={GridData} headClass="pb-0" />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table bordered striped>
              <GridOptionTableHead />
              <GridOptionTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptionsCart;
