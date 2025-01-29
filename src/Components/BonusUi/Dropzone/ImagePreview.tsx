import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { ImagePreviewData } from "@/Data/BonusUi/Dropzone/DropzoneData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { PreviewImage } from "@/Constant/constant";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImagePreview = () => {
  const [files, setFiles] = useState([]);

  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={PreviewImage} subTitle={ImagePreviewData} />
        <CardBody>
          <FilePond files={files} allowReorder={true} allowMultiple={true} maxFiles={1} onupdatefiles={() => setFiles} labelIdle='Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>' />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagePreview;
