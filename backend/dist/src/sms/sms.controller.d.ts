import { SMSInterface } from './interfaces/sms.interface';
import { SMSService } from './sms.service';
export declare class SMSController {
    private smsService;
    constructor(smsService: SMSService);
    create(sms: SMSInterface): Promise<"sms sent" | "sms error">;
}
