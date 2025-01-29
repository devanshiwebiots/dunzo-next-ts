'use client'
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import LeftSideUser from "./LeftSideUser/LeftSideUser";
import ToDoApp from "./ToDoApp/ToDoApp";
import { Apps, ToDoHeading } from "@/Constant/constant";
import { fetchTodoApiData } from "@/Redux/Reducers/ToDoSlice";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const TodoAppContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodoApiData());
  }, [dispatch]);

  return (
    <>
     <Breadcrumbs pageTitle={ToDoHeading} parent={Apps} title={ToDoHeading} />
     <Container fluid className="email-wrap bookmark-wrap todo-wrap">
      <Row>
        <LeftSideUser />
        <ToDoApp />
      </Row>
    </Container>
    </>
   
  );
};

export default TodoAppContainer;
