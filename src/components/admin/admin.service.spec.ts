import { Test, TestingModule } from '@nestjs/testing';
import { prismaMock } from '../../prisma/singleton';
import { PrismaService } from '../../prisma/prisma.service';
import { AdminService } from './admin.service';
import { Admin } from './admin.model';
import { v4 as uuid4 } from 'uuid';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

//Dummy data
const adminIdDummy = uuid4();

const newAdminDummy: CreateAdminDto = {
  email: 'jonsnow@gmail.com',
  first_name: 'Jon',
  last_name: 'Snow',
};

const adminDummy: Admin = {
  admin_id: adminIdDummy,
  password: '####',
  is_super_admin: false,
  ...newAdminDummy,
};

const updatedAdminDummy: UpdateAdminDto = {
  first_name: 'Aegon',
  last_name: 'Targaryen',
};

const adminArrDummy: Admin[] = [
  adminDummy,
  { ...adminDummy, admin_id: uuid4(), email: 'jonsnow2@gmail.com' },
  { ...adminDummy, admin_id: uuid4(), email: 'jonsnow3@gmail.com' },
];

describe('Test Admin services', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new admin', async () => {
    prismaMock.admin.create.mockResolvedValueOnce(adminDummy);
    const admin = await service.create(newAdminDummy);
    expect(admin).toEqual(adminDummy);
  });

  it('should get a single admin', async () => {
    prismaMock.admin.findUnique.mockResolvedValueOnce(adminDummy);
    const admin = await service.find({ admin_id: adminIdDummy });
    expect(admin).toEqual(adminDummy);
  });

  it('should get an array of admins', async () => {
    prismaMock.admin.findMany.mockResolvedValueOnce(adminArrDummy);
    const adminArr = await service.findAll({});
    expect(adminArr).toEqual(adminArrDummy);
  });

  it('should update a single admin', async () => {
    const updatedAdminMock = {
      ...adminDummy,
      ...updatedAdminDummy,
    };
    prismaMock.admin.update.mockResolvedValueOnce(updatedAdminMock);
    const admin = await service.update({
      where: { admin_id: adminIdDummy },
      data: updatedAdminDummy,
    });
    expect(admin).toEqual(updatedAdminMock);
  });

  it('should delete a single admin', async () => {
    prismaMock.admin.delete.mockResolvedValueOnce(adminDummy);
    const admin = await service.delete({ admin_id: adminIdDummy });
    expect(admin).toEqual(adminDummy);
  });
});
