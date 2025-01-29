import { ImagePath } from "@/Constant/constant";
import { Table } from "reactstrap";

export const InvoiceHeader = () => {
  return (
    <td>
      <Table className="logo-wrappper w-100" borderless>
        <tbody>
          <tr>
            <td>
              <picture><img className="for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" /></picture>
              <picture><img className="for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo"/></picture>
              <span style={{ opacity: "0.8", display: "block", marginTop: 10 }}>202-555-0258</span>
            </td>
            <td className="address" style={{ textAlign: "right", opacity: "0.8", width: "16%" }}>
              <span>1982 Harvest Lane New York, NY12210 United State</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};
