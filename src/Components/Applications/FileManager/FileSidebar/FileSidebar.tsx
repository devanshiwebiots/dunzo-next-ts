import React, { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { FileFilter } from "@/Constant/constant";
import { FileSidebarButton } from "@/Data/Applications/FileManager/FileManagerData";
import { Storage } from "./Storage";
import { PricingPlan } from "./PricingPlan";

export const FileSidebar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Col xl="3" className="box-col-30">
      <div className="md-sidebar job-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={toggle}>
          {FileFilter}
        </Button>
        <div className={`md-sidebar-aside custom-scrollbar ${open ? "open" : ""}`}>
          <div className="file-sidebar">
            <Card>
              <CardBody>
                <ul>
                  {FileSidebarButton.map((data) => (
                    <li key={data.id}>
                      <Button block className="text-start" color={data.id === 1 ? "primary" : "light"}>
                        {data.icon} {data.text}
                      </Button>
                    </li>
                  ))}
                </ul>
                <hr />
                <Storage />
                <hr />
                <PricingPlan />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};
