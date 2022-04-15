import {
  CHANGE_SCORE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./actionsTypes";

import history from "../history";

import AuthService from "../AuthMockup";


export const login = (user) => (dispatch) => {
  return AuthService.login(user).then((data) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: user },
    });
    history.push("/questions");
    return Promise.resolve();
  });
};

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});

