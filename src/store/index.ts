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
  useSendEmailVerificationMutation,
  useActivityLogsQuery,
} from "./API/userAuthAPI";

// Email API
import { emailAPI, useStartGmailAuthenticationMutation } from "./API/emailAPI";

import { gmailAPI, useGetAllEmailsQuery } from "./API/gmailAPI";

import { tokenSlice, clearToken, collectTokens } from "./Slices/tokenSlice";

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

const persistedTokenDataReducer = persistReducer(
  persistConfig,
  tokenSlice.reducer,
);

export const store = configureStore({
  reducer: {
    system: persistedSystemReducer,
    user: persistedUserReducer,
    tokenData: persistedTokenDataReducer,
    [userAuthAPI.reducerPath]: userAuthAPI.reducer,
    [taskAPI.reducerPath]: taskAPI.reducer,
    [emailAPI.reducerPath]: emailAPI.reducer,
    [gmailAPI.reducerPath]: gmailAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      userAuthAPI.middleware,
      taskAPI.middleware,
      emailAPI.middleware,
      gmailAPI.middleware,
    ),
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
  useSendEmailVerificationMutation,
  useActivityLogsQuery,

  //  Email API
  useStartGmailAuthenticationMutation,

  // tokenSlice
  clearToken,
  collectTokens,

  // Gmail API
  useGetAllEmailsQuery,
};
