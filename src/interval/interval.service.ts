import { Injectable } from '@nestjs/common';
import { CreateIntervalDto } from './dto/create-interval.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class IntervalService {
  constructor(private prisma: PrismaService, private notification: NotificationService) { }

  async create(createIntervalDto: CreateIntervalDto) {
    try {

      const interval = await this.prisma.interval.create({
        data: createIntervalDto
      });

      await this.notification.sendSMSNotification(createIntervalDto.user_id);

      return { status: 200, message: 'Interval created successfully', interval }
    } catch (error) {
      return { status: 500, message: 'Interval creation failed', error }
    }
  }

}
