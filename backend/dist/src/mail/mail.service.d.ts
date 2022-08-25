import { MailerService } from '@nestjs-modules/mailer';
import { Message } from './interfaces/message.interface';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMail(email: string, objet: string, message: string): Promise<{
        success: boolean;
    }>;
    sendMessage(data: Message): Promise<{
        success: boolean;
    }>;
}
