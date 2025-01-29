import { Card, CardBody, Col } from "reactstrap";
import { Highlight, themes } from "prism-react-renderer";
import { CSSModeHeading } from "@/Constant/constant";
import { CssData } from "@/Data/Miscellaneous/Editors/EditorsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const CssMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CSSModeHeading} />
        <CardBody>
        <Highlight theme={themes.vsDark} code={CssData} language="css">
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
export default CssMode;
