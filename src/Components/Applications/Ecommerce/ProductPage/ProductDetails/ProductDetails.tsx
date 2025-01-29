import { Card, CardBody, Col } from "reactstrap";
import { ProductTittle } from "@/Constant/constant";
import { ProductColor } from "./ProductColor";
import { ProductDetailButton } from "./ProductDetailButton";
import { ProductRating } from "./ProductRating";
import { ProductSocial } from "./ProductSocial";
import { ProductTable } from "./ProductTable";
import { useAppSelector } from "@/Redux/Hooks";

const ProductDetails = () => {
const ProductDetail: string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.";
const { symbol } = useAppSelector((state) => state.product);

  return (
    <Col xxl="5" className="box-col-6 order-xxl-0 order-1">
      <Card>
        <CardBody>
          <div className="product-page-details">
            <h3 className="f-w-600">{ProductTittle}</h3>
          </div>
          <div className="product-price">
            {symbol}26.00<del>{symbol}350.00 </del>
          </div>
          <ProductColor />
          <p>{ProductDetail}</p>
          <hr />
          <ProductTable />
          <ProductSocial />
          <ProductRating />
          <ProductDetailButton />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductDetails;
