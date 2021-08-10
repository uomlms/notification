import nodemailer from 'nodemailer';

const sendMail = (mailOptions: {
  from: string,
  to: string,
  subject: string,
  text: string
}) => {
  const transporter = nodemailer.createTransport({
    service: process.env.AUTH_SERVICE,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD
    }
  });

  transporter.sendMail(mailOptions, (err: Error | null, data: any) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Email Send. Data: " + data);
  });
}

export { sendMail }
