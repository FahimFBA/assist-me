import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ThemeTypes } from "../../types/types";
import { ThemeTypesEnum } from "../../types/enums";

interface SystemState {
  mode: ThemeTypes;
}

const initialState: SystemState = {
  mode: ThemeTypesEnum.DARK,
};

export const sysmtemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    themeSwitch: (state: SystemState, action: PayloadAction<ThemeTypes>) => {
      state.mode = action.payload;
    },
    resetSystem: () => initialState,
  },
});

export const { themeSwitch, resetSystem } = sysmtemSlice.actions;
