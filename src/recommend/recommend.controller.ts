import { Controller, Get } from '@nestjs/common';
import { RecommendService } from './recommend.service';

@Controller('recommend')
export class RecommendController {
  constructor(private readonly recommendService: RecommendService) { }

  @Get()
  findAll() {
    return this.recommendService.recomment();
  }
}
