import { Injectable, UseGuards } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { FindAllQueryDto } from 'src/common/dtos/find-all-query.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@UseGuards(JwtAuthGuard)
@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = await this.prisma.order.create({
      data: { ...createOrderDto, orderNumber: `ORD-${Date.now()}` },
    });
    return { data: order };
  }

  async findAll({
    page = 0,
    limit = 10,
    search = '',
    fromDate,
  }: FindAllQueryDto) {
    const pageNum = page > 0 ? page - 1 : 0;
    const orders = await this.prisma.order.findMany({
      skip: pageNum * limit,
      take: +limit,
      where: {
        description: { contains: search },
        date: {
          gt: fromDate && new Date(fromDate),
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    const total = await this.prisma.order.count();
    return { data: orders, total };
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });
    return { data: order };
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });
    return { data: order };
  }

  async remove(id: number) {
    const order = await this.prisma.order.delete({
      where: { id },
    });
    return { data: order };
  }
}
