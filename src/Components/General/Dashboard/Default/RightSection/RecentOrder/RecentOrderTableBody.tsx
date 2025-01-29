import { ImagePath } from "@/Constant/constant";
import { RecentOrders } from "@/Data/General/Dashboard/DashboardData";
import Image from "next/image";
import React from "react";
import { Button, Input, Label } from "reactstrap";

export const RecentOrderTableBody = () => {
  return (
    <tbody>
      {RecentOrders.map((order) => (
        <tr key={order.id}>
          <td>
            <div className="form-check">
              <Input type="checkbox" />
              <Label />
            </div>
          </td>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image priority width={38} height={38} src={`${ImagePath}/dashboard/user/${order.id}.png`} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
                <a href="user-profile.html">
                  <h6>{order.name}</h6>
                  <span>{order.orderNumber}</span>
                </a>
              </div>
            </div>
          </td>
          <td>
            <h6>{order.date}</h6>
            <span>{order.time}</span>
          </td>
          <td>{order.product}</td>
          <td>{order.price}</td>
          <td>
            <Button color="transparent" className={`${order.status === "Paid" ? "bg-light-primary txt-primary" : order.status === "Pending" ? "bg-light-secondary txt-secondary" : "bg-light-danger txt-danger"}`}>{order.status}</Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
