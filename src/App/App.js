import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import "./App.css";

import { Home } from "../Home";
import { Login } from "../Login";

function App() {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default App;

function PrivateRoute({ component: Component, roles, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (!localStorage.getItem("user")) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        // logged in so return component
        return <Component {...props} />;
      }}
    />
  );
}
