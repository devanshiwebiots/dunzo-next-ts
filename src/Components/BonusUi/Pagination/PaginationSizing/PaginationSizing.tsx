import { Card, CardBody, Col } from "reactstrap";
import { PaginationSizings } from "@/Constant/constant";
import { DynamicPaginationSizing } from "./DynamicPaginationSizing";
import { StaticPaginationSizing } from "./StaticPaginationSizing";
import { SizingPaginationData } from "@/Data/BonusUi/Pagination/PaginationData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const PaginationSizing = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={PaginationSizings} subTitle={SizingPaginationData} />
        <CardBody className="pb-4">
          <StaticPaginationSizing />
          <DynamicPaginationSizing />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizing;
