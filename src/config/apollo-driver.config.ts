import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

export const appoloDriverConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  formatError: (error: GraphQLError) => {
    const graphQLFormattedError: GraphQLFormattedError = {
      message: error.extensions?.exception?.code || error.message,
    };
    return graphQLFormattedError;
  },
};
