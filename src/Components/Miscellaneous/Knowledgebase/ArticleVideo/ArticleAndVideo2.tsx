import { ArticleAndVideoTwo } from "@/Data/Miscellaneous/Knowledgebase/KnowledgebaseData";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticleAndVideo2 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {ArticleAndVideoTwo.map((item, i) => (
          <Col sm="12" key={i}>
            <Card>
              <CardBody>
                <div className="d-flex articles-icons">
                  {item.iconClass}
                  <div className="flex-grow-1">
                    <h6 className="f-w-600">{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ArticleAndVideo2;
