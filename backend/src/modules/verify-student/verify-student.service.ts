import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from '../student/entities/student.entity';
import { CreateVerifyStudentDto } from './dto/create-verify-student.dto';
import { UpdateVerifyStudentDto } from './dto/update-verify-student.dto';
import { VerifyStudent, VerifyStudentDocument } from './entities/verify-student.entity';

@Injectable()
export class VerifyStudentService {
  constructor(
    @InjectModel(Student.name) private student: Model<StudentDocument>,
    @InjectModel(VerifyStudent.name) private verifyStudent: Model<VerifyStudentDocument>,
    private jwtService: JwtService,
  ){}
  async create(token:any,createVerifyStudentDto: CreateVerifyStudentDto) {
    const payload = this.jwtService.verify(token);
    if (payload.role == 3) {
      let student = await this.student.findOne({ email: payload.email })
      if(student){
        let c= new VerifyStudent();
        c.student = student;
        c.identityImage= createVerifyStudentDto.identityImage;
        c.studentIdentityImage = createVerifyStudentDto.studentIdentityImage;
        c.birthCertificateImage = createVerifyStudentDto.birthCertificateImage;
        return new this.verifyStudent(c).save();
      }
    }
  }

  async verifyValidStudent(update :UpdateVerifyStudentDto):Promise<VerifyStudent>{
    let c = await this.verifyStudent.findOneAndUpdate({_id:update.verifyStudentId},{check:true},{new:true});
    if(c){
      return c;
    }else return null;
  }

  async findAll() {
    return await this.verifyStudent.find({check:false});
  }

  async checkMyRequest(token:any):Promise<VerifyStudent>{
    const payload = this.jwtService.verify(token);
    if (payload.role == 3) {
      let student = await this.student.findOne({ email: payload.email })
      if(student){
        return await this.verifyStudent.findOne({student:student._id}).populate('student')
      }else return null;
    }
  }
}
