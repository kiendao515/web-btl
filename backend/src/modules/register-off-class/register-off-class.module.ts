import { Module } from '@nestjs/common';
import { RegisterOffClassService } from './register-off-class.service';
import { RegisterOffClassController } from './register-off-class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from '../teacher/entities/teacher.entity';
import { RegisterOffClass, RegisterOffClassSchema } from './entities/register-off-class.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { TeacherService } from '../teacher/teacher.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    MongooseModule.forFeature([{ name: RegisterOffClass.name, schema: RegisterOffClassSchema }]),
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [RegisterOffClassController],
  providers: [RegisterOffClassService,JwtStrategy,TeacherService]
})
export class RegisterOffClassModule {}
