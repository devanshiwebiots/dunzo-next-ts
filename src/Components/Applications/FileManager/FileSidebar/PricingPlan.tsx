import { Free, ImagePath, PricingPlanText, Selected, TrialVersion } from "@/Constant/constant";
import Image from "next/image";
import React from "react";
import { Grid } from "react-feather";
import { Button } from "reactstrap";

export const PricingPlan = () => {
  return (
    <ul>
      <li>
        <Button block color="primary" className="text-start" outline>
          <Grid /> {PricingPlanText}
        </Button>
      </li>
      <li>
        <div className="pricing-plan">
          <h6>{TrialVersion}</h6>
          <h5>{Free}</h5>
          <p>{"100 GB Space"}</p>
          <Button size="xs" color="primary" outline>{Selected}</Button>
          <Image width={128} height={128} className="bg-img" src={`${ImagePath}/dashboard/folder.png`} alt="" priority unoptimized/>
        </div>
      </li>
    </ul>
  );
};
