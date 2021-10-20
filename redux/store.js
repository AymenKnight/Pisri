import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import root_Reducer from "./root_Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';






const middlewares=[logger]
const store =createStore(root_Reducer,composeWithDevTools(applyMiddleware(...middlewares)))

export default store;