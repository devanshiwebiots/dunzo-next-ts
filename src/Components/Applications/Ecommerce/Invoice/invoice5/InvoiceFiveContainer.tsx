import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, InvoiceTitle } from "@/Constant/constant";
import { useRef } from "react";
import { Container, Table } from "reactstrap";
import InvoiceFiveHeader from "./InvoiceFiveHeader";
import InvoiceNumber from "./InvoiceNumber";
import InvoiceTable from "./InvoiceTable";
import CommonInvoiceSign from "../Common/InvoiceSign";
import Print from "../Common/Print";

const InvoiceFiveContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container className="invoice-5">
        <div ref={componentRef}>
          <Table style={{ width: "100%", margin: "0, auto" }} borderless>
            <tbody>
              <tr>
                <InvoiceFiveHeader />
              </tr>
              <tr>
                <InvoiceNumber />
              </tr>
              <tr>
                <InvoiceTable />
              </tr>
              <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 36 }}>
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

export default InvoiceFiveContainer;
