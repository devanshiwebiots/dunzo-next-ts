import { ImagePath } from "@/Constant/constant";
import { MainLearningCardData } from "@/Data/Miscellaneous/Learning/LearningData";
import Image from "next/image";
import { Card, Col, Row } from "reactstrap";

const MainLearningCards = () => {
  const LearningCardsDetails = "Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple websites and applications which will not work if Java is not installed.";
  const LearningCardsWebDetails = "Web development is the work involved in developing a website for the Internet or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services, and many more such applications and websites are being created every day.";

  return (
    <>
      {MainLearningCardData.map((data, index) => (
        <Col xl="12" key={index}>
          <Card>
            <Row className="blog-box blog-list ">
              <Col sm="5">
                <Image priority width={600} height={450} className="img-fluid sm-100-w" src={`${ImagePath}/faq/${index + 1}.jpg`} alt="blog-image" />
              </Col>
              <Col sm="7">
                <div className="blog-details">
                  <div className="blog-date">
                    <span>{data.dateSpan}</span> {data.date}
                  </div>
                  <h3>{data.language}</h3>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li className="rounded-0">by: {data.learningCardBy}</li>
                      <li className="digits">{data.hits} Hits</li>
                    </ul>
                    <hr />
                    <p className="mt-0">{index === 0 ? LearningCardsDetails : LearningCardsWebDetails}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MainLearningCards;
