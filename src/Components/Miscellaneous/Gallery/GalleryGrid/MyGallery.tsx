/* eslint-disable @next/next/no-img-element */
import { Href, ImagePath } from "@/Constant/constant";
import { GalleryGridImages } from "@/Data/Miscellaneous/Gallery/GalleryData";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export const MyGallery=()=> {
  return (
    <Gallery>
      {GalleryGridImages.map((item, index) => (
        <figure className="col-xl-3 col-md-4 col-xs-6 m-0" key={index}>
          <Item original={`${ImagePath}/${item}`} width="1500" height="850">
            {({ ref, open }) => (
              <Link href={Href} onClick={open}>
                <img className="img-thumbnail mb-4 p-2" ref={ref} src={`${ImagePath}/${item}`} alt="image" />
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  );
}
