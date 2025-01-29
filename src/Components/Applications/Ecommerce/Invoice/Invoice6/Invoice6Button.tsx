import React from "react";
import { Button, Col } from "reactstrap";
import { useReactToPrint } from "react-to-print";

export default function Invoice6Button({ componentRef }: { componentRef: React.RefObject<HTMLDivElement> }) {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Col sm="12" className="text-center mt-3">
      <Button color="primary" className="me-2" onClick={handlePrint}>
        {"Print"}
      </Button>
      <Button color="secondary">{"Cancel"}</Button>
    </Col>
  );
}
