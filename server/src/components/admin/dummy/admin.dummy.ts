import { Admin } from "../admin.model";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { UpdateAdminDto } from "../dto/update-admin.dto";
import { v4 as uuid4 } from 'uuid';

export const adminIdDummy = uuid4();

export const newAdminDummy: CreateAdminDto = {
  email: 'jonsnow@gmail.com',
  first_name: 'Jon',
  last_name: 'Snow',
};

export const adminDummy: Admin = {
  admin_id: adminIdDummy,
  password: '####',
  is_super_admin: false,
  ...newAdminDummy,
};

export const updatedAdminDummy: UpdateAdminDto = {
  first_name: 'Aegon',
  last_name: 'Targaryen',
};

export const adminArrDummy: Admin[] = [
  adminDummy,
  { ...adminDummy, admin_id: uuid4(), email: 'jonsnow2@gmail.com' },
  { ...adminDummy, admin_id: uuid4(), email: 'jonsnow3@gmail.com' },
];