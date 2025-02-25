import { InvoiceFourData, InvoiceTableHeader } from "@/Data/Applications/Ecommerce/EcommerceData";
import React from "react";
import { Table } from "reactstrap";

export default function InvoiceFourTable() {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%", borderSpacing: 0 }}>
        <thead>
          <tr style={{ background: "var(--theme-default)" }}>
            {InvoiceTableHeader.map((data, i) => (
              <th style={{ border: "none", padding: "18px 15px", textAlign: data === "Description" ? "left" : "center", position: data === "Description" || data === "Subtotal" ? "relative" : undefined, borderTopRightRadius: data === "Subtotal" ? 10 : 0, borderTopLeftRadius: data === "Description" ? 10 : 0 }} key={i}>
                <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {InvoiceFourData.map((data, i) => (
            <tr key={i}>
              <td style={{ padding: 30 }}>
                <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "var(--theme-default)" }}>{data.title}</h4>
                <span style={{ opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
              </td>
              <td style={{ width: "12%", textAlign: "center" }}>
                <span style={{ opacity: "0.8" }}>${data.price}.00</span>
              </td>
              <td style={{ width: "12%", textAlign: "center" }}>
                <span style={{ opacity: "0.8" }}>{data.quantity}</span>
              </td>
              <td style={{ width: "12%", textAlign: "center" }}>
                <span style={{ color: "var(--theme-default)", fontWeight: 600, opacity: "0.9" }}>${data.total}.00</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </td>
  );
}
