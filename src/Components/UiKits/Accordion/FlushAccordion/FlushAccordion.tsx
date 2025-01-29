//@ts-nocheck
import React, { useState } from "react";
import { Accordion, Card, CardBody, Col } from "reactstrap";
import { StaticAccordion } from "./StaticAccordion";
import CommonAccordionItem from "../Common/CommonAccordionItem";
import { FlushAccordions } from "@/Constant/constant";
import { FlushData, FlusList } from "@/Data/Uikits/Accordion/AccordionData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const FlushAccordion = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => (open === id ? setOpen() : setOpen(id));

  return (
    <Col sm="12" xl="6">
      <Card className="basic-accordion">
        <CommonCardHeader title={FlushAccordions} subTitle={FlushData} headClass="pb-0" />
        <CardBody>
          <Accordion flush open={open} toggle={toggle} className="dark-accordion">
            <StaticAccordion/>
            {FlusList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushAccordion;
