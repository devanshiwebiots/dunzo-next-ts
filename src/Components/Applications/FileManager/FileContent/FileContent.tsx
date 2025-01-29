import { toast, ToastContainer } from "react-toastify";
import { Card, CardHeader } from "reactstrap";
import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";
import { FileListData } from "@/Data/Applications/FileManager/FileManagerData";
import { ChangeEvent, useState } from "react";
import SearchBar from "./SearchBar";
import AddUploadMedia from "./AddUploadMedia";
import FileManagerBody from "./FileManagerBody";
import FileListItem from "./FileListItem";

const FileContent = () => {
  const [searchFile, setSearchFile] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [myFile, setMyFile] = useState(FileListData);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onFileUpload = () => {
    let myFiles = [...myFile];
    if (selectedFile !== null) {
      myFiles.push({
        id: myFile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModified}`,
        icon: "f-22 fa fa-file-text-o txt-info",
        folderClass: "f-44 fa fa-folder txt-warning",
        title: "Endless Admin",
        folderFiles: "10 files",
        folderTime: "2 Hour ago",
      });
      setMyFile(myFiles);
      toast.success("File Upload Successfully !");
    } else toast.error("Please Select at least one file !");
  };

  const fileList = myFile.filter((data) => searchFile === "" || data.name.toLowerCase().includes(searchFile.toLowerCase())).map((item, i) => <FileListItem key={i} item={item} />);

  return (
    <Card>
      <CardHeader>
        <div className="d-md-flex d-sm-block">
          <SearchBar searchFile={searchFile} setSearchFile={setSearchFile} />
          <AddUploadMedia onFileChange={onFileChange} onFileUpload={onFileUpload} />
        </div>
      </CardHeader>
      {fileList.length ? <FileManagerBody myFile={myFile} fileList={fileList} searchFile={searchFile} /> : <SearchNotFoundClass word="File" />}
      <ToastContainer />
    </Card>
  );
};

export default FileContent;
