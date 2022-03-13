import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

// Self defined components
import Notifications from "./components/Notifications";
import Header from "./components/Header";

import NotistackProvider from "./providers/NotistackProvider";
import Routes from "./routes";
import store from "./store";
import theme from "./theme/theme";

function App() {
  const { i18n } = useTranslation();
  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <RecoilRoot>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <NotistackProvider>
              <Notifications />
              <Header handleChangeLanguage={handleChangeLanguage}/>
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
