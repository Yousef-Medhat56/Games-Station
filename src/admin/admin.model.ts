import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Admin {
  @Field((type) => ID)
  admin_id: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password?: string;

  @Field()
  username: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  is_super_admin: boolean;
}
