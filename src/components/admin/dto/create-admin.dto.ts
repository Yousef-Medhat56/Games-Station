import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'The input type for creating a new admin' })
export class CreateAdminDto {
  @Field({ description: 'The admin email' })
  email: string;

  @Field({ description: 'The admin first name' })
  first_name: string;

  @Field({ description: 'The admin last name' })
  last_name: string;
}
