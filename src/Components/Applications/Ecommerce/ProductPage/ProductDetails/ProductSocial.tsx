import { Col, Form, Row } from "reactstrap";
import { ShareIt } from "@/Constant/constant";
import Link from "next/link";
import { ProductSocialLinks } from "@/Data/Applications/Ecommerce/EcommerceData";

export const ProductSocial = () => {
  return (
    <>
      <Row className="py-1">
        <Col md="4">
          <h6 className="f-w-600 product-title">{ShareIt}</h6>
        </Col>
        <Col md="8">
          <div className="product-icon">
            <ul className="product-social">
              {ProductSocialLinks.map((item, index) => (
                <li className="d-inline-block" key={index}>
                  <Link href={item.link} target="_blank">
                    <i className={`fa fa-${item.text}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
            <Form className="d-inline-block f-right"></Form>
          </div>
        </Col>
      </Row>
      <hr />
    </>
  );
};