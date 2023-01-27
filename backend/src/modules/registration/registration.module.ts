import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Registration, RegistrationSchema } from './entities/registration.entity';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { StudentService } from '../student/student.service';
import { StudentModule } from '../student/student.module';
import { Student, StudentSchema } from '../student/entities/student.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Registration.name, schema: RegistrationSchema }]),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService,JwtStrategy,StudentService]
})
export class RegistrationModule {}
