import { Resend } from "resend";
import emailTemplates from "../templates/email.templates.js";

const resend = new Resend(process.env.RESEND_API_KEY);

const verifyEmail = async (emailAddress, fullName, verificationToken) => {
  const verificationLink = `http://localhost:5000/verify?token=${verificationToken}`;

  try {
    await resend.emails.send({
      from: "Primelet <onboarding@resend.dev>",
      to: emailAddress,
      subject: "Verify your Email address",
      html: emailTemplates.verifyEmail(fullName, verificationLink),
    });
  } catch (error) {
    throw error;
  }
};

export default { verifyEmail };
