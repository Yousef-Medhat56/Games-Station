import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { AdminModule } from './components/admin/admin.module';
import { appoloDriverConfig } from './config/apollo-driver.config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(appoloDriverConfig),
    AdminModule,
  ],
})
export class AppModule {}
