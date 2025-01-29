//@ts-nocheck
import { Card, CardBody, Col, UncontrolledAccordion } from "reactstrap";
import CommonAccordionItem from "../Common/CommonAccordionItem";
import { StaticAccordion } from "./StaticAccordion";
import { OutlineAccordions } from "@/Constant/constant";
import { OutlineData, OutlineList } from "@/Data/Uikits/Accordion/AccordionData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const OutlineAccordion = () => {
  return (
    <Col xl="6" sm="12">
      <Card className="basic-accordion">
        <CommonCardHeader title={OutlineAccordions} subTitle={OutlineData} headClass="pb-0" />
        <CardBody>
          <UncontrolledAccordion stayOpen className="dark-accordion">
            <StaticAccordion/>
            {OutlineList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAccordion;
