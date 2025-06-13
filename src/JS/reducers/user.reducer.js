//import

import {
  DELETE_USER,
  FAIL_USER,
  GET_ALL_USER,
  GET_USER,
  LOAD_USER,
  UPDATE_STATUS,

} from "../actionType/user.actionType";

// initialisation state
const initialState = {
  users: [],
  user: {},
  isLoadUser: false,
  errors: [],
  updateStatutValidation:"",
};

// pure function
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, isLoadUser: true };
    case GET_ALL_USER:
      return { ...state, isLoadUser: false, users: payload };
    case GET_USER:
      return { ...state, isLoadUser: false, user: payload };
    case DELETE_USER:
      const newListUser = state.users.filter((el) => el._id !== payload);
      return { ...state, isLoadUser: false, newListUser };
    case UPDATE_STATUS:
  return {
    ...state,
    isLoadUser: false,
    users: state.users.map(user =>
      user._id === payload._id ? { ...user, ...payload } : user
    ),
    updateStatutValidation: payload,
  };
    case FAIL_USER:
      return { ...state, isLoadUser: false, errors: payload };
    default:
      return state;
  }
};

export default userReducer;
