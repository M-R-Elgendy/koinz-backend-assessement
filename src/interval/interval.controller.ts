import { Controller, Post, Body } from '@nestjs/common';
import { IntervalService } from './interval.service';
import { CreateIntervalDto } from './dto/create-interval.dto';
import { CreateIntervalValidationPip } from './validations/pipes/create-interval.validation.pipe';

@Controller('interval')
export class IntervalController {
  constructor(private readonly intervalService: IntervalService) { }

  @Post()
  create(@Body(CreateIntervalValidationPip) createIntervalDto: CreateIntervalDto) {
    return this.intervalService.create(createIntervalDto);
  }
}
