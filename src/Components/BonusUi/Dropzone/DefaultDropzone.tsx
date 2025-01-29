import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { DefaultFileUploads } from "@/Constant/constant";
import { DefaultFileUpload } from "@/Data/BonusUi/Dropzone/DropzoneData";
import React, { useState } from "react";
import { FilePond } from "react-filepond";
import { Card, CardBody, Col } from "reactstrap";

const DefaultDropzone = () => {
  const [files, setFiles] = useState([]);
  
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={DefaultFileUploads} subTitle={DefaultFileUpload} />
        <CardBody>
          <FilePond files={files} onupdatefiles={() => setFiles} allowMultiple={true} maxFiles={1} labelIdle={'Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultDropzone;
