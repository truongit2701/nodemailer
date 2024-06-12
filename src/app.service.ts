import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailerService) {}

  sendMail(
    to: string,
    subject: string,
    content: string,
    buttonText: string,
    buttonLink: string,
  ) {
    const message = `Forgot your password? If you didn't forget your password, please ignore this email!`;

    this.mailService.sendMail({
      // from: 'truongvovan.it2701@gmail.com',
      to,
      subject: `How to Send Emails with Nodemailer`,
      text: message,
      template: 'fancy-email', // Tên của template (example.hbs)
      context: {
        title: subject,
        content,
        buttonText,
        buttonLink,
      },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
