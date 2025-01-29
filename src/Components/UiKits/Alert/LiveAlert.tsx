import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { useState } from "react";
import { LiveAlertData } from "@/Data/Uikits/Alert/AlertData";
import { LiveAlerts, ShowLiveAlert } from "@/Constant/constant";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const LiveAlert = () => {
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState<string[]>([]);

  const onDismiss = () => setVisible(false);

  const dataShown = (key: number) => {
    setData(data.filter((item, index) => index !== key));
  };

  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={LiveAlerts} subTitle={LiveAlertData} headClass="pb-0" />
        <CardBody className="live-dark">
          <Alert fade color="light-dark" isOpen={visible} toggle={onDismiss}>
            <p className="text-dark">Nice, you triggered this alert message!</p>
          </Alert>
          {data.length > 0 &&
            data.map((item, index) => (
              <Alert fade color="light-dark" className="alert-dismissible" key={index}>
                <p className="text-dark">Nice, you triggered this alert message!</p>
                <Button close onClick={() => dataShown(index)}></Button>
              </Alert>
            ))}
          <Button color="dark" onClick={() => setData(() => [...data, "Alerts"])}>{ShowLiveAlert}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveAlert;
