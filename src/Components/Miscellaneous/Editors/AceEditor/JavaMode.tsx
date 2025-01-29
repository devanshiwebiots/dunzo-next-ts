import { Card, CardBody, Col } from "reactstrap";
import { Highlight, themes } from "prism-react-renderer";
import { JavaModeHeading } from "@/Constant/constant";
import { TypScriptData } from "@/Data/Miscellaneous/Editors/EditorsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const JavaMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={JavaModeHeading} />
        <CardBody>
        <Highlight theme={themes.vsDark} code={TypScriptData} language="Java">
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
export default JavaMode;
