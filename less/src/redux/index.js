import { createStore, combineReducers } from 'redux';
import postsReducer from './reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = createStore(rootReducer);

export default store;
