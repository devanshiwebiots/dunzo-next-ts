import SVG from "@/CommonComponent/SVG/Svg";
import React from "react";

export default function InvoiceRightSide() {
  return (
    <ul className="flex-row" style={{ listStyle: "none", display: "flex", alignItems: "center", background: "linear-gradient(291deg, var(--theme-default) 21.2%, #6051FE 83.92%)", padding: "31px 80px", borderBottomLeftRadius: 100, gap: 28 }}>
      <li>
        <SVG className="stroke-icon" iconId="call" style={{ height: "14px", width: "14px", fill: "#fff", marginRight: "10px" }} />
        <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>(239) 555-0108</span>
      </li>
      <li style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.3)", borderRight: "1px solid rgba(255, 255, 255, 0.3)", padding: "0 22px" }}>
        <SVG className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="email-box" />
        <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>Dunzo@themesforest.com</span>
      </li>
      <li>
        <SVG className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="web" />
        <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>{"Website"}: www.Dunzothemes.com</span>
      </li>
    </ul>
  );
}
