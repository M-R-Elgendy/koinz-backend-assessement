import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AxiosService } from '../axios/axios.service';

@Injectable()
export class CronService {
    constructor(private axiosService: AxiosService) { }

    @Cron(CronExpression.EVERY_30_SECONDS)
    async handleCron() {
        const activationRequest = await this.axiosService.get(process.env.ONLINE_URL);
        console.log((activationRequest?.status == 200) ? "Service is active" : "Activation request failed");
    }
}
