import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const ListHeader = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0 16px 0 110px",
});

interface HeaderProps {
  mainHeading: string;
  detailsHeading: string;
  reviewHeading: string;
}

const Header = ({
  mainHeading,
  detailsHeading,
  reviewHeading,
}: HeaderProps) => (
  <>
    <Typography variant="h3" sx={{ marginBottom: "30px" }}>
      {mainHeading}
    </Typography>
    <ListHeader>
      <Typography variant="h6">{detailsHeading}</Typography>
      <Typography variant="h6">{reviewHeading}</Typography>
    </ListHeader>
  </>
);

export default Header;
