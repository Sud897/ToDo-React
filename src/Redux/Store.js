import { combineReducers, createStore } from "redux";
import listReducer from "./Reducer";

const rootReducer = combineReducers({ Reducer: listReducer });
const store = createStore(rootReducer);
export default store;
