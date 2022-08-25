import { Injectable } from "@nestjs/common";
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { SMSInterface } from './interfaces/sms.interface';

@Injectable()
export class SMSService {
    public constructor(@InjectTwilio() private readonly client: TwilioClient) { }

    async sendSMS(sms: SMSInterface) {
        console.log(sms);
        try {
            return await this.client.messages.create({
                body: sms.message,
                from: process.env.TARGET_PHONE_NUMBER_FROM,
                to: sms.numeroTo,
            });
        } catch (e) {
            return e;
        }
    }
}