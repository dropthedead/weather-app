import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import settingsReducer from './slices/settings';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
