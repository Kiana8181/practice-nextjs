import { Resend } from "resend";
import { NextResponse } from "next/server";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "kianahashemi8@gmail.com",
    subject: "hi",
    react: WelcomeTemplate({ name: "kiana" }),
  });

  return NextResponse.json({});
}
