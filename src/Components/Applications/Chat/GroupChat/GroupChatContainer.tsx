'use client'
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { LeftSideBar } from "../Common/LeftSideBar/LeftSideBar";
import UserGroupChat from "./UserGroupChat";
import { fetchChatApiData, fetchChatMemberApiData } from "@/Redux/Reducers/ChatSlice";
import { useAppDispatch } from "@/Redux/Hooks";
import { Chats, GroupChat } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const GroupChatContainer = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs pageTitle={GroupChat} parent={Chats} title={GroupChat} />
      <Container fluid>
      <Row className="g-0">
        <LeftSideBar />
        <UserGroupChat />
      </Row>
      </Container>
    </>    
  );
};

export default GroupChatContainer;
