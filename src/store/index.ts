import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sysmtemSlice, resetSystem, themeSwitch } from "./Slices/systemSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedSystemReducer = persistReducer(
  persistConfig,
  sysmtemSlice.reducer,
);

export const store = configureStore({
  reducer: {
    system: persistedSystemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export const persistedStore = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export {
  // system actions
  resetSystem,
  themeSwitch,
};
