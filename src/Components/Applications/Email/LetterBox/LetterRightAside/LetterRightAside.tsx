import React from "react";
import { Card, Col, TabContent, TabPane } from "reactstrap";
import { useAppSelector } from "@/Redux/Hooks";
import { LetterBoxNavContentType } from "@/Types/EmailType";
import { ComposeModal } from "./ComposeModal/ComposeModal";
import { MailHeader } from "./MailHeader/MailHeader";
import { InboxTab } from "./InboxTab/InboxTab";
import { SentTab } from "./SentTab";
import { StarredTab } from "./StarredTab";
import { DraftTab } from "./DraftTab";
import { TrashTab } from "./TrashTab";
import { WorkTab } from "./WorkTab";
import { PrivateTab } from "./PrivateTab";
import { SupportTab } from "./SupportTab";
import AddLabelModal from "./AddLabelModal";
import { EmailRead } from "./EmailRead/EmailRead";

export const LetterRightAside:React.FC<LetterBoxNavContentType>=({ navId })=> {
  const { interviewEmail } = useAppSelector((state) => state.email);

  return (
    <Col xxl="9" xl="8" className="box-col-12">
      <div className="email-right-aside">
        <Card className={`email-body email-list ${interviewEmail ? "hide" : "show"}`}>
          <ComposeModal />
          <MailHeader />
          <TabContent activeTab={navId} id="email-pills-tabContent">
            <TabPane tabId={"1"}><InboxTab /></TabPane>
            <TabPane tabId={"2"}><SentTab /></TabPane>
            <TabPane tabId={"3"}><StarredTab /></TabPane>
            <TabPane tabId={"4"}><DraftTab /></TabPane>
            <TabPane tabId={"5"}><TrashTab /></TabPane>
            <TabPane tabId={"6"}><WorkTab /></TabPane>
            <TabPane tabId={"7"}><PrivateTab /></TabPane>
            <TabPane tabId={"8"}><SupportTab /></TabPane>
            <AddLabelModal />
          </TabContent>
        </Card>
        <EmailRead />
      </div>
    </Col>
  );
}
