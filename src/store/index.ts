import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sysmtemSlice, resetSystem, themeSwitch } from "./Slices/systemSlice";
import { persistStore, persistReducer } from "redux-persist";
import { taskAPI } from "./API/taskAPI";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { userDataSlice, loginSuccess, logoutSuccess } from "./Slices/userSlice";

// API
import {
  userAuthAPI,
  useEmailLoginMutation,
  useEmailSignupMutation,
  useGoogleSignupMutation,
  useLogoutMutation,
  useSendResetPassWordEmailMutation,
  useSetNewPassWordMutation,
  useUpdateUserProfileMutation,
} from "./API/userAuthAPI";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSystemReducer = persistReducer(
  persistConfig,
  sysmtemSlice.reducer,
);

const persistedUserReducer = persistReducer(
  persistConfig,
  userDataSlice.reducer,
);

export const store = configureStore({
  reducer: {
    system: persistedSystemReducer,
    user: persistedUserReducer,
    [userAuthAPI.reducerPath]: userAuthAPI.reducer,
    [taskAPI.reducerPath]: taskAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userAuthAPI.middleware, taskAPI.middleware),
});

export const persistedStore = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export {
  // system actions
  resetSystem,
  themeSwitch,

  // user actions
  loginSuccess,
  logoutSuccess,

  // userAuthAPI
  useEmailLoginMutation,
  useEmailSignupMutation,
  useGoogleSignupMutation,
  useLogoutMutation,
  useSendResetPassWordEmailMutation,
  useSetNewPassWordMutation,
  useUpdateUserProfileMutation,
};
