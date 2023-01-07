import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '../../prisma/misc/prisma-errors.misc';
import { Admin } from './admin.model';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async find(
    adminWhereUniqueInput: Prisma.AdminWhereUniqueInput,
  ): Promise<Admin | null | undefined> {
    try {
      const admin = await this.prisma.admin.findUnique({
        where: adminWhereUniqueInput,
      });
      return admin;
    } catch (err) {
      handlePrismaError(err);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AdminWhereUniqueInput;
    where?: Prisma.AdminWhereInput;
    orderBy?: Prisma.AdminOrderByWithRelationInput;
  }): Promise<Admin[] | undefined> {
    try {
      const adminsArr = await this.prisma.admin.findMany({ ...params });
      return adminsArr;
    } catch (err) {
      handlePrismaError(err);
    }
  }

  async create(data: Prisma.AdminCreateInput): Promise<Admin | undefined> {
    try {
      const admin = await this.prisma.admin.create({ data });
      return admin;
    } catch (err) {
      handlePrismaError(err);
    }
  }

  async update(params: {
    where: Prisma.AdminWhereUniqueInput;
    data: Prisma.AdminUpdateInput;
  }): Promise<Admin | undefined> {
    try {
      const admin = await this.prisma.admin.update({ ...params });
      return admin;
    } catch (err) {
      handlePrismaError(err);
    }
  }

  async delete(
    where: Prisma.AdminWhereUniqueInput,
  ): Promise<Admin | undefined> {
    try {
      const admin = await this.prisma.admin.delete({ where });
      return admin;
    } catch (err) {
      handlePrismaError(err);
    }
  }
}
