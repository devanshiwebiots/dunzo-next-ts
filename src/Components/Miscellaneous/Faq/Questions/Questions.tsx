import { Fragment } from "react";
import { Col, Row } from "reactstrap";
import AccordionCard from "../Common/AccordionCard";
import FaqRightSidebar from "./FaqRightSide";
import { QuickQuestions } from "@/Constant/constant";
import { FaqQuestionsData } from "@/Data/Miscellaneous/Faq/FaqData";

const Questions = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h5 className="mb-0">{QuickQuestions}</h5>
      </div>
      <Row className="default-according style-1 faq-accordion">
        <Col xl="8" lg="6" md="7" className="xl-60">
          {FaqQuestionsData.map((item, i) => (
            <Fragment key={i}>
              {item.subTitle && (
                <div className="faq-title">
                  <h5>{item.subTitle}</h5>
                </div>
              )}
              {FaqQuestionsData[i].titles.map((item, id) => (
                <AccordionCard key={id} item={item} />
              ))}
            </Fragment>
          ))}
        </Col>
        <FaqRightSidebar />
      </Row>
    </Col>
  );
};
export default Questions;
