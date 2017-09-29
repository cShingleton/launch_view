import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './combineReducers';

const middleware = [
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  middleware.unshift(logger);
}

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);
