import { Container, Row } from "reactstrap";
import CustomScrollbar from "./CustomScrollbar";
import SmallSizeScrollbar from "./SmallSizeScrollbar";
import BadgesScrollbar from "./BadgesScrollbar";
import ProfileScrollable from "./ProfileScrollable";
import ScrollableContent from "./ScrollableContent/ScrollableContent";
import HorizontalScrollbar from "./HorizontalScrollbar";
import BothSideVisibleScrollbar from "./BothSideVisibleScrollbar";
import { BonusUi, Scrollable } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const ScrollableContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Scrollable} parent={BonusUi} title={Scrollable} />
      <Container fluid>
        <Row>
          <CustomScrollbar />
          <SmallSizeScrollbar />
          <BadgesScrollbar />
          <ProfileScrollable />
          <ScrollableContent />
          <HorizontalScrollbar />
          <BothSideVisibleScrollbar />
        </Row>
      </Container>
    </>
  );
};

export default ScrollableContainer;
