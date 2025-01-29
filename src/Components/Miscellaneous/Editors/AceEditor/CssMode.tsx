import { Card, CardBody, Col } from "reactstrap";
import AceEditor from "react-ace";
import { CSSModeHeading } from "@/Constant/constant";
import { CssData } from "@/Data/Miscellaneous/Editors/EditorsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const CssMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CSSModeHeading} />
        <CardBody>
          <AceEditor
            className="aceEditor w-auto"
            mode="css"
            theme="monokai"
            value={CssData}
            name="blah2"
            setOptions={{ useWorker: false }}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
          />
        </CardBody>
      </Card>
    </Col>
  );
};
export default CssMode;
