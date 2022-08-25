import { Injectable } from '@nestjs/common';
import { AppSocket } from './app.socket';

@Injectable()
export class AppService {
  constructor(private appSocket: AppSocket) {}
  getHello() {
    return {
      message: 'Welcome to Backend',
    };
  }
}
