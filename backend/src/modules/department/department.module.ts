import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from './entities/department.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Department.name, schema: DepartmentSchema }]),
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    })
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService,JwtStrategy]
})
export class DepartmentModule {}
