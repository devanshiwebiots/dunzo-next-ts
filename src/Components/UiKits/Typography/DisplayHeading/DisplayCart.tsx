import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { DisplayHeadings } from "@/Constant/constant";
import { DisplayData } from "@/Data/Uikits/Typography/TypographyData";
import { Card, CardBody, Col } from "reactstrap";

const DisplayCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={DisplayHeadings} subTitle={DisplayData} headClass="pb-0" />
        <CardBody className="d-flex flex-column gap-2">
          <h1 className="display-1 m-0">Display 1</h1>
          <h1 className="display-2 m-0">Display 2</h1>
          <h1 className="display-3 m-0">Display 3</h1>
          <h1 className="display-4 m-0">Display 4</h1>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayCart;
