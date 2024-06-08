import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [OrdersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
