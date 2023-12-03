import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./store/index.ts";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css"; // Import AOS styles

// import "./styles/global.css";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "../../styles/plugin.css";
// import "../../styles/style.css";


import "./styles/style.css";
import "./styles/plugin.css";
import "./styles/dashboardStyles/bootstrap.css";
// import "./styles/dashboardStyles/bootstrap.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
