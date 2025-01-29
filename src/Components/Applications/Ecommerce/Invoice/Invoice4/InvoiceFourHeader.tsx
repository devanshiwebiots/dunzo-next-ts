import { ImagePath } from "@/Constant/constant";
import Image from "next/image";
import React from "react";
import { Table } from "reactstrap";

export default function InvoiceFourHeader() {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between" }}>
            <td>
              <h4 style={{ fontSize: 42, fontWeight: 600, color: "var(--theme-default)", margin: 0 }}>{"INVOICE"}</h4>
              <ul style={{ listStyle: "none", display: "flex", gap: 15, padding: 0, margin: "20px 0" }}>
                <li>
                  <span style={{ fontSize: 18, fontWeight: 600, opacity: "0.8" }}>{"Invoice to"} :</span>
                </li>
                <li>
                  <span style={{ fontWeight: 600, fontSize: 18, color: "var(--theme-default)", display: "block", marginBottom: 8 }}>Brooklyn Simmons</span>
                  <span style={{ width: "75%", display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                  <span style={{ lineHeight: "1.9", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }}>{"Phone"} : (219) 555-0114</span>
                  <span style={{ lineHeight: "1.7", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }}>{"Email"} : yourmail@themesforest.com</span>
                  <span style={{ lineHeight: "1.7", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }}>{"Website"}: www.websites.com</span>
                </li>
              </ul>
            </td>
            <td>
              <Image width={158} height={50} className="for-light" style={{ height: 50, marginBottom: 14 }} src={`${ImagePath}/logo/logo-1.png`} alt="logo" priority />
              <Image width={158} height={50} className="for-dark" style={{ height: 50, marginBottom: 14 }} src={`${ImagePath}/logo/logo.png`} alt="logo" priority />
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>{"Phone"} : (239) 555-0108</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>{"Email"} : Dunzo@themesforest.com</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>{"Website"}: www.Dunzothemes.com</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
