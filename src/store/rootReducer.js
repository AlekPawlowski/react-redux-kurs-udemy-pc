import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootReducer;