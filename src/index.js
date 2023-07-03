import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import countStore from "./components/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={countStore}>
        <App />
    </Provider>
);
