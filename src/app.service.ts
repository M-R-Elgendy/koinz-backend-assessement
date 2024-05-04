import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck() {
    return { status: 200, message: "App running" };
  }
}
