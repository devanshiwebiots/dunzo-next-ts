import React from "react";
import { Table } from "reactstrap";

export default function InvoiceTotal() {
  return (
    <td>
      <Table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "end" }}>
            <td style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "var(--theme-default)", fontSize: 16, fontWeight: 600 }}>{"Payment Teams"} :</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, width: "55%" }}>{"This denotes a payment credit for a full month's supply."}</span>
            </td>
            <td>  
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                <li style={{ display: "flex", paddingBottom: 16 }}>
                  <span style={{ display: "block", width: 95 }}>{"Subtotal"} </span>
                  <span style={{ display: "block", width: 25 }}>:</span>
                  <span style={{ display: "block", width: 95, color: "var(--theme-default)", opacity: "0.9", fontWeight: 600 }}>$6100.00</span>
                </li>
                <li style={{ display: "flex", paddingBottom: 16 }}>
                  <span style={{ display: "block", width: 95 }}>{"Tax"}</span>
                  <span style={{ display: "block", width: 25 }}> :</span>
                  <span style={{ display: "block", width: 95, color: "var(--theme-default)", opacity: "0.9", fontWeight: 600 }}>$50.00</span>
                </li>
                <li className="custom-discount" style={{ display: "flex", paddingBottom: 20 }}>
                  <span style={{ display: "block", width: 95 }}>{"Discount"} </span>
                  <span style={{ display: "block", width: 25 }}> :</span>
                  <span style={{ display: "block", width: 95, color: "var(--theme-default)", opacity: "0.9", fontWeight: 600 }}>$30.00</span>
                </li>
                <li className="custom-discount" style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ display: "block", width: 95 }}>{"Total Due"}</span>
                  <span className="custom-total-price" style={{ display: "block", color: "var(--theme-default)", opacity: "0.9", fontWeight: 600, padding: "12px 25px", borderRadius: 5, fontSize: 18 }}>$6120.00</span>
                </li>
              </ul> 
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
