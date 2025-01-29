import { Card, CardBody, Col } from 'reactstrap';
import { Highlight, themes } from "prism-react-renderer";
import { JavascriptModeTitle } from '@/Constant/constant';
import { JavaData } from '@/Data/Miscellaneous/Editors/EditorsData';
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';

const JavascriptMode = () => {
  return (
      <Col xl='6'>
        <Card>
          <CommonCardHeader title={JavascriptModeTitle} />
          <CardBody>
          <Highlight theme={themes.vsDark} code={JavaData} language="javascript">
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
export default JavascriptMode;
