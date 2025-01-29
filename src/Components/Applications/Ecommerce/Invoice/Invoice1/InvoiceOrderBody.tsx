import { Dollar } from "@/Constant/constant";
import { useAppSelector } from "@/Redux/Hooks";
import { getallCardTotal, getCartTotal } from "@/utils/Ecommerce.service";
import React from "react";

export default function InvoiceOrderBody() {
  const { cart, tax } = useAppSelector((state) => state.cartData);

  return (
    <>
      {cart &&
        cart.map((item) => (
          <tr style={{ boxShadow: "0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)", borderRadius: "5.47059px" }} key={item.id}>
            <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ minWidth: 7, height: 7, border: "4px solid var(--theme-default)", background: "#fff", borderRadius: "100%", display: "inline-block" }} />
              <span>{item.name}</span>
            </td>
            <td style={{ padding: "18px 15px" }}>
              <span>${item.price}</span>
            </td>
            <td style={{ padding: "18px 15px" }}>
              <span>{item.total}</span>
            </td>
            <td style={{ padding: "18px 15px", textAlign: "right" }}>
              <span>$ {getCartTotal(item)}</span>
            </td>
          </tr>
        ))}
      <tr>
        <td> </td>
        <td> </td>
        <td style={{ padding: "5px 0", paddingTop: 15 }}>
          <span>{"Subtotal"}</span>
        </td>
        <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 15 }}>
          <span>
            {Dollar} {cart.reduce((total, item) => total + getCartTotal(item), 0)}
          </span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td style={{ padding: "5px 0", paddingTop: 0 }}>
          <span>Tax({tax}%)</span>
        </td>
        <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 0 }}>
          <span>
            {Dollar} {(getallCardTotal(cart) * tax) / 100}
          </span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td style={{ padding: "10px 0" }}>
          <span style={{ fontWeight: 600 }}>{"Amount Due (USD)"}</span>
        </td>
        <td style={{ padding: "10px 0", textAlign: "right" }}>
          <span style={{ fontWeight: 600 }}>
            {Dollar} {getallCardTotal(cart) + (getallCardTotal(cart) * tax) / 100}
          </span>
        </td>
      </tr>
    </>
  );
}