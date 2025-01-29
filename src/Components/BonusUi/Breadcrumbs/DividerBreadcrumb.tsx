import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { BreadcrumbHome, BreadcrumbProgress, BreadcrumbUiKits, DividerBreadcrumbs, Href } from "@/Constant/constant";
import { DividerBreadcrumbData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DividerBreadcrumb = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DividerBreadcrumbs} subTitle={DividerBreadcrumbData} />
        <CardBody>
          <Breadcrumb className="breadcrumb-icon">
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0 breadcrumb-icon" >
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbUiKits}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbProgress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DividerBreadcrumb