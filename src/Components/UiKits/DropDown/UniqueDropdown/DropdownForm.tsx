import { DropdownForms, SignIn } from "@/Constant/constant";
import React, { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label } from "reactstrap";

export const DropdownForm = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="secondary" className="text-white">{DropdownForms}</DropdownToggle>
        <DropdownMenu className="p-4 form-wrapper dark-form">
          <Form>
            <FormGroup>
              <Label>Email address</Label>
              <Input type="email" placeholder="email@example.com" required />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <FormGroup check>
                <Input type="checkbox" />
                <Label>Remember me</Label>
              </FormGroup>
            </FormGroup>
            <Button color="dark">{SignIn}</Button>
          </Form>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
