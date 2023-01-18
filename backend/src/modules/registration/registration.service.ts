import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from '../student/entities/student.entity';
import { CreateMoreDto } from './dto/create-more.dto';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration, RegistrationDocument } from './entities/registration.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Registration.name) private registration: Model<RegistrationDocument>,
    @InjectModel(Student.name) private student: Model<StudentDocument>,
    private jwtService: JwtService,
  ) { }
  async registerCourse(token: any, body: CreateRegistrationDto): Promise<any> {
    const payload = this.jwtService.verify(token);
    console.log(payload);
    if (payload.role == 3) {
      let student = await this.student.findOne({ email: payload.email })
      if (student) {
        let credit = 0;
        let registration = await this.registration.findOne({ student: student._id, course: body.course }).populate('student').populate('course').populate('subject');
        if (!registration) {
          if (new Date(registration.course.startDate) < new Date(Date.now()) &&
            new Date(Date.now()) < new Date(registration.course.closeDate)) {
            let r = new Registration();
            r.student = student;
            r.subject = body.subject;
            r.course = body.course;
            return new this.registration(r).save();
          } else {
            return "This is not the time for registering"
          }
        } else {
          for (var i = 0; i < registration.subject.length; i++) {
            credit += registration.subject[i].numberOfCredit;
          }
          if (credit < 24) {
            console.log(new Date(registration.course.closeDate) > new Date(Date.now()));
            if (new Date(registration.course.startDate) < new Date(Date.now()) &&
              new Date(Date.now()) < new Date(registration.course.closeDate)) {
              this.registration.findOneAndUpdate({
                student:student._id,
                course:body.course
              },{subject:body.subject},{new:true},(err,doc)=>{
                if(doc){
                  //console.log(doc);
                  return doc;
                }
              })
            } else {
              return "This is not the time for registering"
            }
          } else return "Over 24 credits"
        }
      } else return "Token exprised"
    } else {
      return "User is not student"
    }
  }

  async getCurrentStudentCourse(token: any): Promise<any> {
    const payload = this.jwtService.verify(token);
    if (payload.role == 3) {
      let student = await this.student.findOne({ email: payload.email })
      if (student) {
        console.log(student);
        return await this.registration.findOne({ student: student._id }).populate('student').populate('course').populate('subject');
      } else return "Token exprised"
    } else {
      return "User is not student"
    }
  }

  async getStudentCourses(): Promise<any> {
    return await this.registration.find({}).populate('student').populate('course').populate('subject');
  }
}
