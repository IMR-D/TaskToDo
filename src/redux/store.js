import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./rootReducer.js";
import thunk from "redux-thunk";

export let store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
