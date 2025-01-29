import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, InvoiceTitle } from "@/Constant/constant";
import { useRef } from "react";
import { Container, Table } from "reactstrap";
import InvoiceThreeHeader from "./InvoiceThreeHeader";
import InvoiceClientDetail from "./InvoiceClientDetail";
import InvoiceThreeTable from "./InvoiceThreeTable";
import InvoiceBankTransfer from "./InvoiceBankTransfer";
import Print from "../Common/Print";

const InvoiceThreeContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container className="invoice-3">
        <div ref={componentRef}>
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

export default InvoiceThreeContainer;
