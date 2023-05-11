import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './user/Slice';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  stateReconciler: hardSet,
};

const userPersistConfig = {
  key: 'user',
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  user: persistReducer<ReturnType<typeof user>>(userPersistConfig, user),
});

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  rootPersistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export type rootState = ReturnType<typeof store.getState>;
