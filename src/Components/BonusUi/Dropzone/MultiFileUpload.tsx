import { FileUploadData } from "@/Data/BonusUi/Dropzone/DropzoneData";
import { Card, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { MultiFileUploads } from "@/Constant/constant";

const MultiFileUpload = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MultiFileUploads} subTitle={FileUploadData} />
        <CommonFileUpload multiple/>
      </Card>
    </Col>
  );
};

export default MultiFileUpload;
