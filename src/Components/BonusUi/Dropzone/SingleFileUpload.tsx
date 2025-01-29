import { FileUploadData } from "@/Data/BonusUi/Dropzone/DropzoneData";
import { Card, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { SingleFileUploads } from "@/Constant/constant";

const SingleFileUpload = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={SingleFileUploads} subTitle={FileUploadData} />
        <CommonFileUpload />
      </Card>
    </Col>
  );
};

export default SingleFileUpload;
