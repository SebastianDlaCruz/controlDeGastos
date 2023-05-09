import { TextField, styled } from "@mui/material";

export const WhiteTextFiled = styled(TextField)({
  "& input , label": {
    color: "#fff",
  },
  "& input": {
    outline: "1px solid #fff",
    borderRadius: "4px"
  },
})