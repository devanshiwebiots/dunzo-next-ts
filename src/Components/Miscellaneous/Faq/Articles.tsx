import { ArticleData } from "@/Data/Miscellaneous/Faq/FaqData";
import { Card, CardBody, Col } from "reactstrap";

const Articles = () => {
  return (
    <>
      {ArticleData.map((item) => (
        <Col xl="4" sm={item.sm} className={`box-col-${item.box}`} key={item.id}>
          <Card className="bg-primary">
            <CardBody>
            <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                </div>
                {item.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default Articles;