import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { Employee } from "../employeeList/EmployeeList";
import getInitials from "../../utils/getInitials";

interface RowProps {
  employee: Employee;
  updateEmployee: (employee: Employee) => void;
}

const EmployeeRow = ({ employee, updateEmployee }: RowProps) => {
  const labelId = `checkbox-list-secondary-label-${employee.id}`;

  return (
    <>
      <ListItem
        key={labelId}
        secondaryAction={
          <Checkbox
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 25 },
              color: "#69bff8",
              "&.Mui-checked": { color: "#69bff8" },
            }}
            edge="end"
            onChange={() => updateEmployee(employee)}
            checked={employee.reviewed}
            inputProps={{ "aria-labelledby": labelId }}
          />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°${labelId}`}
              sx={{
                bgcolor: "#69bff8",
                width: 70,
                height: 70,
                marginRight: 3,
              }}
            >
              {getInitials(employee.name)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            id={labelId}
            primary={
              <>
                <Typography variant="subtitle2">{employee.name}</Typography>
                <Typography variant="body2">{employee.id}</Typography>
                <Typography variant="body2">{employee.age}</Typography>
                <Typography variant="body2">{employee.companyId}</Typography>
              </>
            }
          />
        </ListItemButton>
      </ListItem>{" "}
      <Divider variant="middle" component="li" />
    </>
  );
};

export default EmployeeRow;
