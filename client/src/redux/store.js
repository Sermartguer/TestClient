import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./rootReducer";

import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);

export default store;
