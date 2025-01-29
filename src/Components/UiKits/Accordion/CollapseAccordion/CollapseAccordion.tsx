import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ButtonWithDataBsTarget, CollapseAccordions, LinkWithHref } from "@/Constant/constant";
import { AccordionCollapse } from "@/Data/Uikits/Accordion/AccordionData";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Collapse } from "reactstrap";

const CollapseAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);3

  return (
    <Col md="6" sm="12">
      <Card>
        <CommonCardHeader title={CollapseAccordions} subTitle={AccordionCollapse} headClass="pb-0" />
        <CardBody>
          <p className="common-flex">
            <Button color="dark" onClick={toggle}>{LinkWithHref}</Button>
            <Button color="dark" onClick={toggle}>{ButtonWithDataBsTarget}</Button>
          </p>
          <Collapse isOpen={isOpen}>
            <Card color="dark" className="mb-0 dark-accordion">
              <CardBody>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CollapseAccordion;
