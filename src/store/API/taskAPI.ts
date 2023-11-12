import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITaskProps } from "../../types/interface";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  // getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { NewTaskType, UpdateTaskType } from "../../types/types";

const tasksCollectionName = "tasks";

export const taskAPI = createApi({
  reducerPath: "taskAPI",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getAllTasks: builder.query<
      ITaskProps[],
      {
        userID: string;
      }
    >({
      queryFn: async ({ userID }) => {
        const requestQuery = query(
          collection(db, tasksCollectionName),
          where("userOwner", "==", userID),
        );

        const getAlltasks = await getDocs(requestQuery);

        const querySnapshot = getAlltasks.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        try {
          return {
            data: querySnapshot as ITaskProps[],
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      providesTags: ["Tasks"],
    }),

    deleteOneTask: builder.mutation<
      string,
      {
        id: string;
      }
    >({
      queryFn: async ({ id }) => {
        const docRef = await doc(db, tasksCollectionName, id);
        await deleteDoc(docRef);
        try {
          return {
            data: "Task Deleted Successfully",
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["Tasks"],
    }),

    createOneTask: builder.mutation<string, NewTaskType>({
      queryFn: async ({
        deadline,
        description,
        label,
        status,
        title,
        userOwner,
      }) => {
        await addDoc(collection(db, tasksCollectionName), {
          deadline,
          description,
          label,
          status,
          title,
          userOwner,
        });
        try {
          return {
            data: "Task Added Successfully",
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["Tasks"],
    }),
    editOneTask: builder.mutation<string, UpdateTaskType>({
      queryFn: async ({ deadline, description, label, status, title, id }) => {
        try {
          const docRef = doc(db, tasksCollectionName, id);
          await updateDoc(docRef, {
            deadline,
            description,
            label,
            status,
            title,
          });

          return {
            data: "Task Updated Successfully",
          };
        } catch (err) {
          return {
            error: (err as Error)?.message,
          };
        }
      },
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useDeleteOneTaskMutation,
  useCreateOneTaskMutation,
  useEditOneTaskMutation,
} = taskAPI;
