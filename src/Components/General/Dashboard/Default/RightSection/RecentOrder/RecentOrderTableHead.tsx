import React from "react";
import { Input, Label } from "reactstrap";

export const RecentOrderTableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <div className="form-check">
            <Input type="checkbox" />
            <Label />
          </div>
        </th>
        <th>Customers name</th>
        <th>Order Date</th>
        <th>items Name</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};
