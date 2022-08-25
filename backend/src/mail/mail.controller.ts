import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { MailService } from './mail.service';
import { Message } from './interfaces/message.interface';
import { Request } from 'express';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) { }

  @Post('sendMessage')
  async sendMessage(@Req() request: Request) {
    await this.mailService.sendMessage(request.body);
  }
}
