import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";
import { Form } from "reactstrap";

const DropzoneClass = () => {
  return (
    <Form className="dropzone">
      <CommonFileUpload/>
    </Form>
  );
};

export default DropzoneClass;