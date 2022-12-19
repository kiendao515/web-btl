import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { StudentModule } from '../student/student.module';
import { Teacher, TeacherSchema } from '../Teacher/entities/teacher.entity';
import { TeacherService } from '../Teacher/teacher.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    StudentModule,
    PassportModule,
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [AuthService, JwtStrategy,TeacherService],
  controllers:[AuthController],
  exports: [AuthService],
})
export class AuthModule {}