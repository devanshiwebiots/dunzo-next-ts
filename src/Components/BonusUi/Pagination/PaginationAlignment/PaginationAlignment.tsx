import { Card, CardBody, Col } from "reactstrap";
import { PaginationAlignments } from "@/Constant/constant";
import { StaticPaginationAlignment } from "./StaticPaginationAlignment";
import { DynamicPaginationAlignment } from "./DynamicPaginationAlignment";
import { AlignmentPaginationData } from "@/Data/BonusUi/Pagination/PaginationData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const PaginationAlignment = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={PaginationAlignments} subTitle={AlignmentPaginationData} />
        <CardBody>
          <StaticPaginationAlignment />
          <DynamicPaginationAlignment/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlignment;
