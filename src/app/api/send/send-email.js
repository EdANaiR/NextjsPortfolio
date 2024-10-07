import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "edanurnair@gmail.com", // Kendi e-posta adresinizle değiştirin
        subject: subject,
        text: `From: ${email}\n\n${message}`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Failed to send email:", error.message);
      if (error.response) {
        console.error("Response data:", error.response);
      } else {
        console.error("Error details:", error);
      }
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
