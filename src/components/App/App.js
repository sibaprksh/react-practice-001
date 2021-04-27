import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import { Provider, useDispatch, useSelector } from "react-redux";

import { alertActions } from "../../actions";

// components
import { Home, Login } from "../index";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const alert = useSelector(state => state.alert);

  useEffect(() => {
    dispatch(alertActions.clear());
  }, [location]);

  return (
    <>
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route
          path="/login"
          render={props => {
            if (localStorage.getItem("user")) {
              // logged in so redirect to home
              return <Redirect to={{ pathname: "/" }} />;
            }
            // not logged in so return component
            return <Component {...props} />;
          }}
        />
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
