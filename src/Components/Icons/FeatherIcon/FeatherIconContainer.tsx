import { Card, Col, Container, Row } from "reactstrap";
import { FeatherIconCardBody } from "./FeatherIconCardBody";
import { FeatherIcons, Icons } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const FeatherIconContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={FeatherIcons} parent={Icons} title={FeatherIcons} />
      <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={FeatherIcons} />
            <FeatherIconCardBody />
          </Card>
        </Col>
      </Row>
    </Container>
    </>
   
  );
};

export default FeatherIconContainer;
