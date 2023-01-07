import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'The Admin object' })
export class Admin {
  @Field((type) => ID, { description: 'The admin ID' })
  admin_id: string;

  @Field({ description: 'The admin email' })
  email: string;

  @Field(() => String, { nullable: true, description: 'The admin password' })
  password: string | null;

  @Field({ description: 'The admin first name' })
  first_name: string;

  @Field({ description: 'The admin last name' })
  last_name: string;

  @Field({
    description: 'The admin state whether he is the super admin or not',
    defaultValue: false,
  })
  is_super_admin: boolean;
}
