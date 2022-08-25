import { Body, Controller, Post } from '@nestjs/common';
import { SMSInterface } from './interfaces/sms.interface';
import { SMSService } from './sms.service';


@Controller('sms')
export class SMSController {
    constructor(private smsService: SMSService) { }

    @Post()
    async create(@Body() sms: SMSInterface) {
        let res = this.smsService.sendSMS(sms);
        if (res) {
            return 'sms sent'
        }
        return 'sms error'
    }
}
