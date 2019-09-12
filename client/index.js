import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reducers/store";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Hello World</h1>
    </div>
  </Provider>,
  document.getElementById("app")
);
