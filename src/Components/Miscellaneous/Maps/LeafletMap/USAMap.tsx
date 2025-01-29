import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletUSAMap } from "@/Constant/constant";
import { UsaMapData } from "@/Data/Miscellaneous/Maps/MapsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const USAMap = () => {
  const positionUSA = { lat: 51.505, lng: -0.09 };

  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={LeafletUSAMap} subTitle={UsaMapData} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={13} center={positionUSA} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} easeLinearity={0.35}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default USAMap;
