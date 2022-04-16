import { CHANGE_SCORE, LOGIN_SUCCESS, LOGIN_FAIL } from "./actionsTypes";
import { questions } from "../data";


const initialState = {
  isLoggedIn: false,
  user: null,
  score: 0,
  questions: questions.sort(() => Math.random() - 0.5)
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
