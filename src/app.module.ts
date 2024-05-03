import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
// import { UsersService } from './users/users.service';
// import { UsersModule } from './users/users.module';
import { IntervalModule } from './interval/interval.module';
import { RecommendModule } from './recommend/recommend.module';

@Module({
  imports: [IntervalModule, RecommendModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
