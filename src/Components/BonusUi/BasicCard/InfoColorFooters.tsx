import { InfoColorFooterData } from "@/Data/BonusUi/BasicCard/BasicCardData"
import CommonCard from "./Common/CommonCard"

const InfoColorFooters = () => {
  return (
    <>
      {InfoColorFooterData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </>
  )
}

export default InfoColorFooters