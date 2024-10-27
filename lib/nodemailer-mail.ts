import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

// Configure the transporter with your email provider's SMTP settings
const transportOptions: SMTPTransport.Options = {
  host: process.env.NODEMAILER_SMTP,
  port: 465,
  secure: true,
//   logger: true, // Enables logging to console
//   debug: true,  // Enables additional debugging output
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transportOptions);
// transporter.verify((error, success) => {
//     if (error) {
//       console.error("Transporter verification failed:", error);
//     } else {
//       console.log("Server is ready to send emails:", success);
//     }
//   });

let url = process.env.PUBLIC_URL; 

export const sendVerificationEmail_NodeMailer = async (email: string, token: string) => {
  // Construct the confirmation link
  const confirmLink = `${url}/auth/new-verification?token=${token}`;

  try {
    await transporter.sendMail({
      from: '"FSL" <faisal@pie-technologies.com>', // sender address
      to: email, // recipient's email
      subject: "Confirm your Email",
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    });
    console.log("Verification email sent:", confirmLink); // Log to verify URL
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};
