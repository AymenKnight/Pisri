import { combineReducers } from "redux";
import categoriesReducer from "./categories/categories.reducer";
import userReducer from "./user/user.reducer";

 export default combineReducers({
     user : userReducer,
     collections :categoriesReducer
 })

 