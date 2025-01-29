'use client'
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchChatApiData, fetchChatMemberApiData } from "@/Redux/Reducers/ChatSlice";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import UserChat from "./UserChat";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { Chats, PrivateChat } from "@/Constant/constant";
import { LeftSideBar } from "../Common/LeftSideBar/LeftSideBar";

const PrivateChatContainer = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs pageTitle={PrivateChat} parent={Chats} title={PrivateChat} />
      <Container fluid>
        <Row className="g-0">
          <LeftSideBar />
          <UserChat />
        </Row>
      </Container>
    </>
    
  );
};

export default PrivateChatContainer;