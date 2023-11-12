import { MuiThemeEnums } from "./enums";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ITaskProps } from "./interface";

export type ThemeTypes = MuiThemeEnums.DARK | MuiThemeEnums.LIGHT;

export interface iErrorState {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  isFetching?: boolean;
}

export type NewTaskType = Pick<
  ITaskProps,
  "deadline" | "description" | "label" | "status" | "title" | "userOwner"
>;
