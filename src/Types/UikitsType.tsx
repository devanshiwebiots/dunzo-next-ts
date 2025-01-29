export interface GridCommonCardFooterType {
  className: string;
  valueClass: string;
}

interface DataProp {
  className?: string;
  text: string;
  title?: string;
}

interface NumberProp {
  className?: string;
  text?: string;
  icon?: JSX.Element;
}

export interface CommonTagCardBodyType {
  data?: DataProp[];
  number?: NumberProp[];
  pill?: boolean;
}

export interface CommonModalType {
  children?: React.ReactNode;
  size?: string;
  isOpen?: boolean;
  toggle?: () => void;
  title?: string;
  fade?: boolean;
  modalBodyClassName?: string;
  modalTitleClassName?: string;
  heading?: string;
  sizeTitle?: string;
  fullTitle?: string;
  staticTitle?: string;
  fullscreen?: true | "sm" | "md" | "lg" | "xl" | "xxl";
  centered?: boolean;
  onClosed?: () => void;
  backdrop?: boolean | "static";
}

export interface CommonFullScreenDataType {
  color: string;
  onClick: () => void;
  title: string;
  fullscreen: "sm" | "md" | "lg" | "xl" | "xxl";
  isOpen: boolean;
  toggle: () => void;
}

export interface ToggleModalType {
  nestedModal?: boolean;
  closeAll?: boolean;
  toggle?: () => void;
  toggleNested?: () => void;
  toggleAll: () => void;
}

export interface ProfileModalType {
  modalOne: boolean;
  modalOneToggle: () => void;
}

export interface CommonDunzoModalTitleType {
  heading: string;
  subHeading: string;
  text: string;
}

export interface BalanceModalType {
  modalThird: boolean;
  modalThirdToggle: () => void;
}

export interface FormSubmitProp {
  modal: () => void;
}

export interface StaticModalToggleProp {
  staticModalToggle: () => void;
}

interface ItemProp {
  id: number;
  placement?: any;
  PopoverHeader?: string;
  PopoverBody?: string;
  btnColor?: string;
  buttonText?: string;
  trigger?: string;
}

export interface CommonPopoverProp {
  key?: number;
  item: ItemProp;
}

interface Itemtype {
  id: number;
  placement?: any;
  tooltip?: string | JSX.Element;
  buttonColor?: string;
  buttonText?: string;
  className?: string;
}

export interface CommonTooltipProp {
  item: Itemtype;
  outline?: boolean;
}

interface ItemsArray {
  item?: string;
  divider?: boolean;
}

interface itemArray extends React.HTMLAttributes<HTMLElement> {
  btnColor?: string;
  btnText: string;
  items: ItemsArray[];
  dropClassName?: string;
  toggleClassName?: string;
  size?: string;
}
export interface CommonDropdownProp {
  item: itemArray;
}

interface ItemsArrayType {
  item: string;
}
interface ArrayType {
  btnColor: string;
  btnText: string;
  items: ItemsArrayType[];
}
export interface SplitButtonDropdownProp {
  item: ArrayType;
}

export interface TabContentProp{
  basicTab:string
}