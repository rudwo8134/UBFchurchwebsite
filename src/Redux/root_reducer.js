import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './User/User.reducer';
import Postreducer from './Post/Post.reducx';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: UserReducer,
  post: Postreducer,
});

export default persistReducer(persistConfig, rootReducer)