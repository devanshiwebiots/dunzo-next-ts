import { Col } from "reactstrap";
import { Fragment } from "react";
import { LeftRibbonsDataList } from "@/Data/BonusUi/Ribbons/RibbonsData";
import { RibbonProp } from "@/Types/BonusUiType";

export const DynamicLeftRibbons = () => {
  return (
    <>
      {LeftRibbonsDataList.map(({ className, ribbonClass, title, span, icon }: RibbonProp, index) => (
        <Col sm="6" xl="4" key={index}>
          <div className={`border border-1 height-equal h-100 ${className ? className : ""}`}>
            <div className={`ribbon ${ribbonClass}`}>
              {title && title}
              {icon && icon}
            </div>
            <p>
              {span.map(({ spanText, text }, index) => (
                <Fragment key={index}>
                  {text && text}
                  {spanText && <em className="txt-danger">{spanText}</em>}
                </Fragment>
              ))}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};
