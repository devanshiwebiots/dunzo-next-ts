"use client";
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import NavClass from "./NavClass";
import { fetchTaskApiData, setActiveTab } from "@/Redux/Reducers/TaskSlice";
import { useAppDispatch } from "@/Redux/Hooks";
import TabClass from "./TabClass";
import { Apps, Tasks } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const TaskContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTaskApiData());
  }, [dispatch]);
  const activeToggle = (tab: string) => dispatch(setActiveTab(tab));

  return (
    <>
      <Breadcrumbs pageTitle={Tasks} parent={Apps} title={Tasks} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <NavClass activeToggle={activeToggle} />
            <TabClass />
          </Row>
        </div>
      </Container>
    </>
    
  );
};

export default TaskContainer;
