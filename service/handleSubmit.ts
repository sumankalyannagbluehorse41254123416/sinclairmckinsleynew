"use server";

import axios from "axios";
import crypto from "crypto";

// ✅ Type define
type FormDataType = {
  [key: string]: string;
};

export async function handleSubmitForm(
  host: string,
  formData: FormDataType
) {
  const baseurl = process.env.CMS_BASE_URL;
  const key = process.env.CMS_API_KEY;
  const secret = process.env.CMS_API_SECRET;

  // ✅ ENV safety check
  if (!baseurl || !key || !secret) {
    console.error("❌ Missing ENV variables");
    throw new Error("Server configuration error");
  }

  const timestamp = Date.now();

  const payload = Buffer.from(
    JSON.stringify({ timestamp })
  ).toString();

  const signature = crypto
    .createHmac("sha256", secret as string) // ✅ fix এখানে
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timestamp.toString(),
    "Content-Type": "application/json",
    "X-Host": host || "localhost:3000",
  };

  try {
    const res = await axios.post(
      `${baseurl}/form/submit/dfbb12a6-95b1-4d8f-8e5a-9d02f9926510`,
      formData,
      { headers }
    );

    return res.data;
  } catch (err: any) {
    console.log(
      "❌ Error submitting form:",
      err?.response?.data || err.message
    );
    throw err;
  }
}
