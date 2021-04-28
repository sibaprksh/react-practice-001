import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// setup fake backend
import { configureFakeBackend } from "./services";
configureFakeBackend();

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

import "./style.css";

import { App } from "./components";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
