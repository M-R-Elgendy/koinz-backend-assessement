import { Module } from '@nestjs/common';
import { IntervalService } from './interval.service';
import { IntervalController } from './interval.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [IntervalController],
  providers: [IntervalService, PrismaService],
})
export class IntervalModule { }
