import { Employees, Key } from "../components/employeeList/EmployeeList";

const groupByCompanyId = (
  employees: Employees,
  sortingKey: string,
  setSortingKey: (key: Key) => void,
  setEmployees: (sortedEmployees: Employees) => void
) => {
  const key: Key = sortingKey === "id" ? "companyId" : "id";

  const sortedEmployees = employees.sort((employeeA, employeeB) => {
    if (employeeA[key] > employeeB[key]) {
      return 1;
    }

    if (employeeA[key] < employeeB[key]) {
      return -1;
    }

    return 0;
  });

  setSortingKey(key);
  setEmployees(sortedEmployees);
};

export default groupByCompanyId;
