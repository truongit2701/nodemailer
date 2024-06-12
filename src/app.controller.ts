import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send')
  sendMailer(@Res() response: any) {
    const mail = this.appService.sendMail(
      'tgian4958@gmail.com',
      'Welcome to Our Service',
      'Thank you for signing up! Click the button below to get started.',
      'Get Started',
      'https://example.com/get-started',
    );

    return response.status(200).json({
      message: 'success',
      mail,
    });
  }
}
