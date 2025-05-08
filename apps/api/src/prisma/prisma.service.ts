import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma'; // relative path to your generated client

@Injectable()
export class PrismaService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }
}
//as This service extends the PrismaClient class, allowing you to use it in your application.
// This service etends the PrismaClient class, allowing you to use it in your application.
// You can add custom methods or properties here if need
