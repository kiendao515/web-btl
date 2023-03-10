import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Number } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import * as bcrypt from 'bcrypt';
import { Student, StudentDocument } from './entities/student.entity';
import { StudentLoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { UpdateStudentDto } from './dto/update-student.dto';
@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private student: Model<StudentDocument>,
    private jwtService: JwtService
  ) { }
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    try {
      const s = new Student();
      const hashPassword = await bcrypt.hash(createStudentDto.password, 10);
      s.email = createStudentDto.email;
      s.password = hashPassword;
      s.name = createStudentDto.name;
      s.studentCode = createStudentDto.studentCode;
      s.identification = createStudentDto.identification;
      s.userImage = createStudentDto.userImage;
      s.age = createStudentDto.age;
      s.sector = createStudentDto.sector;
      s.totalOfCredit = createStudentDto.totalOfCredit;
      return new this.student(s).save();
    } catch (error) {
      throw new Error(`Error create student ${error}`);
    }
  }
  async getAllStudents(): Promise<any> {
    return this.student.find({}).populate('sector');
  }
  async getStudentInfo(token: any): Promise<any> {
    const payload = this.jwtService.verify(token);
    if (payload.role == 3) {
      let student = await this.student.findOne({ email: payload.email })
      if (student) {
        return {
          ...student.toObject(),
          role:'student'
        }
      } else return null;
    }
  }

  async checkStudentLogin(@Body() loginDto: StudentLoginDto): Promise<Student> {
    try {
      const department = await this.student.findOne({ email: loginDto.email });
      if (department) {
        const isMatch = await bcrypt.compare(loginDto.password, department.password);
        if (isMatch) {
          return department;
        } else {
          throw new Error(`Password is incorrect`);
        }
      } else {
        throw new Error(`Email not found`);
      }
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  }

  async remove(id:string):Promise<any>{
    let rs =await this.student.findByIdAndDelete({_id:id});
    if(rs){
      return rs;
    }else throw new HttpException({ message: 'student not found' }, HttpStatus.NOT_FOUND);
  }
  async update(id: string, updateSectorDto: UpdateStudentDto):Promise<any>{
    let s =await this.student.findOne({_id:id});
    if(s){
      let rs = await this.student.findByIdAndUpdate({_id:id},{
        email:updateSectorDto.email,
        name : updateSectorDto.name,
        studentCode: updateSectorDto.studentCode,
        identification:updateSectorDto.identification,
        userImage:updateSectorDto.userImage,
        age: updateSectorDto.age,
        sector: updateSectorDto.sector,
        totalOfCredit:updateSectorDto.totalOfCredit},{new:true})
      console.log(rs);
      if(rs){
        return rs;
      }else return "Can not update student"
    }else throw new HttpException({ message: 'student not found' }, HttpStatus.NOT_FOUND);
  }

}
