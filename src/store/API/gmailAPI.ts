import { iGetAllEmailProps, iMailListDataProps } from "@/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const gmailAPI = createApi({
  reducerPath: "gmailAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/gmail/v1/users/me",
  }),
  tagTypes: ["Email"],
  endpoints: (builder) => ({
    getAllEmails: builder.query<
      iGetAllEmailProps[],
      { x: string; access_token: string }
    >({
      query: ({ x, access_token }) => ({
        url: `/${x}?access_token=${access_token}`,
        method: "GET",
        responseHandler: async (response) => {
          const jsonFormat = await response.json();
          const messagesIDs = jsonFormat?.messages?.map(
            (item: { id: string; threadId: string }) => item.id,
          );

          const updatedMessages = await Promise.all(
            messagesIDs?.map(async (messageId: string) => {
              const messageResponse = await fetch(
                `https://www.googleapis.com/gmail/v1/users/me/messages/${messageId}?access_token=${access_token}`,
              );
              const messageData: iMailListDataProps =
                await messageResponse.json();

              // console.log("messageData", messageData);

              const message = messageData.snippet; // Use snippet for message content
              // @ts-ignore
              const senderName = messageData.payload.headers.find(
                (header) => header.name === "From",
              ).value as string;

              // @ts-ignore
              const time = messageData.payload.headers.find(
                (header) => header.name === "Date",
              ).value as string;

              return { id: messageData.id, senderName, message, time };
            }),
          );

          return updatedMessages;
        },
      }),
      providesTags: ["Email"],
    }),

    getOneEmail: builder.query({
      query: ({ x, id, access_token }) => ({
        url: `/${x}/${id}?access_token=${access_token}`,
        method: "GET",
      }),
      providesTags: ["Email"],
    }),

    deleteOneEmail: builder.mutation<
      null,
      {
        x: string;
        id: string;
        access_token: string;
      }
    >({
      query: ({ x, id, access_token }) => ({
        url: `/${x}/${id}?access_token=${access_token}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Email"],
    }),

    sendOneEmail: builder.mutation({
      query: ({ x, access_token, data }) => ({
        url: `/${x}/send?access_token=${access_token}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Email"],
    }),
  }),
});

export const {
  useGetAllEmailsQuery,
  useDeleteOneEmailMutation,
  useGetOneEmailQuery,
  useSendOneEmailMutation,
} = gmailAPI;
