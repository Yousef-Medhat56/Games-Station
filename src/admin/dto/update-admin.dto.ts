import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAdminDto {
  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  first_name?: string;

  @Field({ nullable: true })
  last_name?: string;

  @Field({ nullable: true })
  is_super_Admin?: string;
}
