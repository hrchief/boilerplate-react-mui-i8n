import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material/styles";
import Notifications from "./components/Notifications";
import NotistackProvider from "./providers/NotistackProvider";
import Routes from "./routes";
import store from "./store";
import theme from "./theme/theme";

function App() {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <NotistackProvider>
              <Notifications />
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </NotistackProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </RecoilRoot>
  );
}

export default App;
