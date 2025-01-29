import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { BreadcrumbAlert, BreadcrumbHome, BreadcrumbUiKits, DefaultBreadcrumbs, Href } from "@/Constant/constant";
import { BreadcrumbData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

const DefaultBreadcrumb = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DefaultBreadcrumbs} subTitle={BreadcrumbData} />
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0">
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbUiKits}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbAlert}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultBreadcrumb;
