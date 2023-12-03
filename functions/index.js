/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import admin from "firebase-admin";
admin.initializeApp();
import speakeasy from "speakeasy";
import { onDocumentWritten } from "firebase-functions/v2/firestore";

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const registerUser = onRequest((request, response) => {
  var secret = speakeasy.generateSecret({ length: 20 });
  logger.info("Hello logs!", { structuredData: true });
  response.json({ msg: "Hello from Fireb", secret });
});

export const verifyUser = onRequest((request, response) => {
  const { secret, token } = request.body;
  const verified = speakeasy.totp.verify({
    secret: secret.base32,
    encoding: "base32",
    token,
  });
  response.json({ verified });
});

export const updateDocumentCounts = onDocumentWritten(
  "documents/{documentsId}",
  async () => {
    const db = admin.firestore();
    const documentCountRef = db.collection("documentCount").doc("count");

    // Get the total count of documents in the "documents" collection
    const documentsCollectionRef = db.collection("documents");
    const documentsQuerySnapshot = await documentsCollectionRef.get();
    const totalCount = documentsQuerySnapshot.size;

    // Update the "count" field in the "documentCount" collection
    await documentCountRef.set({ count: totalCount });

    logger.info(totalCount, {
      structuredData: true,
    });
  },
);

export const addAuthSecret = onDocumentWritten(
  "users/{usersId}",
  async (snapshot) => {
    const db = admin.firestore();
    const singleUserRef = db
      .collection("authSecrets")
      .doc(snapshot?.params?.usersId);
    const getAllUserData = await singleUserRef.get();

    // Generate a secret
    const secret = speakeasy.generateSecret({ length: 20 });

    // console.log(
    //   "Updating user document with secret:",
    //   snapshot?.params?.usersId,
    //   getAllUserData.data(),
    // );

    if (getAllUserData.data()?.secret) {
      return;
    } else {
      await singleUserRef.set({ secret });
    }

    logger.info("User Created/ Updated", {
      structuredData: true,
    });
  },
);
