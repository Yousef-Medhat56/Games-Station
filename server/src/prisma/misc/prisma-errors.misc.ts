//Handling errors and exceptions in Prisma: https://www.prisma.io/docs/concepts/components/prisma-client/handling-exceptions-and-errors
//Prisma errors reference: https://www.prisma.io/docs/reference/api-reference/error-reference#error-codes

import { ConflictException, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

export const handlePrismaError = (err: unknown) => {
  //if the error in known prisma error
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      throw new ConflictException('The record already exists');
    } else if (err.code === 'P2025') {
      throw new NotFoundException('The record does not exist');
    } else {
      throw err;
    }
  } 
  //if the error is unknown 
  else {
    throw err;
  }
};
