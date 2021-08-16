import { createStore } from "redux";
import RootReducer from "./RootReducer.js";

const Store = createStore(RootReducer);

export default Store;