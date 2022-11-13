import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Admin, Prisma } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async find(
    adminWhereUniqueInput: Prisma.AdminWhereUniqueInput,
  ): Promise<Admin | null> {
    return this.prisma.admin.findUnique({
      where: adminWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AdminWhereUniqueInput;
    where?: Prisma.AdminWhereInput;
    orderBy?: Prisma.AdminOrderByWithRelationInput;
  }): Promise<Admin[]> {
    return this.prisma.admin.findMany({ ...params });
  }

  async create(data: Prisma.AdminCreateInput): Promise<Admin> {
    return this.prisma.admin.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.AdminWhereUniqueInput;
    data: Prisma.AdminUpdateInput;
  }): Promise<Admin> {
    return this.prisma.admin.update({ ...params });
  }

  async delete(where: Prisma.AdminWhereUniqueInput): Promise<Admin> {
    return this.prisma.admin.delete({
      where,
    });
  }
}
