import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { CommonButtonsInterface } from "@/Types/ButtonsType";
import React from "react";
import { Button, Card, CardBody } from "reactstrap";

export const CommonButtons: React.FC<CommonButtonsInterface> = ({ commonButtonsData, title, subTitle, className, raised }) => {
  return (
    <Card>
      <CommonCardHeader title={title} subTitle={subTitle} headClass="pb-0" />
      <CardBody>
        <div className="btn-showcase">
          {commonButtonsData.map((data, index) => (
            <Button key={index} className={`${className ? className : ""} ${raised && `btn-air-${data.color}`}`} outline={data.outline} active={data.active} disabled={data.disabled} size={data.size ? data.size : ""} id={data.id} color={data.color}>
              {data.title}
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
