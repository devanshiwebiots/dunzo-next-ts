import { Button, Col, Row } from "reactstrap";
import Link from "next/link";
import { Add, Cancel } from "@/Constant/constant";

export const ButtonSection = () => {
  return (
    <Row>
      <Col>
        <div className="text-end">
          <Button type="submit" color="success" className="me-3">{Add}</Button>
          <Link className="btn btn-danger" href="/project/project_list">{Cancel}</Link>
        </div>
      </Col>
    </Row>
  );
};
