import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import showAllUsers from "./reducers/showAllUsers";

const manageReducers = combineReducers({
  users: showAllUsers
});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
