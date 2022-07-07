import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

const LoadingParent = styled.div({
  height: "100%",
  width: "100%",
  margin: "auto auto",
});

const Loading = () => (
  <LoadingParent>
    <CircularProgress size={100} color="inherit" />
  </LoadingParent>
);

export default Loading;
