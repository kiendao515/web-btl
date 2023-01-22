import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from './entities/teacher.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    JwtModule.register({
      secret: "kiendao2001",
      signOptions: { expiresIn: '10h' },
  })
  ],
  controllers: [TeacherController],
  providers: [TeacherService,JwtStrategy]
})
export class TeacherModule {}
