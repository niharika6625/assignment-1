/* eslint-disable import/prefer-default-export */
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
    customColor: {
      primaryWhite: "#FFFFFF",
      secondaryWhite: "#F2F2F2",
      //   red_1: "#ff0000",
    },
    boxShadow: {
      main: "0px 7px 10px rgba(40, 41, 61, 0.08)",
    },
  },
});
