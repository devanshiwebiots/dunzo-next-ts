/* eslint-disable @next/next/no-img-element */
import { Row } from "reactstrap";
import { Href, ImageAbout, ImagePath, MyPortfolioTitle } from "@/Constant/constant";
import PagesSort from "./Pages";
import { Gallery, Item } from "react-photoswipe-gallery";
import { GalleryGridImages } from "@/Data/Applications/SearchResult/SearchResultData";
import Link from "next/link";

const PhotosTab = () => {
  const description :string = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." 

  return (
    <>
      <h6 className="mb-2">{ImageAbout}</h6>
      <Row className="my-gallery gallery-with-description">
        <Gallery withCaption>
          {GalleryGridImages.map((item, index) => (
            <figure key={index} className="col-xl-3 col-sm-6 m-0" itemProp="caption description">
              <Item original={`${ImagePath}/${item}`} width="1500" height="780" caption={description}>
                {({ ref, open }) => (
                  <Link href={Href} onClick={open}>
                    <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="thumbnail" />
                    <div className="caption border-top-0 p-2">
                      <h4>{MyPortfolioTitle}</h4>
                      <p>{`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`}</p>
                    </div>
                  </Link>
                )}
              </Item>
            </figure>
          ))}
        </Gallery>
      </Row>
      <PagesSort pageClass="start" />
    </>
  );
};

export default PhotosTab;
