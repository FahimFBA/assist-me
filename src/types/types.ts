import { ThemeTypesEnum } from "./enums";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ITaskProps, iMailListDataProps } from "./interface";

export type ThemeTypes = ThemeTypesEnum.DARK | ThemeTypesEnum.LIGHT;

export interface iErrorState {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  isFetching?: boolean;
}

export type NewTaskType = Pick<
  ITaskProps,
  "deadline" | "description" | "label" | "status" | "title" | "userOwner"
>;

export type UpdateTaskType = Pick<
  ITaskProps,
  "deadline" | "description" | "label" | "status" | "title" | "id"
>;

export type iMailDetailProps = Pick<
  iMailListDataProps,
  "snippet" | "labelIds"
> & {
  senderName: string;
  message: string;
  attachments: string[];
};
