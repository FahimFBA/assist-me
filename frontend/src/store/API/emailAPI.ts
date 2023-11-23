import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGmailTokenReturnData } from "../../types/interface";

// Define a service using a base URL and expected endpoints
export const emailAPI = createApi({
  reducerPath: "emailAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_GMAIL_BACKEND_URL,
  }),
  tagTypes: ["Email"],
  endpoints: (builder) => ({
    startGmailAuthentication: builder.query({
      query: () => `/startGoogleAuthentication`,
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

export const {
  useStartGmailAuthenticationQuery,
  useGetGoogleAccessTokenQuery,
} = emailAPI;
