/* eslint-disable @next/next/no-img-element */
import { Href, ImagePath, MyPortfolioTitle } from "@/Constant/constant";
import { GalleryGridImages } from "@/Data/Miscellaneous/Gallery/GalleryData";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export const DescriptionMyGallery = () => {
  const description :string = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." 

  return (
    <Gallery withCaption>
      {GalleryGridImages.map((item, index) => (
        <figure key={index} className="col-xl-3 col-sm-6 m-0" itemProp="caption description">
          <Item original={`${ImagePath}/${item}`} width="1500" height="780" caption={description}>
            {({ ref, open }) => (
              <Link href={Href} onClick={open}>
                <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={`${ImagePath}/${item}`} alt="thumbnail" />
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
  );
};
