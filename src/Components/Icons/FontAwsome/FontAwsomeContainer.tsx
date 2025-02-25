import React, { useCallback, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import FontAwsomeCard from "./FontAwsomeCard";
import { FontAwesomeIcons, Icons } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { FontAwesomeData } from "@/Data/Icons/IconsData";

const FontAwsomeContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");
  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="fa fa-' + tag + '"></i>',
    });
    setIcon({
      icon: "fa fa-" + tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <Breadcrumbs pageTitle={FontAwesomeIcons} parent={Icons} title={FontAwesomeIcons} />
      <Container fluid>
        {FontAwesomeData.map((icons, index) => {
          return (
            <Row key={index}>
              <Col sm="12">
                <FontAwsomeCard iconType={icons.data} title={icons.title} parentCallback={callback} />
              </Col>
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </>
  );
};

export default FontAwsomeContainer;
