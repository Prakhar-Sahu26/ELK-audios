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

    const row = [
      new Date().toLocaleString(),
      "Test User",
      "test@gmail.com",
      "9999999999",
      "Test Company",
      "Tomorrow 5PM",
      "Testing Needs",
      "This is a test message",
      "pay_test_123",
      "order_test_123",
      999,
      "PAID",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Razorpay!A:L",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({
      success: true,
      message: "✅ Data added to Razorpay sheet!",
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
}