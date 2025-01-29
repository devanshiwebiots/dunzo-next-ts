import { ThankYouBold, ThankYouItalic } from "@/Constant/constant";

export const BasicTooltipData = [
    {
      text: " Use the ",
      code: "data-bs-title",
    },
    {
      text: " to change tooltip title and ",
      code: "data-bs-toggle",
    },
    {
      text: " to add tooltip attribute.",
    },
  ];
  
  export const ColorTooltipData = [
    {
      text: " Use the ",
      code: "btn- *",
    },
    {
      text: "to change dark background color and ",
      code: "data-bs-placement='*' ",
    },
    {
      text: "to tooltip positions change.",
    },
  ];
  
  export const ColorTooltipList = [
    {
      id: 4,
      buttonColor: "secondary",
      tooltip: "Secondary",
      buttonText: "Secondary",
      placement: "top",
    },
    {
      id: 5,
      buttonColor: "success",
      tooltip: "Success",
      buttonText: "Success",
      placement: "top",
    },
    {
      id: 6,
      buttonColor: "warning",
      tooltip: "Warning",
      buttonText: "Warning",
      className: "text-white",
      placement: "top",
    },
    {
      id: 7,
      buttonColor: "danger",
      tooltip: "Danger",
      buttonText: "Danger",
      placement: "top",
    },
  ];
  
  export const DirectionTooltipData = [
    {
      text: " Use the ",
      code: "btn-*",
    },
    {
      text: " to change dark background color and",
      code: " data-bs-placement='*'",
    },
    {
      text: "[top/right/bottom/left] to tooltip direction change.",
    },
  ];
  
  export const DirectionTooltipList = [
    {
      id: 9,
      placement: "right",
      tooltip: "Tooltip on right",
      buttonText: "Tooltip on right",
      buttonColor: "secondary",
    },
    {
      id: 10,
      placement: "bottom",
      tooltip: "Tooltip on bottom",
      buttonText: "Tooltip on bottom",
      buttonColor: "success",
    },
    {
      id: 11,
      placement: "left",
      tooltip: "Tooltip on left",
      buttonText: "Tooltip on left",
      buttonColor: "warning",
    },
  ];
  
  export const HoverTooltipData = [
    {
      text: " Use the ",
      code: "bg-*-light",
    },
    {
      text: " to change light background color and ",
      code: "data-bs-title '",
    },
    {
      text: " to the content under the HTML tag.",
    },
  ];
  
  export const HoverTooltipList = [
    {
      id: 13,
      tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouBold }}></div>,
      buttonText: "Last Warning",
      className: "bg-warning",
      placement: "top",
    },
    {
      id: 14,
      tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouItalic }}></div>,
      buttonText: "It's Danger",
      className: "bg-danger",
      placement: "top",
    },
    {
      id: 15,
      tooltip: <div dangerouslySetInnerHTML={{ __html: ThankYouBold }}></div>,
      buttonText: "Coming Soon",
      className: "bg-info",
      placement: "top",
    },
  ];
  
  export const FillTooltipData = [
    {
      text: "Tooltip in hover effect through fill dark color.",
      code: "[.btn-outline-*]",
    },
    {
      text: " and ",
      code: "data-bs-title ",
    },
    {
      text: "to the content under the HTML Tag.",
    },
  ];
  
  export const FillTooltipList = [
    {
      id: 17,
      tooltip: "Tooltip Secondary",
      buttonText: "Tooltip Secondary",
      buttonColor: "secondary",
      placement: "top",
    },
    {
      id: 18,
      tooltip: "Tooltip Success",
      buttonText: "Tooltip Success",
      buttonColor: "success",
      placement: "top",
    },
    {
      id: 19,
      tooltip: "Tooltip Info",
      buttonText: "Tooltip Info",
      buttonColor: "info",
      placement: "top",
    },
  ];
  