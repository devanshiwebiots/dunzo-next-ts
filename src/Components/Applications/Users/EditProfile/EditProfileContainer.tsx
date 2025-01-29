"use client"
import React from "react";
import { Container, Row } from "reactstrap";
import MyProfile from "./MyProfile/MyProfile";
import EditProfileForm from "./EditProfiles/EditProfileForm";
import AddProjectsAndUpload from "./AddProjectsAndUpload/AddProjectsAndUpload";
import { EditProfile, Users } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const EditProfileContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={EditProfile} parent={Users} title={EditProfile} />
      <Container fluid>
        <div className="edit-profile">
          <Row>
            <MyProfile />
            <EditProfileForm />
            <AddProjectsAndUpload />
          </Row>
        </div>
      </Container>
    </>    
  );
};

export default EditProfileContainer;
