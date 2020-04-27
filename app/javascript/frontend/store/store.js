import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

export default (preloadedState = { empty: true }) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
}