import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
  ) { }
  async create(token: any, createVerifyStudentDto: CreateVerifyStudentDto) {
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role == 3) {
        let student = await this.student.findOne({ email: payload.email })
        if (student) {
          let c = new VerifyStudent();
          c.student = student;
          c.identityImage = createVerifyStudentDto.identityImage;
          c.studentIdentityImage = createVerifyStudentDto.studentIdentityImage;
          c.birthCertificateImage = createVerifyStudentDto.birthCertificateImage;
          return new this.verifyStudent(c).save();
        }
      } else throw new HttpException({ message: 'user is not a student' }, HttpStatus.FORBIDDEN);
    } catch (error) {
      throw new HttpException({ message: error.message }, HttpStatus.FORBIDDEN);
    }
  }

  async verifyValidStudent(update: UpdateVerifyStudentDto): Promise<any> {
    if (update.status == "true" || update.status == "false") {
      let c = await this.verifyStudent.findOneAndUpdate({ _id: update.verifyStudentId }, { check: update.status }, { new: true });
      if (c) {
        return c;
      } else throw new HttpException({ message: "Registration verify student form is not found" }, HttpStatus.NOT_FOUND);
    } else {
      throw new HttpException({ message: "status is can only true or false" }, HttpStatus.NOT_FOUND);
    }
  }

  async findAll() {
    return await this.verifyStudent.find({ check: "pending" });
  }

  async checkMyRequest(token: any): Promise<VerifyStudent> {
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role == 3) {
        let student = await this.student.findOne({ email: payload.email })
        if (student) {
          return await this.verifyStudent.findOne({ student: student._id }).populate('student')
        } else return null;
      }
    } catch (error) {
      throw new HttpException({ message: error.message }, HttpStatus.FORBIDDEN);
    }
  }
}
