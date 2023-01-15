import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from '../student/entities/student.entity';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration, RegistrationDocument } from './entities/registration.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Registration.name) private registration: Model<RegistrationDocument>,
    @InjectModel(Student.name) private student: Model<StudentDocument>,
    private jwtService: JwtService,
  ) {}
  async registerCourse(token:any,body:CreateRegistrationDto):Promise<any>{
    const payload = this.jwtService.verify(token);
    console.log(payload);
    if(payload.role==3){
      let student = await this.student.findOne({email:payload.email})
      if(student){
        console.log(student);
        let r= new Registration();
        r.student = student;
        r.subject = body.subject;
        r.course = body.course;
        return new this.registration(r).save();
      }else return "Token exprised"
    }else {
      return "User is not student"
    }
  }

  async getCurrentStudentCourse(token:any):Promise<any>{
    const payload = this.jwtService.verify(token);
    if(payload.role==3){
      let student = await this.student.findOne({email:payload.email})
      if(student){
        console.log(student);
        return await this.registration.findOne({student:student._id}).populate('student').populate('course').populate('subject');
      }else return "Token exprised"
    }else {
      return "User is not student"
    }
  }

  async getStudentCourses():Promise<any>{
    return await this.registration.find({}).populate('student').populate('course').populate('subject');
  }
}
