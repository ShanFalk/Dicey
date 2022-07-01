import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import brewReducer from './brew';
import purchaseReducer from './purchases';
import recommender from './recommend';
import session from './session'
import tagReducer from './tag';
import userReducer from './user';

const rootReducer = combineReducers({
  session,
  brews: brewReducer,
  tags: tagReducer,
  users: userReducer,
  purchases: purchaseReducer, 
  recommended: recommender
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
