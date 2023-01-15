import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Number } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import * as bcrypt from 'bcrypt';
import { Student, StudentDocument } from './entities/student.entity';
import { StudentLoginDto } from './dto/login.dto';
@Injectable()
export class StudentService {
    constructor(
      @InjectModel(Student.name) private student: Model<StudentDocument>
    ) {}
    async create(createStudentDto: CreateStudentDto):Promise<Student> {
        try {
          const s = new Student();
          const hashPassword = await bcrypt.hash(createStudentDto.password, 10);
          s.email = createStudentDto.email;
          s.password = hashPassword;
          s.name= createStudentDto.name;
          s.studentCode= createStudentDto.studentCode;
          s.identification= createStudentDto.identification;
          s.userImage = createStudentDto.userImage;
          s.age = createStudentDto.age;
          s.sector= createStudentDto.sector;
          s.totalOfCredit = createStudentDto.totalOfCredit;
          return new this.student(s).save();
        } catch (error) {
          throw new Error(`Error create student ${error}`);
        }
    }
    async getAllStudents():Promise<any>{
      return this.student.find({}).populate('sector');
    }

    async checkStudentLogin(@Body() loginDto: StudentLoginDto): Promise<Student> {
      try {
        const department = await this.student.findOne({ email: loginDto.email });
        if (department) {
          const isMatch = await bcrypt.compare(loginDto.password, department.password);
          if (isMatch) {
            return department;
          } else {
            throw new Error(`password is incorrect`);
          }
        }else{
          return null;
        }
      } catch (err) {
        throw new Error(`Error finding ${err} user ${err.message}`);
      }
    }
    
}
