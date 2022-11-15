import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Admin } from './admin.model';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { GetAdminsDto } from './dto/get-admins.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
@Resolver(() => Admin)
export class AdminResolver {
  constructor(private adminService: AdminService) {}

  @Query(() => [Admin], { name: 'admins', description: 'Return admins list' })
  getAdmins(@Args() getAdminsDto: GetAdminsDto): Promise<Admin[] | undefined> {
    return this.adminService.findAll(getAdminsDto);
  }

  @Query(() => Admin, {
    name: 'admin',
    description: 'Return one admin using his `id`',
  })
  getAdmin(
    @Args('id', { type: () => ID, description: 'The admin id' })
    admin_id: string,
  ): Promise<Admin | null | undefined> {
    return this.adminService.find({ admin_id });
  }

  @Mutation(() => Admin, { description: 'Create a new admin' })
  createAdmin(
    @Args('input') createAdminDto: CreateAdminDto,
  ): Promise<Admin | undefined> {
    return this.adminService.create(createAdminDto);
  }

  @Mutation(() => Admin, { description: 'Update one admin using his `id`' })
  updateAdmin(
    @Args('id', { type: () => ID, description: 'The admin id' })
    admin_id: string,
    @Args('input') updateAdminDto: UpdateAdminDto,
  ): Promise<Admin | undefined> {
    return this.adminService.update({
      data: updateAdminDto,
      where: { admin_id },
    });
  }

  @Mutation(() => Admin, { description: 'Delete one admin using his `id`' })
  deleteAdmin(
    @Args('id', { type: () => ID, description: 'The admin id' })
    admin_id: string,
  ): Promise<Admin | undefined> {
    return this.adminService.delete({ admin_id });
  }
}
