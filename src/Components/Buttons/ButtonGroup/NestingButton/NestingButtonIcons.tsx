import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { NestingIconData } from "@/Data/ButtonsData/GroupButtonData";

export const NestingButtonIcons = () => {
  return (
    <>
      {NestingIconData.map((list) => (
        <div className="m-b-30" key={list.id}>
          <ButtonGroup>
            {list.child.map((item) => (
              <Button color={item.color} size={item.size ? item.size : ""} key={item.id}>
                <i className={`fa ${item.iconClass}`}></i>
              </Button>
            ))}
          </ButtonGroup>
        </div>
      ))}
    </>
  );
};
