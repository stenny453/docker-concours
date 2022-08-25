import { MailService } from './mail.service';
import { Request } from 'express';
export declare class MailController {
    private mailService;
    constructor(mailService: MailService);
    sendMessage(request: Request): Promise<void>;
}
