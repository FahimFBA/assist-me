import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGmailTokenReturnData } from "../../types/interface";
import { API_KEY, CLIENT_ID, DISCOVERY_DOC, SCOPES } from "../../CONSTANT";

// @ts-ignore
const gapiWindow = window.gapi;

const initializeGapiClient = async () =>
  await gapiWindow.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });

const gisLoaded = () =>
  // @ts-ignore
  window.google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: "", // defined later
  });

export const emailAPI = createApi({
  reducerPath: "emailAPI",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Email"],
  endpoints: (builder) => ({
    startGmailAuthentication: builder.mutation({
      queryFn: async () => {
        try {
          await gapiWindow.load("client", initializeGapiClient);
          const someData = await gisLoaded();
          const tokenData = await gapiWindow.client.getToken();
          someData.requestAccessToken({ prompt: "consent" });

          // @ts-ignore
          someData.callback = async (resp) => {
            if (resp.error !== undefined) {
              throw resp; // Throw an error if there is an error in the response
            }

            // console.log("this is callbackl", resp);
            return {
              data: resp as IGmailTokenReturnData,
            };
          };

          // if ((await gapiWindow.client.getToken()) === null) {
          //   await someData.requestAccessToken({ prompt: "consent" });
          //   console.log("if statement");
          // } else {
          //   await someData.requestAccessToken({ prompt: "" });
          //   console.log("else statement");
          // }

          return {
            data: tokenData as IGmailTokenReturnData,
          };
        } catch (err) {
          return {
            error: err,
          };
        }
      },
      invalidatesTags: ["Email"],
    }),
  }),
});

export const { useStartGmailAuthenticationMutation } = emailAPI;
