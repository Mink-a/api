import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { FindAllQueryDto } from 'src/common/dtos/find-all-query.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });
    return { data: user };
  }

  async findAll({ page = 0, limit = 10, search = '' }: FindAllQueryDto) {
    const pageNum = page > 0 ? page - 1 : 0;
    const orders = await this.prisma.user.findMany({
      skip: pageNum * limit,
      take: +limit,
      where: {
        name: { contains: search },
      },
      orderBy: { createdAt: 'desc' },
    });
    const total = await this.prisma.order.count();
    return { data: orders, total };
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return { data: user };
  }

  async findByName(username: string) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: {
        name: username,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
    return { data: user };
  }

  async remove(id: number) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return { data: user };
  }
}
