import { AppSocket } from './app.socket';
export declare class AppService {
    private appSocket;
    constructor(appSocket: AppSocket);
    getHello(): {
        message: string;
    };
}
