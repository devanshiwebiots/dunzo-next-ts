import React from "react";
import SimpleMdeReact from "react-simplemde-editor";
import DownloadLink from "react-download-link";
import SVG from "@/CommonComponent/SVG/Svg";
import Image from "next/image";
import { ImagePath } from "@/Constant/constant";

export const UserFooter = () => {
  const mdeEditorText = `Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`;

  return (
    <div className="user-footer">
      <div>
        <SVG iconId="attchment" />
        <span className="f-light">{"Attachments"}</span>
      </div>
      <div className="d-inline-block">
        <div className="attchment-file common-flex">
          <div className="common-flex align-items-center">
            <Image width={30} height={36} src={`${ImagePath}/email-template/pdfs.png`} alt="pdf" priority />
            <div className="d-block">
              <p>{"Offer_Letter.pdf"}</p>
              <p>{"200KB"}</p>
            </div>
          </div>
          <DownloadLink filename="myfile.txt" label={<i className="fa fa-download f-light"></i>} />
        </div>
      </div>
      <div className="toolbar-box">
        <SimpleMdeReact id="editor_container" value={mdeEditorText} options={{ autofocus: true, spellChecker: false }} />
      </div>
    </div>
  );
};
