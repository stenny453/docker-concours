import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Message } from './interfaces/message.interface';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  async sendMail(email: string, objet: string, message: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: `ENI - ${objet}`,
      template: '/sendMessage',
      context: {
        message: message,
      },
    });
    return {
      success: true,
    };
  }

  async sendMessage(data: Message) {
    await this.mailerService.sendMail({
      to: 'ainarakotomalala227@gmail.com',
      from: data.email,
      subject: `ENI - ${data.object}`,
      template: '/fromWebsite',
      context: {
        message: data.message,
        source: data.email,
        objet: data.object,
        nom: data.nom,
      },
    });
    return {
      success: true,
    };
  }
}
