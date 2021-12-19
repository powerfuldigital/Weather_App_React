import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Loading from "./Loader";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Weather />
    <Loading />
  </StrictMode>,
  rootElement
);
