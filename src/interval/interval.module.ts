import { Module } from '@nestjs/common';
import { IntervalService } from './interval.service';
import { IntervalController } from './interval.controller';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from '../notification/notification.service';
import { AxiosService } from '../axios/axios.service';

@Module({
  controllers: [IntervalController],
  providers: [IntervalService, PrismaService, NotificationService, AxiosService],
})
export class IntervalModule { }
