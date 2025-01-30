import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, InvoiceTitle } from "@/Constant/constant";
import { useRef } from "react";
import { Container, Table } from "reactstrap";
import Print from "../Common/Print";
import InvoiceBackImage from "./InvoiceBackImage";
import { InvoiceContent } from "./InvoiceContent";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceOrder } from "./InvoiceOrder";
import { InvoiceSign } from "./InvoiceSign";
import { useReactToPrint } from "react-to-print";

const Invoice1Container = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container className="invoice-1">
        <div ref={contentRef}>
          <Table className="table-wrapper" borderless>
            <tbody>
              <tr>
                <InvoiceHeader />
              </tr>
              <tr>
                <InvoiceBackImage />
              </tr>
              <tr>
                <InvoiceContent />
              </tr>
              <tr>
                <InvoiceOrder />
              </tr>
            </tbody>
            <tfoot>
              <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
                <InvoiceSign />
                <td>
                  <Print handlePrint={handlePrint} />
                </td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Invoice1Container;
