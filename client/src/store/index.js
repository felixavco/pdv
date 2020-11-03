import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import layoutReducer from './layout/layout.reducer';
import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  layout: layoutReducer,
  user: userReducer,
  product: productReducer,
});

const persistConfig = {
  key: 'store',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export const persistor = persistStore(store);

export default store;
