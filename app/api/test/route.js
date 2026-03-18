import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString(),
          "Test User",
          "test@email.com",
          "9999999999",
          "Test Company",
          "Tomorrow",
          "Testing Needs",
          "This is a test message"
        ]],
      },
    });

    return NextResponse.json({ success: true, message: "Data added!" });

} catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }}