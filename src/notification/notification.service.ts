import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AxiosService } from '../axios/axios.service';

@Injectable()
export class NotificationService {
    constructor(private prisma: PrismaService, private axiosService: AxiosService) { }

    async sendSMSNotification(user_id: number) {
        const { phone, name } = await this.prisma.user.findUnique({ where: { id: user_id }, select: { name: true, phone: true } });
        const message = `Hello ${name}, thank you for submitting your reading interval`;
        const response = await this.axiosService.post(process.env.SMS_PROVIDER_URL, { phone, message });

        if (response.status === 200) {
            return { status: 200, message: 'Notification sent successfully' }
        } else {
            return { status: response.status, message: response.data }
        }
    }

    // We can add diffrent types of notificaitons here
}
