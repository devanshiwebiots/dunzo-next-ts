import { InfoColorBodyData } from "@/Data/BonusUi/BasicCard/BasicCardData"
import CommonCard from "./Common/CommonCard"

const InfoColorBody = () => {
  return (
    <>
      {InfoColorBodyData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </>
  )
}

export default InfoColorBody