import { Card, CardBody, Col, Container, Row } from "reactstrap";
import InvoiceSixHeader from "./InvoiceSixHeader";
import UserDetails from "./UserDetails";
import InvoiceSixTable from "./InvoiceSixTable";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, InvoiceTitle } from "@/Constant/constant";
import Invoice6Button from "./Invoice6Button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const InvoiceSixContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div ref={contentRef} className="invoice">
                  <div>
                    <InvoiceSixHeader />
                    <hr />
                    <UserDetails />
                    <InvoiceSixTable />
                  </div>
                  <Invoice6Button handlePrint={handlePrint} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InvoiceSixContainer;
