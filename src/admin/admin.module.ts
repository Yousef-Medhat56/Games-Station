import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminResolver } from './admin.resolver';
import { AdminService } from './admin.service';

@Module({
  imports: [PrismaModule],
  providers: [AdminResolver, AdminService],
})
export class AdminModule {}
