import { Href, ImagePath } from "@/Constant/constant";
import { SocialPhotosData } from "@/Data/Applications/SocialApp/SocialAppData";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Row } from "reactstrap";

const PhotosTab = () => {
  const description: string = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";

  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardBody className="my-gallery gallery-with-description">
            <Row>
              <Gallery withCaption>
                {SocialPhotosData.map((item) => (
                  <figure key={item.id} className="col-xl-3 col-sm-6 m-0" itemProp="caption description">
                    <Item original={`${ImagePath}/big-lightgallry/${item.image}`} width="1500" height="780" caption={description}>
                      {({ ref, open }) => (
                        <Link href={Href} onClick={open}>
                          <Image priority width={370} height={216} className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={`${ImagePath}/big-lightgallry/${item.image}`} alt="thumbnail" unoptimized/>
                          <div className="caption border-top-0 p-2">
                            <h4 className="mt-1">{item.title}</h4>
                            <p>{`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`}</p>
                          </div>
                        </Link>
                      )}
                    </Item>
                  </figure>
                ))}
              </Gallery>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PhotosTab;
