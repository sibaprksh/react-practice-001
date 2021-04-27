import { useHistory } from "react-router-dom";

import { authConstants } from "../constants";
import { authService } from "../services";
import { alertActions } from "./";

export const authActions = {
  login,
  logout
};

//const history = useHistory();

function login(username, password, from) {
  return dispatch => {
    dispatch(request({ username }));

    authService.login(username, password).then(
      user => {
        dispatch(success(user));
        //history.push(from);
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

function logout() {
  userService.logout();
  return { type: authConstants.LOGOUT };
}
