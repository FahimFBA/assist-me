import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITaskProps } from "../../types/interface";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  // getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";

const tasksCollectionName = "tasks";

export const taskAPI = createApi({
  reducerPath: "taskAPI",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getAllTasks: builder.query<ITaskProps[], null>({
      queryFn: async () => {
        const getAlltasks = await getDocs(collection(db, tasksCollectionName));

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

    createOneTask: builder.mutation<
      string,
      Pick<
        ITaskProps,
        "deadline" | "description" | "label" | "status" | "title"
      >
    >({
      queryFn: async ({ deadline, description, label, status, title }) => {
        await addDoc(collection(db, tasksCollectionName), {
          deadline,
          description,
          label,
          status,
          title,
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
  }),
});

export const {
  useGetAllTasksQuery,
  useDeleteOneTaskMutation,
  useCreateOneTaskMutation,
} = taskAPI;
