import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { DefaultPaginationTitle, Href } from "@/Constant/constant";
import { DefaultPaginationData } from "@/Data/BonusUi/Pagination/PaginationData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DefaultPagination = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DefaultPaginationTitle} subTitle={DefaultPaginationData} />
        <CardBody>
          <Pagination className="pagination-primary pagin-border-primary" aria-label="Page navigation example">
            <PaginationItem><PaginationLink href={Href} previous>Previous</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href} next>Next</PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultPagination;
