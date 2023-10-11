import { MuiThemeEnums } from "./enums";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

export type ThemeTypes = MuiThemeEnums.DARK | MuiThemeEnums.LIGHT;

export interface iErrorState {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  isFetching?: boolean;
}
