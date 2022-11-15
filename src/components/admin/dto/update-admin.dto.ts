import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'The input type for creating a new admin' })
export class UpdateAdminDto {
  @Field({ nullable: true, description: 'The admin password' })
  password?: string;

  @Field({ nullable: true, description: 'The admin first name' })
  first_name?: string;

  @Field({ nullable: true, description: 'The admin last name' })
  last_name?: string;
}
