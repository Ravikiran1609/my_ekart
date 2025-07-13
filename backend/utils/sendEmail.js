import nodemailer from 'nodemailer';

export default async function sendEmail(to) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: 'Verify Your Email',
    html: `<p>Click <a href="${process.env.BASE_URL}/verify?email=${to}">here</a> to verify.</p>`
  });
}

