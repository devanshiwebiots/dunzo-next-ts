import { ImagePath } from "@/Constant/constant";
import { RecentOrderData } from "@/Data/General/Dashboard/DashboardData";
import Image from "next/image";
import { Button, Input, Label } from "reactstrap";
import Link from "next/link";

export const EcommerceTableBody = () => {
  return (
    <tbody>
      {RecentOrderData.map((item, index) => (
        <tr key={index}>
          <td>
            <div className="form-check">
              <Input type="checkbox" value="" />
              <Label></Label>
            </div>
          </td>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image
                  width={38}
                  height={38}
                  src={`${ImagePath}/dashboard-2/product/${item.image}.png`}
                  alt=""
                  priority
                  unoptimized
                />
              </div>
              <div className="flex-grow-1 ms-2">
                <Link href="/ecommerce/product_list">
                  <h6>{item.productName}</h6>
                  <span>{item.productCode}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>
            <h6>{item.customerName}</h6>
            <span>{item.customerAddress}</span>
          </td>
          <td>{item.date}</td>
          <td>
            <Button color="transparent" className={`${item.statusClass}`}>
              {item.status}
            </Button>
          </td>
          <td>{item.total}</td>
        </tr>
      ))}
    </tbody>
  );
};
