import { Action, applyMiddleware, createStore, combineReducers, ReducersMapObject } from 'redux';
import { createLogger } from 'redux-logger';
import * as reducers from './reducers';

const reducer = combineReducers({...reducers});
const logger = createLogger({
  collapsed: true,
  duration: true
});
const store = createStore(reducer,
  applyMiddleware(logger)
);

export default store;
/*
//Log only in development
const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);
*/
