import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import GraphQLJSON from 'graphql-type-json';

@ArgsType()
export class GetAdminsDto {
  @Field((type) => Int, {
    nullable: true,
    description:
      'Specifies how many of the returned objects in the list should be skipped',
  })
  skip?: number;

  @Field((type) => Int, {
    nullable: true,
    description: 'Specifies how many objects should be returned in the list',
  })
  take?: number;

  @Field((type) => GraphQLJSON, {
    nullable: true,
    description: 'Specifies the position for the list',
  })
  cursor?: Prisma.AdminWhereUniqueInput;

  @Field((type) => GraphQLJSON, {
    nullable: true,
    description: 'Filter the admin list by its properties',
  })
  where?: Prisma.AdminWhereInput;

  @Field((type) => GraphQLJSON, {
    nullable: true,
    description: 'Order the returned admin list by any property',
  })
  orderBy?: Prisma.AdminOrderByWithRelationInput;
}
