import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class FilterAdminDto {
  @Field({ nullable: true })
  admin_id?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  username?: string;
}
