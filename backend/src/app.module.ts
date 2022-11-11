import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './modules/student/student.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kiendao:kiendao2001@cluster0.bnqgz.mongodb.net/web-back?retryWrites=true&w=majority'),
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
