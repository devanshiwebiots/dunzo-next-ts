import { Card, CardBody, Col } from "reactstrap";
import { Highlight, themes } from "prism-react-renderer";
import { HTMLModeHeading } from "@/Constant/constant";
import { HtmlData } from "@/Data/Miscellaneous/Editors/EditorsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const HtmlMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HTMLModeHeading} />
        <CardBody>
        <Highlight theme={themes.vsDark} code={HtmlData} language="HTML">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HtmlMode;
