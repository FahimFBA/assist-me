import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGmailTokenReturnData } from "../../types/interface";

// Define a service using a base URL and expected endpoints
export const gmailAPI = createApi({
  reducerPath: "gmailAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/gmail/v1/users/me",
  }),
  tagTypes: ["Email"],
  endpoints: (builder) => ({
    getAllEmails: builder.query({
      query: ({ x, access_token }) => `/${x}?access_token=${access_token}`,
      providesTags: ["Email"],
    }),
    getGoogleAccessToken: builder.query<
      IGmailTokenReturnData,
      {
        code: string;
      }
    >({
      query: ({ code }) => `/googleCallback?code=${code}`,
      providesTags: ["Email"],
    }),
  }),
});

export const { useGetAllEmailsQuery } = gmailAPI;
