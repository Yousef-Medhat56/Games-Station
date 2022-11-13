import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { Admin } from './admin.model';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { FilterAdminDto } from './dto/filter-admin.dto';
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
  getAdmin(@Args() FilterAdminDto: FilterAdminDto): Promise<Admin> {
    return this.adminService.find(FilterAdminDto);
  }

  @Mutation(() => Admin)
  createAdmin(@Args('input') createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createAdminDto);
  }

  @Mutation(() => Admin)
  updateAdmin(
    @Args('input') updateAdminDto: UpdateAdminDto,
    @Args('where', { type: () => GraphQLJSON }) where: FilterAdminDto,
  ): Promise<Admin> {
    return this.adminService.update({
      data: updateAdminDto,
      where,
    });
  }

  @Mutation(() => Admin)
  deleteAdmin(@Args() where: FilterAdminDto): Promise<Admin> {
    return this.adminService.delete(where);
  }
}
