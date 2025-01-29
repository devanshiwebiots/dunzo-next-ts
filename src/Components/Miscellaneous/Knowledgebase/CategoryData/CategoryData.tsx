import { Card, Col, Row } from "reactstrap";
import { BrowseArticles, knowledgeArticle } from "@/Constant/constant";
import { CategoryDataCardBody } from "./CategoryDataCardBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const CategoryData = () => {
  return (
    <Col sm="12">
      <div className="header-faq">
        <h5 className="mb-0">{knowledgeArticle}</h5>
      </div>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={BrowseArticles} />
            <CategoryDataCardBody />
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
export default CategoryData;
