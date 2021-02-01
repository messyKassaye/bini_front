import {combineReducers} from "redux";
import AuthReducer from "./auth/state/AuthReducer";

export default combineReducers({
    authReducer:AuthReducer
})