import { StorageText } from "@/Constant/constant";
import React from "react";
import { Database } from "react-feather";
import { Button, Progress } from "reactstrap";

export const Storage = () => {
  return (
    <ul>
      <li>
        <Button block color="primary" className="text-start" outline>
          <Database /> {StorageText}
        </Button>
        <div className="m-t-15">
          <Progress className="sm-progress-bar mb-3" color="primary" value={25} />
          <p>{"25 GB of 100 GB used"}</p>
        </div>
      </li>
    </ul>
  );
};
