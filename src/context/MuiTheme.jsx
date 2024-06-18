import { createTheme } from "@mui/material";

//THEME
export const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#f03932",
      light: "#c74c4a",
      dark: "#5e0f0d",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  }
});
