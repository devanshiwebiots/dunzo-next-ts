import React from "react";
import { Table } from "reactstrap";
import InvoiceRightSide from "./InvoiceRightSide";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceDetail from "./InvoiceDetail";
import Image from "next/image";
import { ImagePath } from "@/Constant/constant";

export default function InvoiceFiveHeader() {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <td>
              <Image width={120} height={38} className="for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" priority/>
              <Image width={120} height={38} className="for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" priority/>
            </td>
            <td>
              <InvoiceRightSide />
            </td>
          </tr>
          <tr style={{ display: "flex", justifyContent: "space-between" }}>
            <InvoiceAddress />
            <InvoiceDetail />
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
