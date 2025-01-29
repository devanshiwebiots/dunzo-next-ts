import React, { useState } from "react";
import { Button, Col, FormGroup, Label, ModalBody, Row } from "reactstrap";
import { Form, Formik, Field } from "formik";
import { FormSubmitProp } from "@/Types/UikitsType";
import { SignUp } from "@/Constant/constant";
import { FormSchema } from "@/Data/Uikits/Modal/ModalData";

export const OpenModalForm:React.FC<FormSubmitProp> = ({modal}) => {
  const [formSubmit, setFormSubmit] = useState(false);  

  return (
    <ModalBody>
      <Formik initialValues={{ firstname: "", lastname: "", email: "" }} onSubmit={modal} validationSchema={FormSchema}>
        {({ errors }) => (
          <Form className="g-3">
            <Row>
            <Col md="6">
              <Label>First name</Label>
              <Field type="text" name="firstname" className={`form-control ${formSubmit && `${errors.firstname ? "is-invalid" : "is-valid"}`}`} placeholder="Enter your first-name" />
            </Col>
            <Col md="6">
              <Label>Last name</Label>
              <Field type="text" name="lastname" className={`form-control ${formSubmit && `${errors.lastname ? "is-invalid" : "is-valid"}`}`} placeholder="Enter your last-name" />
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>Email address</Label>
                <Field type="text" name="email" className={`form-control ${formSubmit && `${errors.lastname ? "is-valid" : "is-invalid"}`}`} placeholder="Rihotheme@gmail.com" />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup check>
                <Field className="form-check-input" type="checkbox" name="agree" />
                <Label check className="text-success">You accept our Terms and Privacy Policy by clicking Submit below.</Label>
              </FormGroup>
              <Button color="primary" onClick={() => setFormSubmit(true)}>{SignUp}</Button>
            </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </ModalBody>
  );
};
