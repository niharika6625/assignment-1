import { RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import routes from "./routes";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <RouterProvider router={routes} />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
