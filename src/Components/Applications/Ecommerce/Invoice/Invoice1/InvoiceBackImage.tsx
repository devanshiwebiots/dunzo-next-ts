import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant/constant";
import React from "react";

export default function InvoiceBackImage() {
  return (
    <td>
      <RatioImage className="banner-image w-100" src={`${ImagePath}/email-template/invoice-1/1.png`} alt="background" />
    </td>
  );
}
