import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from '../course/entities/course.entity';
import { Registration, RegistrationDocument } from '../registration/entities/registration.entity';
import { Student, StudentDocument } from '../student/entities/student.entity';
import { CreateAddCreditDto } from './dto/create-add-credit.dto';
import { UpdateAddCreditDto } from './dto/update-add-credit.dto';
import { AddCredit, AddCreditDocument } from './entities/add-credit.entity';

@Injectable()
export class AddCreditService {
  constructor(
    @InjectModel(Student.name) private student: Model<StudentDocument>,
    @InjectModel(AddCredit.name) private addCredit: Model<AddCreditDocument>,
    @InjectModel(Registration.name) private registration: Model<RegistrationDocument>,
    @InjectModel(Course.name) private course: Model<CourseDocument>,
    private jwtService: JwtService,
  ) { }
  async create(token: any, createAddCreditDto: CreateAddCreditDto) {
    const payload = this.jwtService.verify(token);
    if (payload.role == 3) {
      let student = await this.student.findOne({ email: payload.email })
      if (student) {
        let cot= await this.course.findOne({_id:createAddCreditDto.course})
        if(new Date(cot.closeDate) < new Date(Date.now())){
          let c = new AddCredit();
        c.subject = createAddCreditDto.subject;
        c.course = createAddCreditDto.course;
        c.student = student;
        c.reason = createAddCreditDto.reason;
        return new this.addCredit(c).save();
        }else{
          throw new HttpException({ message: 'Course is still opening' }, HttpStatus.BAD_REQUEST);
        }
      }else throw new HttpException({ message: 'invalid student email' }, HttpStatus.UNAUTHORIZED);
    }else throw new HttpException({ message: 'user is not a student' }, HttpStatus.UNAUTHORIZED);
  }

  async findAll() {
    return await this.addCredit.find({ check: "pending" });
  }

  async getOwnAddCredit(token: any) {
    const payload = this.jwtService.verify(token);
    if (payload.role == 3) {
      let student = await this.student.findOne({ email: payload.email })
      if (student) {
        return await this.addCredit.find({ student: student._id }).populate({
          path: 'subject',
          populate: {
            path: 'sector',
            model: 'Sector'
          }
        }).populate('student').populate('course')
      }
    } else throw new HttpException({ message: 'user is not a student' }, HttpStatus.UNAUTHORIZED);
  }

  async acceptRegisterMoreCredit(addCredit: UpdateAddCreditDto): Promise<any> {
    if (addCredit.status == "true") {
      let c = await this.addCredit.findOneAndUpdate({ _id: addCredit.addCreditId }, { check: addCredit.status }, { new: true });
      if (c) {
        await this.registration.findOneAndUpdate({ student: c.student, course: c.course }, { subject: c.subject }, { new: true })
        return c;
      } else throw new HttpException({ message: 'Không tồn tại đơn đăng kí thêm tín chỉ' }, HttpStatus.BAD_REQUEST);
    } else if(addCredit.status=="false"){
      let c = await this.addCredit.findOneAndUpdate({ _id: addCredit.addCreditId }, { check: addCredit.status }, { new: true });
      if (c) {
        return c;
      } else throw new HttpException({ message: 'Không tồn tại đơn đăng kí thêm tín chỉ' }, HttpStatus.BAD_REQUEST);
    }
    else {
      throw new HttpException({ message: 'trường status không hợp lệ' }, HttpStatus.BAD_REQUEST);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} addCredit`;
  }
}
