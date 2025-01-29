import { FlagIcon, Icons } from "@/Constant/constant";
import { useState } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import { FlagIconCardBody } from "./FlagIconCardBody";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const FlagIconsContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const getITag = (tag: string) => {
    setITag({
      iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
    });
    setIcon({
      icon: "flag-icon flag-icon-" + tag + " fa-2x",
    });
  };

  return (
    <>
      <Breadcrumbs pageTitle={FlagIcon} parent={Icons} title={FlagIcon} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={FlagIcon} />
              <FlagIconCardBody getITag={getITag} />
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </>
  );
};

export default FlagIconsContainer;
