import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, InvoiceTitle } from "@/Constant/constant";
import { useRef } from "react";
import { Container, Table } from "reactstrap";
import { InvoiceTwoHeader } from "./InvoiceTwoHeader";
import { InvoiceTwoDetails } from "./InvoiceTwoDetails";
import { InvoiceTwoBilling } from "./InvoiceTwoBilling";
import { InvoiceTwoContent } from "./InvoiceTwoContent";
import { InvoiceTwoTotal } from "./InvoiceTwoTotal";
import Print from "../Common/Print";

const InvoiceTwoContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container className="invoice-2">
        <div ref={componentRef}>
          <Table style={{ width: "100%", margin: "0, auto" }} borderless>
            <tbody>
              <tr>
                <InvoiceTwoHeader />
              </tr>
              <tr>
                <InvoiceTwoDetails />
              </tr>
              <tr>
                <InvoiceTwoBilling />
              </tr>
              <tr>
                <InvoiceTwoContent />
              </tr>
              <tr>
                <InvoiceTwoTotal />
              </tr>
              <tr>
                <td>
                  <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
                </td>
              </tr>
              <tr>
                <td>
                  <Print componentRef={componentRef} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default InvoiceTwoContainer;
