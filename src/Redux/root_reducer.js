import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './User/User.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
};

const rootReducer = combineReducers({
  user: UserReducer,
});

export default persistReducer(persistConfig, rootReducer)