import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IGmailTokenReturnData } from "../../types/interface";

export const initialState: IGmailTokenReturnData = {
  access_token: "",
  expiry_date: 0,
  refresh_token: "",
  scope: "",
  token_type: "",
};

export const tokenSlice = createSlice({
  name: "tokenData",
  initialState,
  reducers: {
    collectTokens: (state, action: PayloadAction<IGmailTokenReturnData>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearToken: () => initialState,
  },
});

export const { collectTokens, clearToken } = tokenSlice.actions;
