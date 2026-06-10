import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationMail = async (email, token) => {
  const url = `http://localhost:3000/verify?token=${token}`;
  await resend.emails.send({
    from: "Primelet <onboarding@resend.dev>",
    to: email,
    subject: "Verify your Email address",
    html: `<p>Hello ${email}</p>`,
  });
};

//hex
//#F97316
