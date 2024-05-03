import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { IntervalModule } from './interval/interval.module';
import { RecommendModule } from './recommend/recommend.module';
import { NotificationService } from './notification/notification.service';
import { AxiosService } from './axios/axios.service';


@Module({
  imports: [IntervalModule, RecommendModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, NotificationService, AxiosService],
})
export class AppModule { }
