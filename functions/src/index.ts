/** * Import function triggers from their respective submodules:
 * * import {onCall} from "firebase-functions/v2/https";
 * * import {onDocumentWritten} from "firebase-functions/v2/firestore"; *
 *  See a full list of supported triggers at https://firebase.google.com/docs/functions */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import speakeasy from "speakeasy";

export const registerUser = onRequest((request: any, response: any) => {
  const { userID } = request.body;
  var secret = speakeasy.generateSecret({ length: 20 });
  // var temp_secret = speakeasy.generateSecret({ length: 20 }).base32;
  logger.info("Hello logs!", { structuredData: true });
  response.json({ message: "Hello from Firebase!ss", x: secret, userID });
});

export const verifyToken = onRequest(
  (request: { body: { token: string; secret: string } }, response: any) => {
    const { token, secret } = request.body;
    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
      window: 0,
    });
    response.json({ verifiedStatus: verified });
  },
);
