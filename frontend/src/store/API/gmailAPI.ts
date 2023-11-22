import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const gmailAPI = createApi({
  reducerPath: "gmailAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/gmail/v1/users/me",
  }),
  tagTypes: ["Email"],
  endpoints: (builder) => ({
    getAllEmails: builder.query({
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
              const messageData = await messageResponse.json();

              const message = messageData.snippet; // Use snippet for message content
              const senderName = messageData.payload.headers.find(
                // @ts-ignore
                (header) => header.name === "From",
              ).value;

              return { senderName, message };
            }),
          );

          return updatedMessages;
        },
      }),
      providesTags: ["Email"],
    }),
  }),
});

export const { useGetAllEmailsQuery } = gmailAPI;
