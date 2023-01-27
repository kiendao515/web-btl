import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { Student, StudentSchema } from './entities/student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
        JwtModule.register({
            secret: "kiendao2001",
            signOptions: { expiresIn: '10h' },
        })
    ],

    controllers:[StudentController],
    providers:[StudentService,JwtStrategy]
})
export class StudentModule {}
