import { InfoColorHeaderData } from "@/Data/BonusUi/BasicCard/BasicCardData";
import CommonCard from "./Common/CommonCard";

const InfoColorHeader = () => {
  return (
    <>
      {InfoColorHeaderData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </>
  );
};

export default InfoColorHeader;
