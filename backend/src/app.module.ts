import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './modules/student/student.module';
import { AuthModule } from './modules/auth/auth.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { DepartmentModule } from './modules/department/department.module';
import { SectorModule } from './modules/sector/sector.module';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { CourseModule } from './modules/course/course.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { AddCreditModule } from './modules/add-credit/add-credit.module';
import { CancelCreditModule } from './modules/cancel-credit/cancel-credit.module';
import { VerifyStudentModule } from './modules/verify-student/verify-student.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kiendao:kiendao2001@cluster0.bnqgz.mongodb.net/web-back?retryWrites=true&w=majority'),
    StudentModule,
    TeacherModule,
    AuthModule,
    DepartmentModule,
    SectorModule,
    SubjectsModule,
    CourseModule,
    RegistrationModule,
    AddCreditModule,
    CancelCreditModule,
    VerifyStudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
