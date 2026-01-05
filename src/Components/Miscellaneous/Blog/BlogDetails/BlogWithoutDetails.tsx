import { ImagePath } from "@/Constant/constant";
import { BlogDataList } from "@/Data/Miscellaneous/Blog/BlogData";
import Image from "next/image";
import { Card, Col } from "reactstrap";

const BlogWithoutDetails = () => {
  return (
    <>
      {BlogDataList.map((data, index) => (
        <Col md="6" xl="3" className="box-col-3" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image priority width={381} height={238} className="img-fluid top-radius-blog rounded-top-3" src={`${ImagePath}/blog/${data.src}`} alt="blog" unoptimized/>
              <div className="blog-details-main">
                <ul className="blog-social">
                  <li className="digits rounded-0">9 April 2024</li>
                  <li className="digits rounded-0">by: Admin</li>
                  <li className="digits rounded-0">0 Hits</li>
                </ul>
                <hr />
                <p className="blog-bottom-details mt-2">{data.text}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogWithoutDetails;
