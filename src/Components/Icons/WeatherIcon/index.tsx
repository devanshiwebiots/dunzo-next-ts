import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { Icons, WhetherIcon, whetherIconsWithAnimations } from "@/Constant/constant";
import { WeatherIconList } from "@/Data/Icons/IconsData";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const WeatherIconContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={WhetherIcon} parent={Icons} title={WhetherIcon} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={whetherIconsWithAnimations} />
              <CardBody>
                <Row className="icon-lists whether-icon">
                  {WeatherIconList.map((icon, i) => (
                    <Col lg="2" xs="3" key={i}>
                      {icon.icon}
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeatherIconContainer;
