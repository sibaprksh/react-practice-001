import { useHistory } from "react-router-dom";

import { authConstants } from "../constants";
import { authService } from "../services";
import { alertActions } from "./";

export const authActions = {
  login,
  logout,
  register
};

//const history = useHistory();

function register(inputs, from, history) {
  return dispatch => {
    dispatch(request(inputs));

    authService.register(inputs).then(
      user => {
        dispatch(success());
        dispatch(alertActions.success(authConstants.REGISTER_SUCCESS_MESSAGE));
        history.push("/login");
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: authConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.REGISTER_FAILURE, error };
  }
}

function login({ username, password }, from, history) {
  return dispatch => {
    dispatch(request({ username }));

    authService.login({ username, password }).then(
      user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(success(user));
        history.push(from);
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
}

function logout(history) {
  return dispatch => {
    authService.logout();
    dispatch({ type: authConstants.LOGOUT });
    history.push("/");
  };
}
