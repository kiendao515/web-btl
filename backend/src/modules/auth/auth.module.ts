import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { DepartmentModule } from '../department/department.module';
import { DepartmentService } from '../department/department.service';
import { Department, DepartmentSchema } from '../department/entities/department.entity';
import { Student, StudentSchema } from '../student/entities/student.entity';
import { StudentModule } from '../student/student.module';
import { StudentService } from '../student/student.service';
import { Teacher, TeacherSchema } from '../teacher/entities/teacher.entity';
import { TeacherModule } from '../teacher/teacher.module';
import { TeacherService } from '../teacher/teacher.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    MongooseModule.forFeature([{ name: Department.name, schema: DepartmentSchema }]),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    StudentModule,
    TeacherModule,
    DepartmentModule,
    PassportModule,
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [AuthService, JwtStrategy,TeacherService,DepartmentService,StudentService],
  controllers:[AuthController],
  exports: [AuthService],
})
export class AuthModule {}