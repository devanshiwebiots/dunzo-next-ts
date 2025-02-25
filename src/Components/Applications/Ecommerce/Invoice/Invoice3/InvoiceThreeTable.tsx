import React from "react";
import { Table } from "reactstrap";
import InvoiceThreeBody from "./InvoiceThreeBody";
import { InvoiceThreeHeader } from "@/Data/Applications/Ecommerce/EcommerceData";

export default function InvoiceThreeTable() {
  return (
    <td>
      <Table style={{ width: "100%", borderSpacing: 0 }} borderless>
        <thead>
          <tr style={{ background: "var(--theme-default)" }}>
            {InvoiceThreeHeader.map((data, i) => (
              <th style={{ padding: "18px 15px", textAlign: i === 0 ? "left" : "center", borderInline: i !== 3 && i !== 0 ? "3px solid #fff" : "" }} key={i}>
                <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <InvoiceThreeBody />
        </tbody>
      </Table>
    </td>
  );
}
