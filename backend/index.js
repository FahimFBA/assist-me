// api.js

import express from "express";
import { google } from "googleapis";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001; // Choose any port you prefer

// Replace these with your actual OAuth2 credentials
const GOOGLE_API_CLIENT_ID = process.env.GOOGLE_API_CLIENT_ID;
const GOOGLE_API_CLIENT_SECRET = process.env.GOOGLE_API_CLIENT_SECRET;
const YOUR_REDIRECT_URL = `${process.env.FRONTEND_URL}/email-success`;

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_API_CLIENT_ID,
  GOOGLE_API_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// https://developers.google.com/identity/protocols/oauth2/scopes

const scopes = [
  "https://www.googleapis.com/auth/blogger",
  "https://www.googleapis.com/auth/calendar",
  "https://mail.google.com/",
];

app.get("/startGoogleAuthentication", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });

  res.json({ authenticationUrl: url });
});

// Handle the callback from Google
app.get("/googleCallback", async (req, res) => {
  const { code } = req.query;
  try {
    if (!code) {
      return res.status(400).send("Code not provided");
    }

    const { tokens } = await oauth2Client.getToken(code);
    // Now you have the access token, you can use it in your application or send it back to the client
    res.json({ ...tokens });
  } catch (error) {
    console.error("Error exchanging code for token:", error.message);
    res.status(500).json({
      msg: "Error exchanging code for token",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
