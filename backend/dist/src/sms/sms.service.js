"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_twilio_1 = require("nestjs-twilio");
let SMSService = class SMSService {
    constructor(client) {
        this.client = client;
    }
    async sendSMS(sms) {
        console.log(sms);
        try {
            return await this.client.messages.create({
                body: sms.message,
                from: process.env.TARGET_PHONE_NUMBER_FROM,
                to: sms.numeroTo,
            });
        }
        catch (e) {
            return e;
        }
    }
};
SMSService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_twilio_1.InjectTwilio)()),
    __metadata("design:paramtypes", [Object])
], SMSService);
exports.SMSService = SMSService;
//# sourceMappingURL=sms.service.js.map