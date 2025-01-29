import React from "react";
import { GroupButtonData } from "@/Data/ButtonsData/GroupButtonData";
import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const GroupButtonClass = () => {
  return (
    <>
      {GroupButtonData.map((item, i) => (
        <Col xs="12" key={i}>
          <Card>
            <CommonCardHeader headClass="card-no-border pb-0" title={item.title} />
            <CardBody className="btn-group-showcase">
              <Row>
                {item.color.map((colorItem, i) => (
                  <Col xl={4} md="6" sm="12" key={i}>
                    <ButtonGroup className={colorItem.btnClass}>
                      <Button size={colorItem.size ? colorItem.size : ""} color={colorItem.leftButtonClass ? colorItem.leftButtonClass : colorItem.colorClass}>
                        {colorItem.title1}
                      </Button>
                      <Button size={colorItem.size ? colorItem.size : ""} color={colorItem.differentClass ? colorItem.differentClass : colorItem.colorClass}>
                        {colorItem.title2}
                      </Button>
                      <Button size={colorItem.size ? colorItem.size : ""} color={colorItem.rightButtonClass ? colorItem.rightButtonClass : colorItem.colorClass}>
                        {colorItem.title3}
                      </Button>
                    </ButtonGroup>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
