import { InvoiceFourData } from "@/Data/Applications/Ecommerce/EcommerceData";
import React from "react";

export default function InvoiceTableBody() {
  return (
    <>
      {InvoiceFourData.map((data, i) => (
        <tr key={i}>
          <td className="back" style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "#F5F6F9" }}>
            <span style={{ opacity: "0.8", fontWeight: 600 }}>{i + 1}</span>
          </td>
          <td style={{ padding: 16, borderBottom: "1px solid rgba(82, 82, 108, 0.2)" }}>
            <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "var(--theme-default)" }}>{data.title}</h4>
            <span style={{ opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
          </td>
          <td className="back" style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "#F5F6F9" }}>
            <span style={{ fontWeight: 600 }}>${data.price}.00</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)" }}>
            <span style={{ fontWeight: 600 }}>{data.quantity}</span>
          </td>
          <td className="back" style={{ width: "12%", textAlign: "center", borderBottom: "1px solid rgba(82, 82, 108, 0.2)", background: "#F5F6F9" }}>
            <span style={{ color: "var(--theme-default)", fontWeight: 600, opacity: "0.9" }}>${data.total}.00</span>
          </td>
        </tr>
      ))}
    </>
  );
}
