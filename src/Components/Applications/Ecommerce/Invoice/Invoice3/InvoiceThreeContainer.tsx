import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, InvoiceTitle } from "@/Constant/constant";
import { useRef } from "react";
import { Container, Table } from "reactstrap";
import InvoiceThreeHeader from "./InvoiceThreeHeader";
import InvoiceClientDetail from "./InvoiceClientDetail";
import InvoiceThreeTable from "./InvoiceThreeTable";
import InvoiceBankTransfer from "./InvoiceBankTransfer";
import Print from "../Common/Print";
import { useReactToPrint } from "react-to-print";

const InvoiceThreeContainer = () => {
   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container className="invoice-3">
        <div ref={contentRef}>
          <Table style={{ width: "1160px", margin: "0, auto" }} borderless>
            <tbody>
              <tr>
                <InvoiceThreeHeader />
              </tr>
              <tr>
                <InvoiceClientDetail />
              </tr>
              <tr>
                <td>
                  <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }}></span>
                </td>
              </tr>
              <tr>
                <InvoiceThreeTable />
              </tr>
              <tr>
                <InvoiceBankTransfer />
              </tr>
              <tr>
                <td>
                  <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
                </td>
              </tr>
              <tr>
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

export default InvoiceThreeContainer;
