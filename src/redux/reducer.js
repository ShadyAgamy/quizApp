import {
  CHANGE_SCORE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./actionsTypes";

const initialState = {
  isLoggedIn: false,
  user: null,
  score: 0,
  questions : [
    {
      question: "What is the capital of United Kingdom?",
      choices: ["Manchester", "Birmingham", "London", "Birmingham"],
      answer: "London"
    },
    
    {
      question: "What is the capital of United States?",
      choices: ["California", "New York", "Miami", "Florida"],
      answer: "New York"
    }
    
    
  ]
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
