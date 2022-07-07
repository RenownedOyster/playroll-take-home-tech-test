import * as React from "react";
import List from "@mui/material/List";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import styled from "@emotion/styled";

import EmployeeRow from "../employeeRow/EmployeeRow";
import Loading from "../loading/Loading";
import Header from "../header/Header";
import groupByCompanyId from "../../utils/groupByCompanyId";

export interface Employee {
  name: string;
  age: number;
  companyId: string;
  id: string;
  reviewed?: boolean;
}

export type Employees = Employee[] | [];

export type Key = "companyId" | "id";

const ListSorting = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  padding: "0 16px 0 70px",
});

const EmployeeList = () => {
  const [sortingKey, setSortingKey] = React.useState("id");
  const [employees, setEmployees] = React.useState<Employees>([]);
  const [error, setError] = React.useState(null); // At this point I would usually create an error notification or fallback and display a simplified UI error state 👍
  const [loading, setLoading] = React.useState(true);

  const getEmployees = async () => {
    try {
      const response: any = await fetch(
        `https://627122286a36d4d62c21cf1d.mockapi.io/api/v1/employee`
      );
      if (!response.ok) {
        throw new Error(
          `Whoops, there was a HTTP error: The status is ${response.status}`
        );
      }
      let actualData: any = await response.json();
      setEmployees(actualData);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getEmployees();
  }, []);

  const updateEmployee = async (reviewedEmployee: Employee) => {
    setLoading(true);
    const newReviewedState = reviewedEmployee.reviewed ? false : true;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...reviewedEmployee, reviewed: newReviewedState }),
    };

    try {
      const response: any = await fetch(
        `https://627122286a36d4d62c21cf1d.mockapi.io/api/v1/employee/${reviewedEmployee.id}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(
          `Whoops, there was a HTTP error: The status is ${response.status}`
        );
      }
      await getEmployees();
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <List
      dense
      sx={{
        width: "80%",
        maxWidth: 700,
        bgcolor: "background.paper",
        borderRadius: "7px",
        boxShadow: "10px 5px 5px grey;",
        padding: "20px",
      }}
    >
      <Header
        mainHeading="Review Dashboard"
        detailsHeading="Details"
        reviewHeading="Reviewed"
      />
      <ListSorting>
        <Tooltip title="Filter list">
          <IconButton
            onClick={() =>
              groupByCompanyId(
                employees,
                sortingKey,
                setSortingKey,
                setEmployees
              )
            }
          >
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </ListSorting>
      {employees.map((employee) => {
        return (
          <EmployeeRow employee={employee} updateEmployee={updateEmployee} />
        );
      })}
    </List>
  );
};

export default EmployeeList;
