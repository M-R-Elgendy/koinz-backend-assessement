import { Injectable } from '@nestjs/common';
import { CreateIntervalDto } from './dto/create-interval.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IntervalService {
  constructor(private prisma: PrismaService) { }

  async create(createIntervalDto: CreateIntervalDto) {
    try {
      const interval = await this.prisma.interval.create({
        data: createIntervalDto
      });
      return { status: 200, message: 'Interval created successfully', interval }
    } catch (error) {
      console.log(error);
      return { status: 500, message: 'Interval creation failed', error }
    }
  }

}
