import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer.js";
import thunk from "redux-thunk";

export let store = createStore(rootReducer, applyMiddleware(thunk));
