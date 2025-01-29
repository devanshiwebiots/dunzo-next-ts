import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { Href, ImagePath, Shipped, ShippedOrder } from "@/Constant/constant";
import { OrderData } from "@/Data/Applications/Ecommerce/EcommerceData";
import Image from "next/image";
import { useState } from "react";
import { X } from "react-feather";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, Col, Media, Row } from "reactstrap";

const ShippedOrders = () => {
  const [shippedOrder, setShippedOrder] = useState(OrderData);
  const deleteHandler = (id: number) => {
    const newData = shippedOrder.filter((item) => item.id !== id);
    setShippedOrder([...newData]);
  };

  return (
    <Card>
      <CommonCardHeader title={ShippedOrder} />
      <CardBody>
        <Row className="g-sm-4 g-3">
          {shippedOrder.map((item, index) => (
            <Col xxl="4" md="6" key={index}>
              <div className="prooduct-details-box">
                <div className="d-flex">
                  <Image width={60} height={60} className="align-self-center img-fluid img-70 ms-3 rounded-3" src={`${ImagePath}/ecommerce/${item.image}`} alt={item.name} priority/>
                  <div className="flex-grow-1 ms-3">
                    <div className="product-name">
                      <h6><a href={Href}>{item.name}</a></h6>
                    </div>
                    <Rating initialValue={5} size={17} />
                    <div className="price d-flex p-0 border-0">
                      <div className="text-muted">Price</div>: 210$
                    </div>
                    <div className="avaiabilty">
                      <div className="text-success">In stock</div>
                    </div>
                    <Button tag="a" color="success" size="xs" href={Href}>{Shipped}</Button>
                    <X className="close" onClick={() => deleteHandler(item.id)} />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default ShippedOrders;
