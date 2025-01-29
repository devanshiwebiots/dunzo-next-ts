import { Button, Col, Input, Label } from "reactstrap";
import { Formik,Form, Field } from "formik";
import { SignIn } from "@/Constant/constant";
import { StaticModalToggleProp } from "@/Types/UikitsType";

export const StaticForm:React.FC<StaticModalToggleProp> = ({staticModalToggle}) => {
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={(value) => staticModalToggle()}>
     {()=>(
      <Form className="row g-3">
      <Col md="12">
        <Label>Email</Label>
        <Field className="form-control" name="email" type="email" placeholder="Enter Your Email" />
      </Col>
      <Col md="12">
        <Label className="form-label" htmlFor="inputPassword4">Password</Label>
        <Field className="form-control" name="password" type="password" placeholder="Enter Your Password" />
      </Col>
      <Col xs="12">
        <div className="form-check">
          <Input className="form-check-input" type="checkbox" />
          <Label className="form-check-label" htmlFor="gridCheck">Check me out</Label>
        </div>
      </Col>
      <Col xs="12">
        <Button color="primary" onClick={staticModalToggle}>{SignIn}</Button>
      </Col>
    </Form>
     )}
    </Formik>
  );
};
