import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './modules/student/student.module';
import { AuthModule } from './modules/auth/auth.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { DepartmentModule } from './modules/department/department.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kiendao:kiendao2001@cluster0.bnqgz.mongodb.net/web-back?retryWrites=true&w=majority'),
    StudentModule,
    TeacherModule,
    AuthModule,
    DepartmentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
