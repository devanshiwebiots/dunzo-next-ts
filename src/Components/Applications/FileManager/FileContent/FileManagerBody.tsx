import { FileManagerBodyProps } from "@/Types/FileManagerType";
import React from "react";
import { CardBody } from "reactstrap";
import FolderListItem from "./FolderListItem";
import { QuickAccessData } from "@/Data/Applications/FileManager/FileManagerData";

const FileManagerBody: React.FC<FileManagerBodyProps> = ({ myFile, fileList, searchFile }) => {
  return (
    <CardBody className="file-manager">
      {!searchFile && (
        <>
          <h5 className="mb-2">{"Quick Access"}</h5>
          <ul className="simple-list quick-file d-flex flex-row">
            {QuickAccessData.map((item) => (
              <li key={item.id}>
                <div className="quick-box">
                  {item.quickClass}
                </div>
                <h6 className="mb-2">{item.quickTitle}</h6>
              </li>
            ))}
          </ul>
          <h5 className="mt-4 mb-2">{"Folders"}</h5>
          <ul className="simple-list folder flex-row">
            {myFile.map((item) => (
              <FolderListItem key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
      <h5 className="mt-4 mb-2 mb-2 mb-2">{"Files"}</h5>
      <ul className="simple-list d-flex flex-row files-content">{fileList}</ul>
    </CardBody>
  );
};
export default FileManagerBody;
