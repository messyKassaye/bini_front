import {combineReducers} from "redux";
import AppFormReducer from "./reducers/AppFormReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import DialogReducer from "./reducers/DialogReducer";
import FileUploadReducer from "./reducers/FileUploadReducer";

export default combineReducers({
    appFormReducer:AppFormReducer,
    fileUploadReducer:FileUploadReducer,
    dialogReducer:DialogReducer,
    categoryReducer:CategoryReducer
})