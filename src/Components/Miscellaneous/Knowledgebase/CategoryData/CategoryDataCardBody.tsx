import { Archive, FileText, ArrowRight } from "react-feather";
import { Badge, CardBody, Col, Row } from "reactstrap";
import { Href } from "@/Constant/constant";
import Link from "next/link";
import { KnowledgeBaseData } from "@/Data/Miscellaneous/Knowledgebase/KnowledgebaseData";

export const CategoryDataCardBody = () => {
  return (
    <CardBody>
      <Row className="browse g-sm-4 g-3">
        {KnowledgeBaseData.map((data) => (
          <Col xl="4" md="6" key={data.id} className="box-col-33">
            <div className="browse-articles">
              <h4><span><Archive className="feather feather-archive" /></span>{data.title}</h4>
              <ul>
                {data.knowledgeList &&
                  data.knowledgeList.map((data, index2) => (
                    <li key={index2}>
                      <Link href={Href}>
                        {data.fileTextIcon ? (<span><FileText /></span>) : (<span><ArrowRight /></span>)}
                        <span>{data.text}</span>
                        {data.badge ? <Badge color="primary" className="pull-right">{data.badge}</Badge> : " "}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};


