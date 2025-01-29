import { Field, ErrorMessage } from "formik";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { EnterSomeDetails } from "@/Constant/constant";

export const DescriptionSection = () => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{EnterSomeDetails}</Label>
          <Field name="description" as="textarea" className="form-control" rows={3} />
          <ErrorMessage name="description" component="span" className="text-danger" />
        </FormGroup>
      </Col>
    </Row>
  );
};
