import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      message,
      paymentId,
      orderId,
      amount,
      currency,
      status,
    } = body as {
      name: string;
      email: string;
      phone?: string;
      message: string;
      paymentId?: string;
      orderId?: string;
      amount?: number;
      currency?: string;
      status?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required booking fields" },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_SHEETS_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!sheetId || !clientEmail || !privateKey) {
      return NextResponse.json(
        { error: "Google Sheets environment variables not configured" },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const now = new Date();
    const istTime = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "short",
      timeStyle: "medium",
    }).format(now);

    const row = [
      istTime,
      name,
      email,
      phone || "",
      message,
      paymentId || "",
      orderId || "",
      amount ?? "",
      currency || "",
      status || "PENDING",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "A:Z",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error appending booking to Google Sheet", error);
    return NextResponse.json(
      { error: "Failed to save booking to Google Sheet" },
      { status: 500 }
    );
  }
}


