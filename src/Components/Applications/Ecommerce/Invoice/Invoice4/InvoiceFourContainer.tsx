import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, InvoiceTitle } from "@/Constant/constant";
import { useRef } from "react";
import { Container, Table } from "reactstrap";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal";
import CommonInvoiceSign from "../Common/InvoiceSign";
import Print from "../Common/Print";

const InvoiceFourContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container className="invoice-4">
        <div ref={componentRef}>
          <Table style={{ width: "100%", margin: "0, auto" }} borderless>
            <tbody>
              <tr>
                <InvoiceFourHeader />
              </tr>
              <tr>
                <InvoiceFourDetail />
              </tr>
              <tr>
                <InvoiceFourTable />
              </tr>
              <tr>
                <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, var(--theme-default) 20.61%, #54BA4A 103.6%)", display: "block", padding: "0" }} />
              </tr>
              <tr>
                <InvoiceTotal />
              </tr>
              <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <CommonInvoiceSign />
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

export default InvoiceFourContainer;
