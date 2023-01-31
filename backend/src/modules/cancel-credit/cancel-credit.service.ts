import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration, RegistrationDocument } from '../registration/entities/registration.entity';
import { Student, StudentDocument } from '../student/entities/student.entity';
import { Subject, SubjectDocument } from '../subjects/entities/subjects.entity';
import { CreateCancelCreditDto } from './dto/create-cancel-credit.dto';
import { UpdateCancelCreditDto } from './dto/update-cancel-credit.dto';
import { CancelCredit, CancelCreditDocument } from './entities/cancel-credit.entity';

@Injectable()
export class CancelCreditService {
  constructor(
    @InjectModel(Student.name) private student: Model<StudentDocument>,
    @InjectModel(CancelCredit.name) private cancelCredit: Model<CancelCreditDocument>,
    @InjectModel(Registration.name) private registration: Model<RegistrationDocument>,
    @InjectModel(Subject.name) private subject: Model<SubjectDocument>,
    private jwtService: JwtService,
  ) { }
  async create(token: any, createCancelCreditDto: CreateCancelCreditDto) {
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role == 3) {
        let student = await this.student.findOne({ email: payload.email })
        if (student) {
          let c = new CancelCredit();
          c.subject = createCancelCreditDto.subject;
          c.course = createCancelCreditDto.course;
          c.student = student;
          c.reason = createCancelCreditDto.reason;
          return new this.cancelCredit(c).save();
        }
      } else {
        throw new HttpException({ message: 'user is not a student' }, HttpStatus.FORBIDDEN);
      }
    } catch (error) {
      throw new HttpException({ message: error.message }, HttpStatus.FORBIDDEN);
    }
  }

  async findAll() {
    return await this.cancelCredit.find({ check: "pending" });
  }

  async verifyCancelCredit(cancelCredit: UpdateCancelCreditDto): Promise<CancelCredit> {
    if (cancelCredit.status == "true") {
      let c = await this.cancelCredit.findOneAndUpdate({ _id: cancelCredit.cancelCreditId }, { check: cancelCredit.status}, { new: true });
      if (c) {
        let s = await this.subject.findOne({ _id: cancelCredit.cancelCreditId })
        let r = await this.registration.findOne({ student: c.student, course: c.course }).populate('subject');
        if (r) {
          const index = r.subject.findIndex((item) => item == s);
          let tmp = r.subject.splice(index, 1);
          await this.registration.findOneAndUpdate({ student: c.student, course: c.course }, { subject: tmp }, { new: true })
        }
        return c;
      }
      else throw new HttpException({ message: "đơn đăng kí hủy học phần k tồn tại" }, HttpStatus.NOT_FOUND);
    }else if(cancelCredit.status == "false"){
      let c = await this.cancelCredit.findOneAndUpdate({ _id: cancelCredit.cancelCreditId }, { check: cancelCredit.status }, { new: true });
      return c;
    }else throw new HttpException({ message: "status field is not accepted" }, HttpStatus.NOT_FOUND);;
  }
  async findOne(id: number) {
      return `This action returns a #${id} cancelCredit`;
    }
  }
