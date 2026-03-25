"use server";

import axios from "axios";
import crypto from "crypto";

// ✅ Types define
interface FetchFormFieldsParams {
  host?: string;
}

export async function fetchFormFields(
  { host }: FetchFormFieldsParams,
  uid: string
) {
  const baseurl =
    process.env.CMS_BASE_URL || process.env.NEXT_PUBLIC_CMS_BASE_URL;

  const key =
    process.env.CMS_API_KEY || process.env.NEXT_PUBLIC_CMS_API_KEY;

  const secret =
    process.env.CMS_API_SECRET || process.env.NEXT_PUBLIC_CMS_API_SECRET;

  // ✅ Safety check (VERY IMPORTANT)
  if (!baseurl || !key || !secret) {
    console.error("❌ Missing ENV variables");
    return null;
  }

  const timeStamp = Date.now();

  const body = { timestamp: timeStamp };
  const payload = Buffer.from(JSON.stringify(body)).toString();

  const signature = crypto
    .createHmac("sha256", secret as string) // ✅ fix এখানে
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": host || "localhost:3000",
  };

  try {
    const res = await axios.get(`${baseurl}/form/fields/${uid}`, {
      headers,
    });

    return res.data;
  } catch (err) {
    console.error("❌ Error fetching form fields:", err);
    return null;
  }
}
