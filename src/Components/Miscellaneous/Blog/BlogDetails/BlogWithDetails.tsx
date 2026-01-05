import { BlogWithoutDetailHeading, ImagePath } from "@/Constant/constant";
import { BlogData } from "@/Data/Miscellaneous/Blog/BlogData";
import Image from "next/image";
import { Card, Col, Row } from "reactstrap";

const BlogWithDetails = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      {BlogData.map((data, index) => (
        <Card key={index}>
          <Row className="blog-box blog-list">
            <Col sm="5">
              <Image priority width={316} height={225} className="img-fluid sm-100-w" src={`${ImagePath}/blog/blog-${data.image}.jpg`} alt="images" unoptimized/>
            </Col>
            <Col sm="7">
              <div className="blog-details">
                <div className="blog-date">
                  <span>{data.date}</span> January 2024
                </div>
                <h4>{BlogWithoutDetailHeading}</h4>
                <div className="blog-bottom-content">
                  <ul className="blog-social">
                    <li className="rounded-0">by: Admin</li>
                    <li className="digits">{data.hits} Hits</li>
                  </ul>
                  <hr />
                  <p className="mt-0">A huge part of it is the incomparable beauty you can encounter every day.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  );
};

export default BlogWithDetails;
