import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { VariationOfBreadcrumbs, Href, BreadcrumbHome, BreadcrumbTable, BreadcrumbBootstrapTable } from "@/Constant/constant";
import { VariationOfBreadcrumbData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const VariationOfBreadcrumb = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={VariationOfBreadcrumbs} subTitle={VariationOfBreadcrumbData} />
        <CardBody className="breadcrumb-space">
          <Breadcrumb className="breadcrumb-no-divider mb-0 gap-2 h-100">
            <BreadcrumbItem className="mb-1 mb-xl-0 me-1"><a href={Href}>{BreadcrumbHome}{` -> `}</a></BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0 me-1"><a href={Href}>{BreadcrumbTable}{` -> `}</a></BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0 me-1"><a href={Href}>{BreadcrumbBootstrapTable}{` -> `}</a></BreadcrumbItem>
            <BreadcrumbItem active className="ps-0">{`Basic Tables`}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VariationOfBreadcrumb