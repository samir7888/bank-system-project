import nodemailer from 'nodemailer';

export async function sendFraudAlertEmail(userId: number, chain: number[]) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL, // Your admin Gmail
      pass: process.env.ADMIN_EMAIL_PASSWORD, // App password (not Gmail password)
    },
  });

  const mailOptions = {
    from: `"Banking System" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🚨 Fraud Detected: User ID ${userId}`,
    html: `
      <h2>Fraudulent Transaction Chain Detected</h2>
      <p><strong>Starting User ID:</strong> ${userId}</p>
      <p><strong>Transaction Chain:</strong> ${chain.join(' → ')}</p>
      <p>The user has been automatically frozen.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
export async function sendSucceedOfflineTransactionEmailToSender(email:string,name:string,amount:number) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL, // Your admin Gmail
      pass: process.env.ADMIN_EMAIL_PASSWORD, // App password (not Gmail password)
    },
  });

  const mailOptions = {
    from: `"Banking System" <${process.env.ADMIN_EMAIL}>`,
    to: email,
    subject: `Transaction has completed`,
    html: `
      <h2> Rs. ${amount} has been sent to ${name} successfully</h2>
  
    `,
  };

  await transporter.sendMail(mailOptions);
}
export async function sendSucceedOfflineTransactionEmailToReceiver(email:string,name:string,amount:number) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL, // Your admin Gmail
      pass: process.env.ADMIN_EMAIL_PASSWORD, // App password (not Gmail password)
    },
  });

  const mailOptions = {
    from: `"Banking System" <${process.env.ADMIN_EMAIL}>`,
    to: email,
    subject: `Transaction has completed`,
    html: `
      <h2>You have received ${amount} from ${name} successfully</h2>
  
    `,
  };

  await transporter.sendMail(mailOptions);
}
