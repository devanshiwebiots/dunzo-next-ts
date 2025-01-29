import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletIndiaMap } from "@/Constant/constant";
import { IndianMapData, IndianMapPosition } from "@/Data/Miscellaneous/Maps/MapsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const IndiaMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={LeafletIndiaMap} subTitle={IndianMapData} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={5} center={IndianMapPosition} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default IndiaMap;
