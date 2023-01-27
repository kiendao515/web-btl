import { Module } from '@nestjs/common';
import { VerifyStudentService } from './verify-student.service';
import { VerifyStudentController } from './verify-student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../student/entities/student.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { StudentService } from '../student/student.service';
import { VerifyStudent, VerifyStudentSchema } from './entities/verify-student.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    MongooseModule.forFeature([{ name: VerifyStudent.name, schema: VerifyStudentSchema }]),
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [VerifyStudentController],
  providers: [VerifyStudentService,JwtStrategy,StudentService]
})
export class VerifyStudentModule {}
