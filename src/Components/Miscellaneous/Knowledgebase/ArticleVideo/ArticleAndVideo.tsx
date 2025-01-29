import { Col, Row } from "reactstrap";
import { LatestArticles } from "@/Constant/constant";
import { ArticleAndVideo1 } from "./ArticleAndVideo1";
import ArticleAndVideo2 from "./ArticleAndVideo2";
import ArticleAndVideo3 from "./ArticleAndVideo3";

const ArticleAndVideo = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h5 className="mb-0">{LatestArticles}</h5>
      </div>
      <Row className="latest-articles">
        <ArticleAndVideo1/>
        <ArticleAndVideo2/>
        <ArticleAndVideo3/>
      </Row>
    </Col>
  );
};

export default ArticleAndVideo;
