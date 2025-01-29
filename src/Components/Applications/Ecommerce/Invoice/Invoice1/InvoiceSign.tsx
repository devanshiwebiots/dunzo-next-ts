import { ImagePath } from "@/Constant/constant";
import Image from "next/image";
import React from "react";

export const InvoiceSign = () => {
  return (
    <td>
      <Image width={155} height={50} src={`${ImagePath}/email-template/invoice-1/sign.png`} alt="sign" priority />
      <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: 200, padding: 0 }} />
      <span style={{ color: "rgba(82, 82, 108, 0.8)" }}>{"Authorized Sign"}</span>
    </td>
  );
};
