import { Apps, SupportTicket, SupportTicketList } from "@/Constant/constant";
import { SupportData } from "@/Data/Miscellaneous/SupportTicket/SupportTicketData";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TicketList from "./TicketList/TicketList";
import TicketTable from "./TicketTable";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const SupportTicketContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={SupportTicket} parent={Apps} title={SupportTicket} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={SupportTicketList} subTitle={SupportData} headClass="card-no-border pb-0" />
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportTicketContainer;
