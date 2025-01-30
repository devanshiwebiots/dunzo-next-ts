import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, InvoiceTitle } from "@/Constant/constant";
import { useRef } from "react";
import { Container, Table } from "reactstrap";
import InvoiceFiveHeader from "./InvoiceFiveHeader";
import InvoiceNumber from "./InvoiceNumber";
import InvoiceTable from "./InvoiceTable";
import CommonInvoiceSign from "../Common/InvoiceSign";
import Print from "../Common/Print";
import { useReactToPrint } from "react-to-print";

const InvoiceFiveContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container className="invoice-5">
        <div ref={contentRef}>
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
                  <Print handlePrint={handlePrint} />
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
