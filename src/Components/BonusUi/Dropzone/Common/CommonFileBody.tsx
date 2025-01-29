import { DropFilesHereOrClickToUpload } from "@/Constant/constant";

const CommonFileBody = () => {
  return (
    <div className="dz-message needsclick">
      <i className="icon-cloud-up txt-primary"></i>
      <h4 className="fs-6">{DropFilesHereOrClickToUpload}</h4>
      <span className="f-s-initial fw-lighter">
        (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
      </span>
    </div>
  );
};

export default CommonFileBody;