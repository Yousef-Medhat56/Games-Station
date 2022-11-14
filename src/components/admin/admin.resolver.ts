import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Admin } from './admin.model';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { GetAdminsDto } from './dto/get-admins.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private adminService: AdminService) {}

  @Query(() => [Admin], { name: 'admins', description: 'return all admins' })
  getAdmins(@Args() getAdminsDto: GetAdminsDto): Promise<Admin[]> {
    return this.adminService.findAll(getAdminsDto);
  }

  @Query(() => Admin, { name: 'admin', description: 'return specific admin' })
  getAdmin(@Args('id', { type: () => ID }) admin_id: string): Promise<Admin> {
    return this.adminService.find({ admin_id });
  }

  @Mutation(() => Admin)
  createAdmin(@Args('input') createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createAdminDto);
  }

  @Mutation(() => Admin)
  updateAdmin(
    @Args('id', { type: () => ID }) admin_id: string,
    @Args('input') updateAdminDto: UpdateAdminDto,
  ): Promise<Admin> {
    return this.adminService.update({
      data: updateAdminDto,
      where: { admin_id },
    });
  }

  @Mutation(() => Admin)
  deleteAdmin(
    @Args('id', { type: () => ID }) admin_id: string,
  ): Promise<Admin> {
    return this.adminService.delete({ admin_id });
  }
}
