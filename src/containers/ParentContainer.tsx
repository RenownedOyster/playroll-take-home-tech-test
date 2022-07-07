import React from "react";
import EmployeeList from "../components/employeeList/EmployeeList";
import styled from "@emotion/styled";

const Parent = styled.div({
  width: "100%",
  minHeight: "calc(100vh - 100px)",
  paddingTop: "50px",
  paddingBottom: "50px",
  background:
    "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
  display: "flex",
  alignItems: "top",
  justifyContent: "center",
});

const ParentContainer = () => (
  <Parent>
    <EmployeeList />
  </Parent>
);

export default ParentContainer;
