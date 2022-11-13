import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import GraphQLJSON from 'graphql-type-json';

@ArgsType()
export class GetAdminsDto {
  @Field((type) => Int, { nullable: true })
  skip?: number;

  @Field((type) => Int, { nullable: true })
  take?: number;

  @Field((type) => GraphQLJSON, { nullable: true })
  cursor?: Prisma.AdminWhereUniqueInput;

  @Field((type) => GraphQLJSON, { nullable: true })
  where?: Prisma.AdminWhereInput;

  @Field((type) => GraphQLJSON, { nullable: true })
  orderBy?: Prisma.AdminOrderByWithRelationInput;
}
