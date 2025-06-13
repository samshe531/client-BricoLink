import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import bProReducer from './bPro.reducer';
import userReducer from './user.reducer';


const rootReducer = combineReducers({
    authReducer, bProreducer: bProReducer, userReducer
})


export default rootReducer;