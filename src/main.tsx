import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "@redux/store.ts";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import { LoadingBarContainer } from "react-top-loading-bar";
import 'react-loading-skeleton/dist/skeleton.css'
import RefreshTokenWrapper from "./layout/RefreshTokenWrapper.tsx";
import App from "./App.tsx";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoadingBarContainer>
          <RefreshTokenWrapper>
            <App />
          </RefreshTokenWrapper>
        </LoadingBarContainer>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
