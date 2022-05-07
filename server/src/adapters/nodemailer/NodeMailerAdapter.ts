import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7e55b9a3c77ba0",
    pass: "69c084778f5f4e"
  }
});

export class NodeMailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Leonardo Vasconcelos <falecom@leodevasconcelos.com.br>',
      to: 'Team Dev <teamdev@leodevasconcelos.com.br>',
      subject,
      html: body,
    });
  }
}