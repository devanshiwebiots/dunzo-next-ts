import { Href } from "@/Constant/constant";
import Link from "next/link";
import React from "react";
import { useReactToPrint } from "react-to-print";

export default function Print({ componentRef }: { componentRef: React.RefObject<HTMLDivElement> }) {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <span style={{ display: "flex", justifyContent: "end", gap: 15 }}>
      <Link onClick={handlePrint} style={{ background: "var(--theme-default)", color: "rgba(255, 255, 255, 1)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href}>
        {"Print Invoice"}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
      <Link style={{ background: "rgba(48, 126, 243, 0.1)", color: "var(--theme-default)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href} download>
        {"Download"}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
    </span>
  );
}
