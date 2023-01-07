import { Test, TestingModule } from '@nestjs/testing';
import { AdminResolver } from './admin.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { AdminService } from './admin.service';
import { prismaMock } from '../../prisma/singleton';
import {
  adminArrDummy,
  adminDummy,
  adminIdDummy,
  newAdminDummy,
  updatedAdminDummy,
} from './dummy/admin.dummy';

describe('AdminResolver', () => {
  let resolver: AdminResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminResolver, AdminService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    resolver = module.get<AdminResolver>(AdminResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a new admin', async () => {
    prismaMock.admin.create.mockResolvedValueOnce(adminDummy);
    const admin = await resolver.createAdmin(newAdminDummy);
    expect(admin).toEqual(adminDummy);
  });

  it('should get a single admin', async () => {
    prismaMock.admin.findUnique.mockResolvedValueOnce(adminDummy);
    const admin = await resolver.getAdmin(adminIdDummy);
    expect(admin).toEqual(adminDummy);
  });

  it('should get an array of admins', async () => {
    prismaMock.admin.findMany.mockResolvedValueOnce(adminArrDummy);
    const adminArr = await resolver.getAdmins({});
    expect(adminArr).toEqual(adminArrDummy);
  });

  it('should update a single admin', async () => {
    const updatedAdminMock = {
      ...adminDummy,
      ...updatedAdminDummy,
    };
    prismaMock.admin.update.mockResolvedValueOnce(updatedAdminMock);
    const admin = await resolver.updateAdmin(adminIdDummy, updatedAdminDummy);
    expect(admin).toEqual(updatedAdminMock);
  });

  it('should delete a single admin', async () => {
    prismaMock.admin.delete.mockResolvedValueOnce(adminDummy);
    const admin = await resolver.deleteAdmin(adminIdDummy);
    expect(admin).toEqual(adminDummy);
  });
});
