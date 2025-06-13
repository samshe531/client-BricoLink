// import


import {
  LOAD_BPRO,
  SUCCESS_BPRO,
  FAIL_BPRO,
  GET_ALL_PROFESSIONAL,
  UPDATE_PROFESSIONAL,
  GET_TO_BE_PRO,
  SET_FILTERED_PROS,
  GET_PROS_VALID,
  GET_PROFESSIONAL,
  
} from "../actionType/bPro.actionType";
// initial state
const initialState = {
  isLoadPro: false,
  filteredList: [],
  listeEnAttente: [],
  listPro: [],
  pro: {},
  errors: [],
  success: [],
  validList:[],
};

const bProReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_BPRO:
      return { ...state, isLoadPro: true };
    case SUCCESS_BPRO:
      return {
        ...state,
        isLoadPro: false,
        pro: payload,
        success: payload.success,
        isAuth: true,
      };
    
      case GET_ALL_PROFESSIONAL:
      return {...state, isLoadPro:false, listPro: payload}
      
      case UPDATE_PROFESSIONAL:
        return {...state, isLoadPro:false, updatedPro: payload}

      case GET_TO_BE_PRO:
        return {...state, isLoadPro:false, listeEnAttente: payload};
      
      case SET_FILTERED_PROS:
      return { ...state, isLoadPro:false, filteredList: payload };

      case GET_PROS_VALID:
        return {...state, isLoadPro:false, validList:payload};

      case GET_PROFESSIONAL:
        // console.log(payload)
        return {...state, isLoadPro:false, pro: payload};

      case FAIL_BPRO:
      return { ...state, isLoadPro: false, errors: payload };

    default:
      return state;
  }
};

export default bProReducer;

