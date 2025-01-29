import SVG from "@/CommonComponent/SVG/Svg";
import { ImagePath, ProgressTitle } from "@/Constant/constant";
import { WebCardProps } from "@/Types/DashboardType";
import Image from "next/image";
import React from "react";
import { Progress } from "reactstrap";

export const CommentCustomerContent: React.FC<WebCardProps> = ({ item }) => {
  return (
    <>
      <div className="comment">
        <ul>
          {item.comment.map((list) => (
            <li key={list.id}>
              <SVG iconId={list.icon} />
              <span>{list.spanText}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-shrink-0">
        <div className="user-details customers">
          <ul>
            {item.customers.map((list) => (
              <li className="d-inline-block" key={list.id}>
                <Image priority width={42} height={42} src={`${ImagePath}/dashboard-3/user/${list.image}`} alt="user" />
              </li>
            ))}
          </ul>
        </div>
        <div className="progress-value">
          <span>
            {ProgressTitle}
            <span>
              {item.progressValue}
              {"%"}
            </span>
          </span>
          <Progress value={item.progressValue} color={item.color} />
        </div>
      </div>
    </>
  );
};
