import React, { Fragment } from "react";
import { ActiveButtonsData, ActiveButtonSubTitle, BoldBorderOutlineButtonsData, BoldBorderOutlineButtonSubTitle, DefaultButtonsData, DefaultButtonText, DisableButtonsData, DisabledButtonSubTitle, FlatButtonSubTitle, GradienButtonsSubTitle, GradientButtonsData, OutlineButtonsData, OutlineButtonSubTitle, RaisedButtonSubTitle, SizingButtonsData, SizingButtonSubTitle } from "@/Data/ButtonsData/DefaultStyleData";
import { ActiveButtonsTitle, BoldBorderOutlineButtonsTitle, DefaultButtonTitle, DisabledButtonsTitle, FlatButtonTitle, GradienButtonsTitle, OutlineButtonsTitle, RaisedButtonTitle, SizingButtonsTitle } from "@/Constant/constant";
import { CommonButtons } from "../Common/CommonButtons";

export const AllButtonLists = () => {
  return (
    <Fragment>
      <CommonButtons commonButtonsData={DefaultButtonsData} title={DefaultButtonTitle} subTitle={DefaultButtonText} />
      <CommonButtons className="btn-square" commonButtonsData={DefaultButtonsData} title={FlatButtonTitle} subTitle={FlatButtonSubTitle} />
      <CommonButtons raised className="btn-pill" commonButtonsData={DefaultButtonsData} title={RaisedButtonTitle} subTitle={RaisedButtonSubTitle} />
      <CommonButtons commonButtonsData={SizingButtonsData} title={SizingButtonsTitle} subTitle={SizingButtonSubTitle} />
      <CommonButtons commonButtonsData={ActiveButtonsData} title={ActiveButtonsTitle} subTitle={ActiveButtonSubTitle} />
      <CommonButtons commonButtonsData={DisableButtonsData} title={DisabledButtonsTitle} subTitle={DisabledButtonSubTitle} />
      <CommonButtons commonButtonsData={OutlineButtonsData} title={OutlineButtonsTitle} subTitle={OutlineButtonSubTitle} />
      <CommonButtons commonButtonsData={BoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsTitle} subTitle={BoldBorderOutlineButtonSubTitle} />
      <CommonButtons commonButtonsData={GradientButtonsData} title={GradienButtonsTitle} subTitle={GradienButtonsSubTitle} />
    </Fragment>
  );
};
