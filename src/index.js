import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/views/Login";
import registerServiceWorker from "./registerServiceWorker";

import "./css/main.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
