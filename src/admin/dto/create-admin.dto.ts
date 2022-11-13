import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAdminDto {
  @Field()
  email: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;
}
