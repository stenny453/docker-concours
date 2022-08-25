import { TwilioClient } from 'nestjs-twilio';
import { SMSInterface } from './interfaces/sms.interface';
export declare class SMSService {
    private readonly client;
    constructor(client: TwilioClient);
    sendSMS(sms: SMSInterface): Promise<any>;
}
