import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';
import { SMSController } from './sms.controller';
import { SMSService } from './sms.service';

@Module({
    imports: [
        TwilioModule.forRoot({
            accountSid: process.env.TWILIO_ACCOUNT_SID,
            authToken: process.env.TWILIO_AUTH_TOKEN,
        }),
    ],
    controllers: [SMSController],
    providers: [SMSService],
})
export class SMSModule { }