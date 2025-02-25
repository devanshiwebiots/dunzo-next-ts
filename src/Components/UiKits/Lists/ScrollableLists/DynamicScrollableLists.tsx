import { Href, ImagePath } from "@/Constant/constant";
import { ScrollableDataList } from "@/Data/Uikits/Lists/ListsData";
import Image from "next/image";
import { ListGroupItem } from "reactstrap";

export const DynamicScrollableLists = () => {
  return (
    <>
      {ScrollableDataList.map(({ src, title, mail, days }, index) => (
        <ListGroupItem tag="a" className="list-group-item-action list-hover-primary" href={Href} key={index}>
          <div className="list-wrapper gap-0">
            <Image priority width={55} height={55} className="list-img" src={`${ImagePath}/${src}`} alt="profile" />
            <div className="list-content">
              <h6>{title}</h6>
              <p>{mail}</p>
              <small className="text-muted">{days}</small>
            </div>
          </div>
        </ListGroupItem>
      ))}
    </>
  );
};
