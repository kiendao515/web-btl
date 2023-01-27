import { Module } from '@nestjs/common';
import { AddCreditService } from './add-credit.service';
import { AddCreditController } from './add-credit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AddCredit, AddCreditSchema } from './entities/add-credit.entity';
import { Student, StudentSchema } from '../student/entities/student.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { StudentService } from '../student/student.service';
import { Registration, RegistrationSchema } from '../registration/entities/registration.entity';
import { RegistrationService } from '../registration/registration.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AddCredit.name, schema: AddCreditSchema }]),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    MongooseModule.forFeature([{ name: Registration.name, schema: RegistrationSchema }]),
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [AddCreditController],
  providers: [AddCreditService,JwtStrategy,StudentService,RegistrationService]
})
export class AddCreditModule {}
