import { ColoredBreadcrumbDataList } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";
import { Fragment } from "react";
import { BreadcrumbItem } from "reactstrap";
import { Href } from "@/Constant/constant";

export const DynamicColoredBreadcrumb = () => {
  return (
    <>
      {ColoredBreadcrumbDataList.map(({ className, span }, index) => (
        <ol className={`breadcrumb breadcrumb-colored ${className}`} key={index}>
          {span.map(({ title, activeTitle }, index) => (
            <Fragment key={index}>
              {title && (
                <BreadcrumbItem><a className="fw-bold" href={Href}>{title}</a></BreadcrumbItem>
              )}
              {activeTitle && <BreadcrumbItem active className="fw-bold bg-transparent">{activeTitle}</BreadcrumbItem>}
            </Fragment>
          ))}
        </ol>
      ))}
    </>
  );
};
