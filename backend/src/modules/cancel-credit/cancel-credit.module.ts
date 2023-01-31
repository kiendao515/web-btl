import { Module } from '@nestjs/common';
import { CancelCreditService } from './cancel-credit.service';
import { CancelCreditController } from './cancel-credit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CancelCredit, CancelCreditSchema } from './entities/cancel-credit.entity';
import { Student, StudentSchema } from '../student/entities/student.entity';
import { Registration, RegistrationSchema } from '../registration/entities/registration.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { StudentService } from '../student/student.service';
import { RegistrationService } from '../registration/registration.service';
import { Subject, SubjectSchema } from '../subjects/entities/subjects.entity';
import { CourseService } from '../course/course.service';
import { Course, CourseSchema } from '../course/entities/course.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CancelCredit.name, schema: CancelCreditSchema }]),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    MongooseModule.forFeature([{ name: Registration.name, schema: RegistrationSchema }]),
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [CancelCreditController],
  providers: [CancelCreditService,JwtStrategy,StudentService,RegistrationService,CourseService]
})
export class CancelCreditModule {}
