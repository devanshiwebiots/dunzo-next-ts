import { Card, CardBody, Col } from "reactstrap";
import { Brand } from "@/Constant/constant";
import { ShippingDetails } from "./ShippingDetails";

const BrandDetail = () => {
  const Brands: string[] = ["Clothing", "Bags", "Footwear", "Watches", "ACCESSORIES"];

  return (
    <Col xxl="3" md="6" className="box-col-12">
      <Card className="p-2">
        <CardBody>
          <div className="filter-block">
            <h4>{Brand}</h4>
            <ul>
              {Brands.map((item, index) => (
                <li className="f-w-500" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
      <ShippingDetails />
    </Col>
  );
};

export default BrandDetail;
