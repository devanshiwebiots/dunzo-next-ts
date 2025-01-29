import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { WithIconsBreadcrumbs, Href, BreadcrumbBonusUi, BreadcrumbsTag } from "@/Constant/constant";
import { WithIconBreadcrumbData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const WithIconsBreadcrumb = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={WithIconsBreadcrumbs} subTitle={WithIconBreadcrumbData} />
        <CardBody>
          <Breadcrumb className=" p-l-0">
            <BreadcrumbItem><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbBonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className=" m-b-0 p-b-0 p-l-0" >
            <BreadcrumbItem><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbBonusUi}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbsTag}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIconsBreadcrumb