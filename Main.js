import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./src/App";


const Root = ReactDOM.createRoot(document.getElementById("root")
);

Root.render(<App/>);