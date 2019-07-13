import { createStore, combineReducers } from "redux";
import { app } from "./reducers";

const reducer = combineReducers({
  app
});

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
