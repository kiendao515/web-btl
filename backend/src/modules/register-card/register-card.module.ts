import { Module } from '@nestjs/common';
import { RegisterCardService } from './register-card.service';
import { RegisterCardController } from './register-card.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from '../teacher/entities/teacher.entity';
import { RegisterCard, RegisterCardSchema } from './entities/register-card.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { TeacherService } from '../teacher/teacher.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    MongooseModule.forFeature([{ name: RegisterCard.name, schema: RegisterCardSchema }]),
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [RegisterCardController],
  providers: [RegisterCardService,JwtStrategy,TeacherService]
})
export class RegisterCardModule {}
