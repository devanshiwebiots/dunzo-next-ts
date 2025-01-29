import React from "react";
import { Button, ButtonGroup, Col, Input, Label } from "reactstrap";
import { Option1, Option2 } from "@/Constant/constant";
import { ButtonPropsType } from "@/Types/ButtonsType";

export const CheckBoxButton: React.FC<ButtonPropsType> = ({ item }) => {
  return (
    <Col xl="6" sm="12">
      <ButtonGroup className={item.btnClass}>
        <Button color={item.colorClass}>
          <div className={item.divClass}>
            <Input id={item.id1} type="checkbox" />
            <Label htmlFor={item.id1}>{Option1}</Label>
          </div>
        </Button>
        <Button color={item.colorClass}>
          <div className={item.divClass}>
            <Input id={item.id2} type="checkbox" />
            <Label htmlFor={item.id2}>{Option2}</Label>
          </div>
        </Button>
      </ButtonGroup>
    </Col>
  );
};
