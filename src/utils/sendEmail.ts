"use server"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData : FormData) {
    const senderEmail = formData.get("email") as string;
    const message = formData.get("message") as string;
    try {
      const data = await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>',
      to: 'luheco1c@gmail.com',
      subject: 'Message from My Website',
      replyTo: senderEmail,
      text: message,
    });
    return {success: true, data};
    } catch (error) {
      console.error("Error details:", error);
      return { error: "Error sending message" };
    }
}

