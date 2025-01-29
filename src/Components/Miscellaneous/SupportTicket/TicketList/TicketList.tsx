import { Row, Col, Card, CardBody } from "reactstrap";
import CountUp from "react-countup";
import ProfitAndLoss from "./ProfitAndLoss";
import { TicketData } from "@/Data/Miscellaneous/SupportTicket/SupportTicketData";

const TicketList = () => {
  return (
    <Row>
      {TicketData.map((item, index) => (
        <Col xl="4" md="6" className="box-col-6" key={index}>
          <Card className="ecommerce-widget">
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs="5">
                  <span>{item.title}</span>
                  <h3 className="total-num counter">
                    <CountUp end={item.num} className="mb-1" delay={1}/>
                  </h3>
                </Col>
                <ProfitAndLoss />
              </Row>
              <div className="progress-showcase">
                <div className="progress sm-progress-bar">
                  <div className={`progress-bar ${item.class}`} style={{ width: "70%" }}></div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;
