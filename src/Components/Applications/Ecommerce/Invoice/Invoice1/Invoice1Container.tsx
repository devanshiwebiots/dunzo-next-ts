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

const Invoice1Container = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Breadcrumbs pageTitle={InvoiceTitle} parent={ECommerce} title={InvoiceTitle} />
      <Container className="invoice-1">
        <div ref={componentRef}>
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
                  <Print componentRef={componentRef} />
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
