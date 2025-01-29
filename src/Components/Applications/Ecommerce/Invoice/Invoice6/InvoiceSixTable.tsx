import { InvoiceSixTableData } from "@/Data/Applications/Ecommerce/EcommerceData";
import { Table } from "reactstrap";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceSixTableBody from "./InvoiceSixTableBody";

export default function InvoiceSixTable() {
  return (
    <div>
      <div className="table-responsive custom-scrollbar custom-scrollbar invoice-table" id="table">
        <Table bordered striped>
          <tbody>
            <tr>
              {InvoiceSixTableData.map((data, i) => (
                <td className="item" key={i}>
                  <h3 className="p-2 mb-0">{data}</h3>
                </td>
              ))}
            </tr>
            <InvoiceSixTableBody />
            <tr>
              <td />
              <td />
              <td className="Rate">
                <h3 className="mb-0 p-2">{"Total"}</h3>
              </td>
              <td className="payment">
                <h3 className="mb-0 p-2">$3,644.25</h3>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <InvoiceFooter />
    </div>
  );
}
